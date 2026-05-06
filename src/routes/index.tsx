import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Brands } from "@/components/landing/Brands";
import { Condition } from "@/components/landing/Condition";
import { Solution } from "@/components/landing/Solution";
import { WhyUs } from "@/components/landing/WhyUs";
import { Cycle } from "@/components/landing/Cycle";
import { FAQ } from "@/components/landing/FAQ";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function MidCTA() {
  return (
    <section className="bg-background py-14">
      <div className="reveal mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <p className="font-serif text-xl sm:text-2xl">
          査定額がわかるのは、
          <br />
          たった<span className="text-gold">30秒</span>。
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          会員登録は1分。
          <br />
          手放すかどうかは、価格を見てから決められます。
        </p>
        <a
          href="#cta"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
        >
          無料で査定額を見る
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function FAQIntro() {
  return (
    <section className="bg-background pt-20 sm:pt-24">
      <div className="reveal mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
          For those still hesitating
        </p>
        <h2 className="mt-3 font-serif text-2xl sm:text-3xl leading-tight">
          迷っている方へ。
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          査定だけのご利用も完全無料。
          <br />
          価格を見てから、ゆっくり決めてください。
        </p>
      </div>
    </section>
  );
}

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
        <Solution />
        <MidCTA />
        <Condition />
        <Brands />
        <WhyUs />
        <Cycle />
        <FAQIntro />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
