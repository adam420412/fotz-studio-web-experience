-- Add RLS policies for admins to manage subscriptions
CREATE POLICY "Admins can manage subscriptions"
ON public.subscriptions
FOR ALL
TO authenticated
USING (has_role(auth.uid(), 'admin'))
WITH CHECK (has_role(auth.uid(), 'admin'));