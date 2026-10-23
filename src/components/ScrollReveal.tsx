import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

// Adds a gentle fade-up to page blocks as they enter the viewport.
const SELECTOR =
  "main section > *, main section > div > *, section > div > *, header + * > *, footer > *";

export function ScrollReveal() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const status = useRouterState({ select: (s) => s.status });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter(
      (el) => !el.closest("[data-no-reveal]") && !el.classList.contains("reveal"),
    );
    const vh = window.innerHeight;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < vh) return; // already visible: no flash
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [path, status]);

  return null;
}
