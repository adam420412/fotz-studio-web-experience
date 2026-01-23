import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/SEOHead";
import { Calendar, Clock, Mail, Phone, User, CheckCircle, XCircle, Clock3, Loader2, RefreshCw, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Link, Navigate } from "react-router-dom";

interface Booking {
  id: string;
  client_name: string;
  client_email: string;
  client_phone: string | null;
  booking_date: string;
  booking_time: string;
  service_type: string;
  notes: string | null;
  status: string;
  source: string | null;
  created_at: string;
}

const statusConfig = {
  pending: { label: "Oczekuje", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20", icon: Clock3 },
  confirmed: { label: "Potwierdzona", color: "bg-green-500/10 text-green-500 border-green-500/20", icon: CheckCircle },
  cancelled: { label: "Anulowana", color: "bg-red-500/10 text-red-500 border-red-500/20", icon: XCircle },
  completed: { label: "Zakończona", color: "bg-blue-500/10 text-blue-500 border-blue-500/20", icon: CheckCircle },
};

export default function AdminRezerwacje() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    checkAdminAndFetch();
  }, []);

  const checkAdminAndFetch = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      setIsAdmin(false);
      setIsLoading(false);
      return;
    }

    // Check if user is admin
    const { data: roles } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .maybeSingle();

    if (!roles) {
      setIsAdmin(false);
      setIsLoading(false);
      return;
    }

    setIsAdmin(true);
    fetchBookings();
  };

  const fetchBookings = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('booking_date', { ascending: true })
      .order('booking_time', { ascending: true });

    if (error) {
      console.error("Error fetching bookings:", error);
      toast({
        title: "Błąd",
        description: "Nie udało się pobrać rezerwacji",
        variant: "destructive",
      });
    } else {
      setBookings(data || []);
    }
    setIsLoading(false);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    const { error } = await supabase
      .from('bookings')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      toast({
        title: "Błąd",
        description: "Nie udało się zaktualizować statusu",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Zaktualizowano",
        description: `Status zmieniony na: ${statusConfig[newStatus as keyof typeof statusConfig]?.label}`,
      });
      fetchBookings();
    }
    setUpdatingId(null);
  };

  if (isAdmin === false) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEOHead
        title="Zarządzanie Rezerwacjami | Panel Admina | Fotz Studio"
        description="Panel administracyjny do zarządzania rezerwacjami konsultacji i spotkań."
        canonical="https://fotz.pl/admin/rezerwacje"
        noIndex={true}
      />
      <Layout>
        <section className="pt-24 sm:pt-32 pb-12 section-padding bg-background min-h-screen">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
                <ArrowLeft className="w-4 h-4" />
                Powrót do strony
              </Link>
              <h1 className="text-3xl md:text-4xl font-heading font-bold">
                Zarządzanie <span className="text-gradient">rezerwacjami</span>
              </h1>
              <p className="text-muted-foreground mt-2">
                {bookings.length} rezerwacji w systemie
              </p>
            </div>
            <Button onClick={fetchBookings} variant="outline" disabled={isLoading}>
              <RefreshCw className={cn("w-4 h-4", isLoading && "animate-spin")} />
              Odśwież
            </Button>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : bookings.length === 0 ? (
            <div className="text-center py-20 bg-card rounded-2xl border border-border">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Brak rezerwacji</h3>
              <p className="text-muted-foreground">Nie ma jeszcze żadnych rezerwacji w systemie.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => {
                const status = statusConfig[booking.status as keyof typeof statusConfig] || statusConfig.pending;
                const StatusIcon = status.icon;
                
                return (
                  <div
                    key={booking.id}
                    className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Client Info */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{booking.client_name}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Mail className="w-3 h-3" />
                                {booking.client_email}
                              </span>
                              {booking.client_phone && (
                                <span className="flex items-center gap-1">
                                  <Phone className="w-3 h-3" />
                                  {booking.client_phone}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {booking.notes && (
                          <p className="text-sm text-muted-foreground bg-secondary rounded-lg p-3">
                            {booking.notes}
                          </p>
                        )}
                      </div>

                      {/* Date & Time */}
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="flex items-center gap-2 text-primary mb-1">
                            <Calendar className="w-4 h-4" />
                            <span className="font-semibold">
                              {format(new Date(booking.booking_date), "d MMM yyyy", { locale: pl })}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{booking.booking_time}</span>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <Badge className={cn("gap-1", status.color)}>
                          <StatusIcon className="w-3 h-3" />
                          {status.label}
                        </Badge>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        {booking.status !== 'confirmed' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateStatus(booking.id, 'confirmed')}
                            disabled={updatingId === booking.id}
                            className="text-green-500 hover:bg-green-500/10"
                          >
                            {updatingId === booking.id ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <CheckCircle className="w-4 h-4" />
                            )}
                            Potwierdź
                          </Button>
                        )}
                        {booking.status !== 'cancelled' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateStatus(booking.id, 'cancelled')}
                            disabled={updatingId === booking.id}
                            className="text-red-500 hover:bg-red-500/10"
                          >
                            {updatingId === booking.id ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <XCircle className="w-4 h-4" />
                            )}
                            Anuluj
                          </Button>
                        )}
                        {booking.status === 'confirmed' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateStatus(booking.id, 'completed')}
                            disabled={updatingId === booking.id}
                            className="text-blue-500 hover:bg-blue-500/10"
                          >
                            Zakończ
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
      </Layout>
    </>
  );
}
