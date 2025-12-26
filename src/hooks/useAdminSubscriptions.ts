import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface Subscription {
  id: string;
  user_id: string;
  status: string;
  price_pln: number;
  starts_at: string;
  expires_at: string | null;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  created_at: string;
  updated_at: string;
  profile?: {
    email: string | null;
    full_name: string | null;
  };
}

export const useAdminSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchSubscriptions = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubscriptions(data || []);
    } catch (error: any) {
      toast({
        title: 'Błąd',
        description: 'Nie udało się pobrać subskrypcji',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const updateSubscriptionStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('subscriptions')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Sukces',
        description: 'Status subskrypcji został zmieniony',
      });
      
      await fetchSubscriptions();
      return true;
    } catch (error: any) {
      toast({
        title: 'Błąd',
        description: error.message || 'Nie udało się zmienić statusu',
        variant: 'destructive',
      });
      return false;
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  return {
    subscriptions,
    loading,
    updateSubscriptionStatus,
    refetch: fetchSubscriptions,
  };
};
