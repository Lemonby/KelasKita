"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import { datasets } from "@/data/dummy";
import DatasetCard from "@/components/ui/DatasetCard";

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Cards per view: 4 on desktop
  const cardsPerPage = 4;
  const maxIndex = Math.max(0, datasets.length - cardsPerPage);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleDatasets = datasets.slice(
    carouselIndex,
    carouselIndex + cardsPerPage
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#202D41] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-16 lg:flex-row lg:py-24 lg:px-8">
          {/* Left Text & Call-To-Action */}
          <div className="flex-1 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#C8EE44]">
              Sistem Pendukung Keputusan Pendidikan
            </span>

            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[40px]">
              Data pendidikan terstruktur,
              <br className="hidden sm:inline" /> keputusan lebih terukur.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
              KelasKita menyederhanakan kompleksitas data fasilitas sekolah dan
              distribusi tenaga pendidik. Sistem mengolah metrik wilayah,
              memetakan tingkat urgensi secara objektif, dan menyajikan
              rekomendasi tindakan yang transparan. Anda dapat menelusuri setiap
              variabel perhitungannya sebelum merumuskan kebijakan yang tepat
              sasaran.
            </p>

            {/* Interactive Action Bar */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
              {/* Mulai Eksplorasi Data Pill */}
              <Link
                href="/eksplorasi-daerah"
                className="group inline-flex items-center justify-between gap-4 rounded-xl bg-white py-2 pl-6 pr-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
              >
                <span>Mulai Eksplorasi Data</span>
                <span className="flex h-9 w-10 items-center justify-center rounded-lg bg-[#202D41] text-white transition group-hover:bg-[#2c3d58]">
                  <ChevronsRight size={18} />
                </span>
              </Link>

              {/* Lihat Peta Kesenjangan Button */}
              <Link
                href="/prioritas-daerah"
                className="inline-flex items-center justify-center rounded-xl bg-[#6E67FB] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#5b54eb] hover:shadow-md"
              >
                Lihat Peta Kesenjangan
              </Link>
            </div>
          </div>

          {/* Right Hero Illustration */}
          <div className="flex flex-1 justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              <Image
                src="/hero-landing.png"
                alt="Ilustrasi KelasKita DDDM"
                width={700}
                height={400}
                className="w-full object-contain drop-shadow-md"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Kumpulan Data Populer */}
      <section className="bg-[#F8FAFC] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Kumpulan Data Populer
            </h2>

            {/* Navigation Dots for Mobile */}
            <div className="flex items-center gap-1.5 sm:hidden">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-2 rounded-full transition-all ${i === carouselIndex
                    ? "w-6 bg-[#6E67FB]"
                    : "w-2 bg-slate-300"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Left Nav Button */}
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Dataset sebelumnya"
              className="absolute -left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:bg-slate-50 hover:text-slate-900 hover:scale-105 active:scale-95 disabled:opacity-40"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={handleNext}
              type="button"
              aria-label="Dataset selanjutnya"
              className="absolute -right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:bg-slate-50 hover:text-slate-900 hover:scale-105 active:scale-95 disabled:opacity-40"
            >
              <ChevronRight size={22} />
            </button>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {visibleDatasets.map((dataset) => (
                <DatasetCard key={dataset.id} dataset={dataset} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
