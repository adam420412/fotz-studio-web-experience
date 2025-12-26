-- Create storage bucket for academy materials
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'academy-materials', 
  'academy-materials', 
  true,
  52428800, -- 50MB limit
  ARRAY['application/pdf', 'application/zip', 'image/jpeg', 'image/png', 'image/webp', 'video/mp4']
);

-- Policy: Anyone can view/download files (public bucket)
CREATE POLICY "Public read access for academy materials"
ON storage.objects
FOR SELECT
USING (bucket_id = 'academy-materials');

-- Policy: Only admins can upload files
CREATE POLICY "Admins can upload academy materials"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'academy-materials' 
  AND public.has_role(auth.uid(), 'admin'::public.app_role)
);

-- Policy: Only admins can update files
CREATE POLICY "Admins can update academy materials"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'academy-materials' 
  AND public.has_role(auth.uid(), 'admin'::public.app_role)
);

-- Policy: Only admins can delete files
CREATE POLICY "Admins can delete academy materials"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'academy-materials' 
  AND public.has_role(auth.uid(), 'admin'::public.app_role)
);