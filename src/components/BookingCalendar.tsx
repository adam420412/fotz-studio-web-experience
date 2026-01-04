import { useState, useEffect, useCallback } from "react";
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
import { sendBookingToCRM } from "@/hooks/useCRMWebhook";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Imię musi mieć minimum 2 znaki"),
  email: z.string().trim().email("Nieprawidłowy adres email"),
  phone: z.string().trim().min(9, "Podaj prawidłowy numer telefonu"),
  company: z.string().trim().optional(),
  message: z.string().trim().optional(),
});

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"
];

interface BookedSlot {
  date: string;
  time: string;
}

interface BookingCalendarProps {
  onClose?: () => void;
}

export function BookingCalendar({ onClose }: BookingCalendarProps) {
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<"date" | "form" | "success">("date");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeekStart, i));
  const today = startOfDay(new Date());

  // Fetch booked slots for the current week
  const fetchBookedSlots = useCallback(async () => {
    setIsLoadingSlots(true);
    const startDate = format(currentWeekStart, "yyyy-MM-dd");
    const endDate = format(addDays(currentWeekStart, 6), "yyyy-MM-dd");

    const { data, error } = await supabase
      .from('bookings')
      .select('booking_date, booking_time')
      .gte('booking_date', startDate)
      .lte('booking_date', endDate)
      .in('status', ['pending', 'confirmed']);

    if (!error && data) {
      setBookedSlots(data.map(b => ({ 
        date: b.booking_date, 
        time: b.booking_time.substring(0, 5) // Ensure format "HH:MM"
      })));
    }
    setIsLoadingSlots(false);
  }, [currentWeekStart]);

  useEffect(() => {
    fetchBookedSlots();
  }, [fetchBookedSlots]);

  const isSlotBooked = (date: Date, time: string) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return bookedSlots.some(slot => slot.date === dateStr && slot.time === time);
  };

  const handlePrevWeek = () => {
    setCurrentWeekStart(addDays(currentWeekStart, -7));
  };

  const handleNextWeek = () => {
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
    if (selectedDate && selectedTime) {
      setStep("form");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});

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
      // Save to Supabase database (for CRM sync)
      const { error: dbError } = await supabase
        .from('bookings')
        .insert({
          client_name: formData.name,
          client_email: formData.email,
          client_phone: formData.phone || null,
          booking_date: selectedDate ? format(selectedDate, "yyyy-MM-dd") : null,
          booking_time: selectedTime,
          service_type: 'konsultacja',
          notes: formData.company ? `Firma: ${formData.company}. ${formData.message || ''}` : formData.message || null,
          source: 'website',
          status: 'pending',
        });

      if (dbError) {
        console.error("Database error:", dbError);
      }

      // Send email notification via edge function
      try {
        await supabase.functions.invoke('notify-booking', {
          body: {
            client_name: formData.name,
            client_email: formData.email,
            client_phone: formData.phone || null,
            booking_date: selectedDate ? format(selectedDate, "dd.MM.yyyy", { locale: pl }) : "",
            booking_time: selectedTime,
            notes: formData.company ? `Firma: ${formData.company}. ${formData.message || ''}` : formData.message || null,
          },
        });
      } catch (emailError) {
        console.error("Email notification error:", emailError);
      }

      // Send to CRM webhook (fire and forget)
      if (selectedDate && selectedTime) {
        sendBookingToCRM({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          booking_date: format(selectedDate, "yyyy-MM-dd"),
          booking_time: selectedTime,
          service_type: "konsultacja",
          source: "fotz.pl/kontakt",
        });
      }

      setStep("success");
    } catch {
      setFormErrors({ general: "Wystąpił błąd. Spróbuj ponownie." });
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
        <h3 className="text-2xl font-heading font-bold mb-3">
          Konsultacja zarezerwowana!
        </h3>
        <p className="text-muted-foreground mb-2">
          Termin: <span className="font-semibold text-foreground">
            {selectedDate && format(selectedDate, "d MMMM yyyy", { locale: pl })} o {selectedTime}
          </span>
        </p>
        <p className="text-muted-foreground mb-6">
          Wysłaliśmy potwierdzenie na adres {formData.email}
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
              <label className="block text-sm font-medium mb-2">Imię i nazwisko *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Jan Kowalski"
                  className={cn("pl-10 bg-secondary", formErrors.name && "border-red-500")}
                />
              </div>
              {formErrors.name && <p className="text-xs text-red-500 mt-1">{formErrors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="jan@firma.pl"
                  className={cn("pl-10 bg-secondary", formErrors.email && "border-red-500")}
                />
              </div>
              {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Telefon *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+48 123 456 789"
                  className={cn("pl-10 bg-secondary", formErrors.phone && "border-red-500")}
                />
              </div>
              {formErrors.phone && <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Firma</label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  placeholder="Nazwa firmy"
                  className="pl-10 bg-secondary"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">O czym chcesz porozmawiać?</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Opisz krótko, czego dotyczy Twoje zapytanie..."
                className="pl-10 bg-secondary min-h-[100px] resize-none"
              />
            </div>
          </div>

          {formErrors.general && (
            <p className="text-sm text-red-500 text-center">{formErrors.general}</p>
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
      {/* Week navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" size="icon" onClick={handlePrevWeek}>
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <span className="font-medium">
          {format(currentWeekStart, "MMMM yyyy", { locale: pl })}
        </span>
        <Button variant="outline" size="icon" onClick={handleNextWeek}>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((day) => {
          const isDisabled = isWeekend(day) || isBefore(day, today);
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          
          return (
            <button
              key={day.toISOString()}
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
      {selectedDate && (
        <div className="space-y-3">
          <h4 className="font-medium flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Wybierz godzinę
            {isLoadingSlots && <Loader2 className="w-3 h-3 animate-spin text-muted-foreground" />}
          </h4>
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((time) => {
              const isBooked = isSlotBooked(selectedDate, time);
              return (
                <button
                  key={time}
                  onClick={() => !isBooked && handleTimeSelect(time)}
                  disabled={isBooked}
                  className={cn(
                    "py-2 px-3 rounded-lg text-sm font-medium transition-all relative",
                    isBooked && "opacity-40 cursor-not-allowed bg-muted line-through",
                    !isBooked && selectedTime === time && "bg-primary text-primary-foreground",
                    !isBooked && selectedTime !== time && "bg-secondary hover:bg-secondary/80"
                  )}
                >
                  {time}
                  {isBooked && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground">
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-1" />
            Terminy oznaczone na czerwono są już zajęte
          </p>
        </div>
      )}

      {/* Continue button */}
      <Button
        variant="hero"
        className="w-full"
        disabled={!selectedDate || !selectedTime}
        onClick={handleContinue}
      >
        Dalej
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}