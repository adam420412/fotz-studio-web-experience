import { useState, useEffect, useCallback, useRef } from "react";
import { format, addDays, startOfWeek, isSameDay, isWeekend, isBefore, startOfDay } from "date-fns";
import { pl } from "date-fns/locale";
import { ChevronLeft, ChevronRight, Clock, Calendar, CheckCircle, Loader2, User, Mail, Phone, Building, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { submitConsultation } from "@/lib/booking";

/** The visitor's own description, same limit as the contact form. */
export const BOOKING_MESSAGE_LIMIT = 2000;
/** The composed message (description + context note); book-consultation accepts `message` up to 4000 characters. */
export const BOOKING_COMPOSED_LIMIT = 4000;

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Imię musi mieć minimum 2 znaki").max(100, "Imię może mieć do 100 znaków"),
  email: z.string().trim().email("Nieprawidłowy adres email").max(255, "Adres e-mail może mieć do 255 znaków"),
  phone: z.string().trim().max(40, "Numer telefonu może mieć do 40 znaków").refine(value => value.replace(/\D/g, "").length >= 9, "Podaj prawidłowy numer telefonu"),
  company: z.string().trim().max(200, "Nazwa firmy może mieć do 200 znaków").optional(),
  message: z.string().trim().max(BOOKING_MESSAGE_LIMIT, `Wiadomość może mieć do ${BOOKING_MESSAGE_LIMIT} znaków`).optional(),
});

/**
 * Joins the visitor's own message (up to `messageLimit`) with an optional context note
 * (e.g. a calculator summary) so that both land in the booking note / CRM. The composed text
 * stays within `totalLimit`; a full 2000-character description plus a 1200-character note always fits.
 */
// eslint-disable-next-line react-refresh/only-export-components
export function composeBookingMessage(
  message: string | undefined,
  note?: string,
  { messageLimit = BOOKING_MESSAGE_LIMIT, totalLimit = BOOKING_COMPOSED_LIMIT } = {},
): string {
  const own = (message ?? "").trim().slice(0, messageLimit);
  const extra = (note ?? "").trim();
  if (!extra) return own;
  if (!own) return extra.slice(0, totalLimit);
  const room = totalLimit - own.length - 2;
  return room > 0 ? `${own}\n\n${extra.slice(0, room)}` : own;
}

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"
];

interface BookedSlot {
  date: string;
  time: string;
}

export interface BookingPrefill {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
}

interface BookingCalendarProps {
  onClose?: () => void;
  /** Editable starting values, e.g. contact details already typed elsewhere on the page. Never persisted. */
  initialValues?: BookingPrefill;
  /** Context appended to the booking message (and thus the booking note / CRM), e.g. a calculator summary. */
  note?: string;
}

const emptyForm = { name: "", email: "", phone: "", company: "", message: "" };
type BookingField = keyof typeof emptyForm;
const prefillForm = (values?: BookingPrefill) => ({ ...emptyForm, ...Object.fromEntries(Object.entries(values ?? {}).filter(([, v]) => typeof v === "string").map(([k, v]) => [k, String(v)])) }) as typeof emptyForm;

export function BookingCalendar({ onClose, initialValues, note }: BookingCalendarProps) {
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<"date" | "form" | "success">("date");
  const [notificationWarning, setNotificationWarning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(true);
  const [slotsError, setSlotsError] = useState(false);
  const slotsRequest = useRef(0);
  const [formData, setFormData] = useState(() => prefillForm(initialValues));
  const edited = useRef<Set<BookingField>>(new Set());
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const prefillKey = JSON.stringify(initialValues ?? null);

  // New prefill values only replace fields the visitor has not edited; typed text is never overwritten.
  useEffect(() => {
    const next = prefillForm(JSON.parse(prefillKey) ?? undefined);
    setFormData(prev => {
      const merged = { ...prev };
      (Object.keys(emptyForm) as BookingField[]).forEach(key => { if (!edited.current.has(key)) merged[key] = next[key]; });
      return merged;
    });
  }, [prefillKey]);

  const updateField = (key: BookingField, value: string) => {
    edited.current.add(key);
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeekStart, i));
  const today = startOfDay(new Date());

  // Fetch booked slots for the current week
  const fetchBookedSlots = useCallback(async () => {
    const request = ++slotsRequest.current;
    setIsLoadingSlots(true);
    setSlotsError(false);
    const startDate = format(currentWeekStart, "yyyy-MM-dd");
    const endDate = format(addDays(currentWeekStart, 6), "yyyy-MM-dd");

    try {
      const { data, error } = await supabase.functions.invoke('booking-availability', {
        body: { start_date: startDate, end_date: endDate },
        signal: AbortSignal.timeout(15000),
      });
      if (request !== slotsRequest.current) return;
      if (error || data?.success !== true || !Array.isArray(data.slots)) throw error ?? new Error("No availability data");
      setBookedSlots(data.slots);
    } catch {
      if (request === slotsRequest.current) {
        setBookedSlots([]);
        setSlotsError(true);
        setSelectedTime(null);
      }
    } finally {
      if (request === slotsRequest.current) setIsLoadingSlots(false);
    }
  }, [currentWeekStart]);

  useEffect(() => {
    fetchBookedSlots();
  }, [fetchBookedSlots]);

  const isSlotBooked = (date: Date, time: string) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return bookedSlots.some(slot => slot.date === dateStr && slot.time === time);
  };

  const isSlotPast = (date: Date, time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    const slot = new Date(date);
    slot.setHours(hours, minutes, 0, 0);
    return slot <= new Date();
  };

  const handlePrevWeek = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setCurrentWeekStart(addDays(currentWeekStart, -7));
  };

  const handleNextWeek = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setCurrentWeekStart(addDays(currentWeekStart, 7));
  };

  const handleDateSelect = (date: Date) => {
    if (isWeekend(date) || isBefore(date, today)) return;
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime && !isLoadingSlots && !slotsError && !isSlotPast(selectedDate, selectedTime)) {
      setStep("form");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});

    if (!selectedDate || !selectedTime || slotsError || isLoadingSlots || isSlotPast(selectedDate, selectedTime)) {
      setFormErrors({ general: "Wybierz ponownie dostępny termin konsultacji." });
      return;
    }

    const result = bookingSchema.safeParse(formData);
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) errors[err.path[0] as string] = err.message;
      });
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const receipt = await submitConsultation({
        ...result.data,
        message: composeBookingMessage(result.data.message, note),
        booking_date: format(selectedDate, "yyyy-MM-dd"),
        booking_time: selectedTime,
        service_type: 'konsultacja',
      });
      setNotificationWarning(!receipt.agency_notification_sent || !receipt.client_confirmation_sent);
      setStep("success");
    } catch (error) {
      if (error && typeof error === 'object' && 'code' in error && error.code === 'SLOT_TAKEN') {
        setSelectedTime(null);
        setStep("date");
        void fetchBookedSlots();
      }
      setFormErrors({ general: error instanceof Error ? error.message : "Wystąpił błąd. Spróbuj ponownie." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        {notificationWarning && <p role="status" className="text-sm text-muted-foreground mb-4">Zgłoszenie terminu zostało zapisane, ale nie udało się potwierdzić wszystkich powiadomień. Nie wysyłaj go ponownie. W pilnej sprawie zadzwoń: +48 790 814 814.</p>}
          <h3 className="text-2xl font-heading font-bold mb-3">
          Zgłoszenie konsultacji zapisane
        </h3>
        <p className="text-muted-foreground mb-2">
          Termin: <span className="font-semibold text-foreground">
            {selectedDate && format(selectedDate, "d MMMM yyyy", { locale: pl })} o {selectedTime}
          </span>
        </p>
        <p className="text-muted-foreground mb-6">
          Termin wymaga potwierdzenia. Skontaktujemy się z Tobą na adres {formData.email}.
        </p>
        <Button variant="hero" onClick={() => { onClose?.(); if (!onClose) navigate("/"); }}>
          Zamknij
        </Button>
      </div>
    );
  }

  if (step === "form") {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
          <Calendar className="w-5 h-5 text-primary" />
          <span className="font-medium">
            {selectedDate && format(selectedDate, "EEEE, d MMMM yyyy", { locale: pl })}
          </span>
          <Clock className="w-5 h-5 text-primary ml-auto" />
          <span className="font-medium">{selectedTime}</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="booking-name" className="block text-sm font-medium mb-2">Imię i nazwisko *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="booking-name" name="name"
                        autoComplete="name"
                        value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Jan Kowalski"
                  maxLength={100}
                  className={cn("pl-10 bg-secondary", formErrors.name && "border-destructive")}
                />
              </div>
              {formErrors.name && <p className="text-xs text-destructive mt-1">{formErrors.name}</p>}
            </div>
            <div>
              <label htmlFor="booking-email" className="block text-sm font-medium mb-2">Email *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  id="booking-email" name="email"
                        autoComplete="email"
                        value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="jan@firma.pl"
                  maxLength={255}
                  className={cn("pl-10 bg-secondary", formErrors.email && "border-destructive")}
                />
              </div>
              {formErrors.email && <p className="text-xs text-destructive mt-1">{formErrors.email}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="booking-phone" className="block text-sm font-medium mb-2">Telefon *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="tel"
                  id="booking-phone" name="phone"
                        autoComplete="tel"
                        value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+48 123 456 789"
                  maxLength={40}
                  className={cn("pl-10 bg-secondary", formErrors.phone && "border-destructive")}
                />
              </div>
              {formErrors.phone && <p className="text-xs text-destructive mt-1">{formErrors.phone}</p>}
            </div>
            <div>
              <label htmlFor="booking-company" className="block text-sm font-medium mb-2">Firma</label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="booking-company" name="company"
                        autoComplete="organization"
                        value={formData.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  placeholder="Nazwa firmy"
                  maxLength={200}
                  className="pl-10 bg-secondary"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="booking-message" className="block text-sm font-medium mb-2">O czym chcesz porozmawiać?</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Textarea
                id="booking-message" name="message"
                        value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder="Opisz krótko, czego dotyczy Twoje zapytanie..."
                maxLength={BOOKING_MESSAGE_LIMIT}
                className={cn("pl-10 bg-secondary min-h-[100px] resize-none", formErrors.message && "border-destructive")}
              />
            </div>
            {formErrors.message && <p className="text-xs text-destructive mt-1">{formErrors.message}</p>}
            {note?.trim() && (
              <div className="mt-3 rounded-lg border border-border bg-muted/40 p-3 text-xs text-muted-foreground" data-testid="booking-note">
                <p className="font-medium text-foreground mb-1">Do zgłoszenia dołączymy podsumowanie z kalkulatora:</p>
                <p className="whitespace-pre-line max-h-32 overflow-y-auto">{note.trim()}</p>
              </div>
            )}
          </div>

          {formErrors.general && (
            <p className="text-sm text-destructive text-center">{formErrors.general}</p>
          )}

          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={() => setStep("date")} className="flex-1">
              <ChevronLeft className="w-4 h-4" />
              Wróć
            </Button>
            <Button type="submit" variant="hero" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Rezerwuję...
                </>
              ) : (
                "Zarezerwuj termin"
              )}
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {formErrors.general && <p role="alert" className="text-sm text-destructive">{formErrors.general}</p>}
      {/* Week navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" size="icon" onClick={handlePrevWeek} aria-label="Poprzedni tydzień">
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <span className="font-medium text-sm text-center px-2" aria-live="polite">
          {format(currentWeekStart, "d MMM", { locale: pl })} – {format(addDays(currentWeekStart, 6), "d MMM yyyy", { locale: pl })}
        </span>
        <Button variant="outline" size="icon" onClick={handleNextWeek} aria-label="Następny tydzień">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-4 min-[400px]:grid-cols-7 gap-2">
        {weekDays.map((day) => {
          const isDisabled = isWeekend(day) || isBefore(day, today);
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          
          return (
            <button
              key={day.toISOString()}
              aria-label={`${format(day, "EEE d", { locale: pl })} — ${format(day, "EEEE, d MMMM yyyy", { locale: pl })}`}
              aria-pressed={Boolean(isSelected)}
              onClick={() => handleDateSelect(day)}
              disabled={isDisabled}
              className={cn(
                "flex flex-col items-center p-2 sm:p-3 rounded-lg transition-all",
                isDisabled && "opacity-40 cursor-not-allowed",
                !isDisabled && !isSelected && "hover:bg-secondary",
                isSelected && "bg-primary text-primary-foreground"
              )}
            >
              <span className="text-xs uppercase">
                {format(day, "EEE", { locale: pl })}
              </span>
              <span className="text-lg font-bold">
                {format(day, "d")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Time slots */}
      {slotsError && (
        <p role="alert" className="text-sm text-destructive">
          Nie udało się sprawdzić dostępnych terminów. <button type="button" className="underline font-medium" onClick={fetchBookedSlots}>Spróbuj ponownie</button> lub <a href="tel:+48790814814" className="underline">zadzwoń do nas</a>.
        </p>
      )}
      {selectedDate && (
        <div className="space-y-3">
          <h4 className="font-medium flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Wybierz godzinę
            {isLoadingSlots && <Loader2 className="w-3 h-3 animate-spin text-muted-foreground" />}
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {timeSlots.map((time) => {
              const isBooked = isSlotBooked(selectedDate, time);
              const isUnavailable = isBooked || isSlotPast(selectedDate, time) || isLoadingSlots || slotsError;
              return (
                <button
                  key={time}
                  onClick={() => !isUnavailable && handleTimeSelect(time)}
                  disabled={isUnavailable}
                  aria-pressed={selectedTime === time}
                  className={cn(
                    "py-2 px-3 rounded-lg text-sm font-medium transition-all relative",
                    isUnavailable && "opacity-40 cursor-not-allowed bg-muted line-through",
                    !isUnavailable && selectedTime === time && "bg-primary text-primary-foreground",
                    !isUnavailable && selectedTime !== time && "bg-secondary hover:bg-secondary/80"
                  )}
                >
                  {time}
                  {isBooked && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground">
            <span className="inline-block w-2 h-2 bg-destructive rounded-full mr-1" />
            Terminy oznaczone na czerwono są już zajęte
          </p>
        </div>
      )}

      {/* Continue button */}
      <Button
        variant="hero"
        className="w-full"
        disabled={!selectedDate || !selectedTime || isLoadingSlots || slotsError}
        onClick={handleContinue}
      >
        Dalej
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
