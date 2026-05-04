import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Brands } from "@/components/landing/Brands";
import { Condition } from "@/components/landing/Condition";
import { Solution } from "@/components/landing/Solution";
import { WhyUs } from "@/components/landing/WhyUs";
import { Cycle } from "@/components/landing/Cycle";
import { Trust } from "@/components/landing/Trust";
import { FAQ } from "@/components/landing/FAQ";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    const observe = () =>
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible), .reveal-left:not(.is-visible)")
        .forEach((el) => observer.observe(el));
    observe();
    // re-observe on resize for layout-shifted nodes
    const t = setTimeout(observe, 300);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Brands />
        <Condition />
        <Solution />
        <WhyUs />
        <Cycle />
        <Trust />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
