"use client";

import { useEffect } from "react";

declare global { interface Window { dataLayer?: unknown[] } }

export function track(event: string, params: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export default function Analytics() {
  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
    if (gaId) {
      const external = document.createElement("script"); external.async = true; external.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`; document.head.appendChild(external);
      window.dataLayer = window.dataLayer || []; window.dataLayer.push(["js", new Date()]); window.dataLayer.push(["config", gaId]);
    }
    if (gtmId) {
      const script = document.createElement("script"); script.async = true; script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`; document.head.appendChild(script);
    }
    const click = (event: MouseEvent) => {
      const element = (event.target as HTMLElement).closest<HTMLElement>("[data-event]");
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a");
      const inferred = link?.href.startsWith("tel:") ? "phone_click" : link?.href.includes("wa.me/") ? "whatsapp_click" : undefined;
      const eventName = element?.dataset.event || inferred;
      if (eventName) track(eventName, { link_url: (element || link)?.getAttribute("href") || undefined, item_name: element?.dataset.label || (element || link)?.textContent?.trim().slice(0, 80) });
    };
    let sent = false;
    const scroll = () => {
      if (!sent && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80) { sent = true; track("scroll_end"); }
    };
    document.addEventListener("click", click);
    window.addEventListener("scroll", scroll, { passive: true });
    const projects = document.querySelector("#work");
    const observer = projects ? new IntersectionObserver((entries) => { if (entries.some((entry) => entry.isIntersecting)) { track("projects_view"); observer.disconnect(); } }, { threshold: .35 }) : null;
    if (projects && observer) observer.observe(projects);
    return () => { document.removeEventListener("click", click); window.removeEventListener("scroll", scroll); observer?.disconnect(); };
  }, []);
  return null;
}
