import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface BlogArticle {
  id: string;
  external_id: number;
  title: string;
  slug: string;
  meta_description: string | null;
  content_html: string | null;
  content_markdown: string | null;
  hero_image_url: string | null;
  language_code: string | null;
  public_url: string | null;
  external_created_at: string | null;
  created_at: string;
  published_at: string | null;
  is_published: boolean;
}

export function useBlogArticles() {
  return useQuery({
    queryKey: ["blog-articles"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_articles")
        .select("*")
        .eq("is_published", true)
        .order("published_at", { ascending: false });

      if (error) {
        console.error("Error fetching blog articles:", error);
        throw error;
      }

      return data as BlogArticle[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useBlogArticle(slug: string) {
  return useQuery({
    queryKey: ["blog-article", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_articles")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();

      if (error) {
        if (error.code === "PGRST116") {
          return null; // Not found
        }
        console.error("Error fetching blog article:", error);
        throw error;
      }

      return data as BlogArticle;
    },
    staleTime: 1000 * 60 * 5,
  });
}
