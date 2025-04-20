"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Home() {
  useScrollSpy(["home", "about", "services", "testimonials", "contact"]);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}
