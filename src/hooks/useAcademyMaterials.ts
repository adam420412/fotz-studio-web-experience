import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AcademyMaterial {
  id: string;
  title: string;
  description: string | null;
  type: string;
  thumbnail_url: string | null;
  file_url: string | null;
  video_url: string | null;
  sort_order: number;
  created_at: string;
}

export function useAcademyMaterials() {
  const [materials, setMaterials] = useState<AcademyMaterial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaterials = async () => {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('academy_materials')
        .select('*')
        .eq('is_published', true)
        .order('sort_order', { ascending: true });

      if (error) {
        console.error('Error fetching materials:', error);
      }

      setMaterials(data || []);
      setLoading(false);
    };

    fetchMaterials();
  }, []);

  const ebooks = materials.filter(m => m.type === 'ebook');
  const videos = materials.filter(m => m.type === 'video');
  const courses = materials.filter(m => m.type === 'course');

  return {
    materials,
    ebooks,
    videos,
    courses,
    loading,
  };
}
