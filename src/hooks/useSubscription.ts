import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

interface Subscription {
  id: string;
  status: string;
  price_pln: number;
  starts_at: string;
  expires_at: string | null;
}

export function useSubscription() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasActiveSubscription, setHasActiveSubscription] = useState(false);

  useEffect(() => {
    if (!user) {
      setSubscription(null);
      setHasActiveSubscription(false);
      setLoading(false);
      return;
    }

    const fetchSubscription = async () => {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error('Error fetching subscription:', error);
      }

      if (data) {
        setSubscription(data);
        const isActive = data.status === 'active' && 
          (!data.expires_at || new Date(data.expires_at) > new Date());
        setHasActiveSubscription(isActive);
      } else {
        setSubscription(null);
        setHasActiveSubscription(false);
      }
      
      setLoading(false);
    };

    fetchSubscription();
  }, [user]);

  return {
    subscription,
    hasActiveSubscription,
    loading,
  };
}
