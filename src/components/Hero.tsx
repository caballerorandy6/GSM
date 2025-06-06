"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSMStore } from "@/store/gsmactx-store";
import useSectionObserver from "@/hooks/useSectionObserver";
import Header from "./Header";

export default function Hero() {
  const { setScrolled } = useGSMStore();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [setScrolled]);

  const ref = useSectionObserver({ sectionName: "Home" });

  return (
    <section id="home" ref={ref} className="bg-gray-900">
      <Header />
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src="/home.avif"
          alt="GSM AC Background"
          priority
          quality={90}
          width={1920}
          height={1080}
          sizes="100vw"
          className="absolute inset-0 -z-10 w-full h-full object-cover"
        />

        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-200 ring-1 ring-white/20 hover:ring-white/40 transition-colors">
                Easy financing available{" "}
                <Link
                  href="https://apply.optimusfinancing.com/EG-51065"
                  target="_blank"
                  className="font-semibold text-white"
                >
                  <span className="absolute inset-0" />
                  Apply now! <span>&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                GSM A/C General & Contractor Inc
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                Special Spring A/C Check Up For $59.99″ Regular Check Up Is
                $99.99
                <br />
                Free media filter and power surge protection with complete
                system replacement!!!
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/#contact"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-colors"
                >
                  Get a free estimate
                </Link>
                <Link
                  href="/#about"
                  className="text-sm/6 font-semibold text-white"
                >
                  Learn more <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </section>
  );
}
