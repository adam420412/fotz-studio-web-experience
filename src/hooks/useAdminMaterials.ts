import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface AcademyMaterial {
  id: string;
  title: string;
  description: string | null;
  type: string;
  file_url: string | null;
  video_url: string | null;
  thumbnail_url: string | null;
  is_published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface MaterialFormData {
  title: string;
  description: string;
  type: 'ebook' | 'video' | 'course' | 'template';
  file_url: string;
  video_url: string;
  thumbnail_url: string;
  is_published: boolean;
  sort_order: number;
}

export const useAdminMaterials = () => {
  const [materials, setMaterials] = useState<AcademyMaterial[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchMaterials = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('academy_materials')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setMaterials(data || []);
    } catch (error: any) {
      toast({
        title: 'Błąd',
        description: 'Nie udało się pobrać materiałów',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const createMaterial = async (formData: MaterialFormData) => {
    try {
      const { error } = await supabase.from('academy_materials').insert({
        title: formData.title,
        description: formData.description || null,
        type: formData.type,
        file_url: formData.file_url || null,
        video_url: formData.video_url || null,
        thumbnail_url: formData.thumbnail_url || null,
        is_published: formData.is_published,
        sort_order: formData.sort_order,
      });

      if (error) throw error;

      toast({
        title: 'Sukces',
        description: 'Materiał został dodany',
      });
      
      await fetchMaterials();
      return true;
    } catch (error: any) {
      toast({
        title: 'Błąd',
        description: error.message || 'Nie udało się dodać materiału',
        variant: 'destructive',
      });
      return false;
    }
  };

  const updateMaterial = async (id: string, formData: Partial<MaterialFormData>) => {
    try {
      const { error } = await supabase
        .from('academy_materials')
        .update({
          ...formData,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Sukces',
        description: 'Materiał został zaktualizowany',
      });
      
      await fetchMaterials();
      return true;
    } catch (error: any) {
      toast({
        title: 'Błąd',
        description: error.message || 'Nie udało się zaktualizować materiału',
        variant: 'destructive',
      });
      return false;
    }
  };

  const deleteMaterial = async (id: string) => {
    try {
      const { error } = await supabase
        .from('academy_materials')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Sukces',
        description: 'Materiał został usunięty',
      });
      
      await fetchMaterials();
      return true;
    } catch (error: any) {
      toast({
        title: 'Błąd',
        description: error.message || 'Nie udało się usunąć materiału',
        variant: 'destructive',
      });
      return false;
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  return {
    materials,
    loading,
    createMaterial,
    updateMaterial,
    deleteMaterial,
    refetch: fetchMaterials,
  };
};
