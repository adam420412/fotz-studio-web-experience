import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { BlogArticle } from "./useBlogArticles";

export function useClusterArticles(clusterSlug: string) {
  return useQuery({
    queryKey: ["cluster-articles", clusterSlug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_articles")
        .select("*")
        .eq("is_published", true)
        .eq("cluster_slug", clusterSlug)
        .order("published_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as BlogArticle[];
    },
    staleTime: 1000 * 60 * 5,
  });
}