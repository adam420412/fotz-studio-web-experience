import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface PageSpeedResult {
  score: number;
  metrics: {
    fcp: number;
    lcp: number;
    tbt: number;
    cls: number;
    si: number;
    tti: number;
  };
  audits: {
    name: string;
    score: number;
    displayValue?: string;
    description: string;
  }[];
  timestamp: string;
  url: string;
  strategy: 'mobile' | 'desktop';
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url, strategy = 'mobile' } = await req.json();

    if (!url) {
      return new Response(
        JSON.stringify({ error: 'URL is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Google PageSpeed Insights API
    const apiUrl = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
    apiUrl.searchParams.set('url', url);
    apiUrl.searchParams.set('strategy', strategy);
    apiUrl.searchParams.set('category', 'performance');
    
    // Use API key if available for higher quota
    const apiKey = Deno.env.get('PAGESPEED_API_KEY');
    if (apiKey) {
      apiUrl.searchParams.set('key', apiKey);
      console.log('Using PageSpeed API key for higher quota');
    }

    console.log(`Testing URL: ${url} with strategy: ${strategy}`);

    const response = await fetch(apiUrl.toString());
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('PageSpeed API error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch PageSpeed data', details: errorText }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const lighthouse = data.lighthouseResult;

    if (!lighthouse) {
      return new Response(
        JSON.stringify({ error: 'No Lighthouse results returned' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Extract core metrics
    const audits = lighthouse.audits;
    const categories = lighthouse.categories;

    const result: PageSpeedResult = {
      score: Math.round((categories?.performance?.score || 0) * 100),
      metrics: {
        fcp: Math.round(audits['first-contentful-paint']?.numericValue || 0),
        lcp: Math.round(audits['largest-contentful-paint']?.numericValue || 0),
        tbt: Math.round(audits['total-blocking-time']?.numericValue || 0),
        cls: parseFloat((audits['cumulative-layout-shift']?.numericValue || 0).toFixed(3)),
        si: Math.round(audits['speed-index']?.numericValue || 0),
        tti: Math.round(audits['interactive']?.numericValue || 0),
      },
      audits: [
        {
          name: 'First Contentful Paint',
          score: audits['first-contentful-paint']?.score || 0,
          displayValue: audits['first-contentful-paint']?.displayValue,
          description: 'Czas do pierwszego renderowania treści'
        },
        {
          name: 'Largest Contentful Paint',
          score: audits['largest-contentful-paint']?.score || 0,
          displayValue: audits['largest-contentful-paint']?.displayValue,
          description: 'Czas do renderowania największego elementu'
        },
        {
          name: 'Total Blocking Time',
          score: audits['total-blocking-time']?.score || 0,
          displayValue: audits['total-blocking-time']?.displayValue,
          description: 'Całkowity czas blokowania'
        },
        {
          name: 'Cumulative Layout Shift',
          score: audits['cumulative-layout-shift']?.score || 0,
          displayValue: audits['cumulative-layout-shift']?.displayValue,
          description: 'Skumulowane przesunięcie układu'
        },
        {
          name: 'Speed Index',
          score: audits['speed-index']?.score || 0,
          displayValue: audits['speed-index']?.displayValue,
          description: 'Indeks szybkości ładowania'
        },
        {
          name: 'Time to Interactive',
          score: audits['interactive']?.score || 0,
          displayValue: audits['interactive']?.displayValue,
          description: 'Czas do interaktywności'
        },
      ],
      timestamp: new Date().toISOString(),
      url,
      strategy: strategy as 'mobile' | 'desktop',
    };

    console.log(`PageSpeed test completed for ${url}: Score ${result.score}`);

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in pagespeed-test function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
