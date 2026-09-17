import { useEffect, useRef } from "react";
import { hasMarketingConsent, MARKETING_CONSENT_EVENT } from "@/lib/consent";
import { trackGrowthEvent } from "@/lib/growthTracking";

export function useFormTracking(formId: string) {
  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const form = ref.current;
    if (!form) return;
    let viewed = false;
    let started = false;
    let visible = false;
    const view = () => {
      if (viewed || !hasMarketingConsent()) return;
      viewed = true;
      trackGrowthEvent("form_view", { form_name: formId });
    };
    // Observe the first field, not a percentage of a potentially very tall form.
    const target = form.querySelector("input:not([type=hidden]),select,textarea") || form;
    const observer = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting);
      if (visible) view();
    }, { threshold: 0.01 });
    observer.observe(target);
    const input = (event: Event) => {
      const field = event.target as HTMLInputElement;
      if (!hasMarketingConsent() || started || !field.value?.trim() || field.type === "hidden") return;
      view();
      started = true;
      trackGrowthEvent("form_start", { form_name: formId });
    };
    const consentChanged = () => { if (visible) view(); };
    window.addEventListener(MARKETING_CONSENT_EVENT, consentChanged);
    form.addEventListener("input", input);
    form.addEventListener("change", input);
    return () => {
      observer.disconnect();
      window.removeEventListener(MARKETING_CONSENT_EVENT, consentChanged);
      form.removeEventListener("input", input);
      form.removeEventListener("change", input);
    };
  }, [formId]);
  return ref;
}
