import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useFileUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const uploadFile = async (file: File, folder: string = 'materials'): Promise<string | null> => {
    try {
      setUploading(true);
      setProgress(0);

      // Generate unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

      const { data, error } = await supabase.storage
        .from('academy-materials')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) throw error;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('academy-materials')
        .getPublicUrl(data.path);

      setProgress(100);
      
      toast({
        title: 'Sukces',
        description: 'Plik został przesłany',
      });

      return urlData.publicUrl;
    } catch (error: any) {
      console.error('Upload error:', error);
      toast({
        title: 'Błąd przesyłania',
        description: error.message || 'Nie udało się przesłać pliku',
        variant: 'destructive',
      });
      return null;
    } finally {
      setUploading(false);
    }
  };

  const deleteFile = async (fileUrl: string): Promise<boolean> => {
    try {
      // Extract path from URL
      const urlParts = fileUrl.split('/academy-materials/');
      if (urlParts.length < 2) return false;
      
      const filePath = urlParts[1];
      
      const { error } = await supabase.storage
        .from('academy-materials')
        .remove([filePath]);

      if (error) throw error;

      toast({
        title: 'Sukces',
        description: 'Plik został usunięty',
      });

      return true;
    } catch (error: any) {
      console.error('Delete error:', error);
      toast({
        title: 'Błąd usuwania',
        description: error.message || 'Nie udało się usunąć pliku',
        variant: 'destructive',
      });
      return false;
    }
  };

  return {
    uploadFile,
    deleteFile,
    uploading,
    progress,
  };
};
