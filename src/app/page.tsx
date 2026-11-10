"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  BarChart3,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  ClipboardCheck,
  Database,
  ArrowRight,
  Layers,
} from "lucide-react";
import { datasets } from "@/data/dummy";
import DatasetCard from "@/components/ui/DatasetCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Cards per view: 4 on desktop
  const cardsPerPage = 4;
  const maxIndex = Math.max(0, datasets.length - cardsPerPage);
  const paginationSteps = Math.min(maxIndex + 1, 5);
  const activePaginationStep =
    maxIndex === 0
      ? 0
      : Math.round((carouselIndex / maxIndex) * (paginationSteps - 1));

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleDatasets = datasets.slice(
    carouselIndex,
    carouselIndex + cardsPerPage,
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ScrollReveal>
        <section className="relative overflow-hidden bg-secondary text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-16 lg:flex-row lg:py-24 lg:px-8">
            {/* Left Text & Call-To-Action */}
            <div className="flex-1 space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Sistem Pendukung Keputusan Pendidikan
              </span>

              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[40px]">
                Data pendidikan terstruktur,
                <br className="hidden sm:inline" /> keputusan lebih terukur.
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                KelasKita menyederhanakan kompleksitas data fasilitas sekolah
                dan distribusi tenaga pendidik. Sistem mengolah metrik wilayah,
                memetakan tingkat urgensi secara objektif, dan menyajikan
                rekomendasi tindakan yang transparan. Anda dapat menelusuri
                setiap variabel perhitungannya sebelum merumuskan kebijakan yang
                tepat sasaran.
              </p>

              {/* Interactive Action Bar */}
              <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
                {/* Mulai Eksplorasi Data Pill */}
                <Link
                  href="/eksplorasi-daerah"
                  className="group inline-flex items-center justify-between gap-4 rounded-xl bg-white py-2 pl-6 pr-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
                >
                  <span>Mulai Eksplorasi Data</span>
                  <span className="flex h-9 w-10 items-center justify-center rounded-lg bg-secondary text-white transition group-hover:bg-[#2c3d58]">
                    <ChevronsRight size={18} />
                  </span>
                </Link>

                {/* Lihat Peta Kesenjangan Button */}
                <Link
                  href="/prioritas-daerah"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-hover hover:shadow-md"
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
      </ScrollReveal>

      {/* Section: Tentang KelasKita */}
      <ScrollReveal>
        <section className="bg-background py-8 sm:py-12 lg:py-12">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8">
            <div className="flex flex-col items-start rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs sm:p-8 lg:p-10">
              <span className="inline-flex items-center rounded-full bg-[#e9e7ff] px-3 py-1 text-xs font-bold text-primary">
                Data-Driven Decision Making
              </span>
              <h2 className="mt-4 max-w-xl text-2xl font-bold leading-tight tracking-tight text-secondary sm:text-3xl">
                Empat indikator utama
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                KelasKita menggunakan indikator berikut untuk membandingkan
                kondisi pendidikan antardaerah.
              </p>

              <div
                className="mt-6 flex flex-wrap gap-2"
                role="group"
                aria-label="Indikator utama"
              >
                {[
                  "Angka putus sekolah",
                  "Rasio murid-guru",
                  "Rasio murid-rombel",
                  "Kelas rusak",
                ].map((indicator) => (
                  <span
                    key={indicator}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {indicator}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/eksplorasi-daerah"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-hover"
                >
                  Jelajahi indikator
                  <ChevronsRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/dataset"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-secondary transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Lihat dataset
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="mb-1 text-xl font-bold tracking-tight text-secondary sm:text-2xl">
                Dari data ke bahan pertimbangan
              </h3>
              <article className="flex gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-xs sm:p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e9e7ff] text-primary">
                  <Database className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-secondary sm:text-base">
                    Data pendidikan publik
                  </h4>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    Dataset menjadi dasar untuk membaca kondisi dan kesenjangan
                    pendidikan antardaerah.
                  </p>
                </div>
              </article>
              <article className="flex gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-xs sm:p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e9e7ff] text-primary">
                  <BarChart3 className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-secondary sm:text-base">
                    Analisis dan prioritas wilayah
                  </h4>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    Indikator, visualisasi, dan cluster membantu pengguna
                    melihat pola serta urgensi relatif tiap wilayah.
                  </p>
                </div>
              </article>
              <article className="flex gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-xs sm:p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e9e7ff] text-primary">
                  <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-secondary sm:text-base">
                    Saran tindak lanjut
                  </h4>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    Rekomendasi membantu merumuskan langkah yang relevan dengan
                    kondisi yang ditemukan.
                  </p>
                </div>
              </article>

              <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-900 sm:text-sm">
                Hasil KelasKita adalah bahan pertimbangan, bukan keputusan
                otomatis. Cakupan data dan kondisi lapangan tetap perlu
                diperiksa.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section: Cara Kerja Cluster */}
      <ScrollReveal>
        <section className="border-y border-slate-200/80 bg-slate-50 py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              {/* <span className="inline-flex items-center gap-2 rounded-full bg-[#e9e7ff] px-3 py-1.5 text-xs font-bold text-primary">
                <Layers className="h-4 w-4" aria-hidden="true" />
                Transparansi klasifikasi
              </span> */}
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
                Bagaimana cluster wilayah ditentukan?
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Pengelompokan dilakukan secara rule-based dengan membandingkan
                tiga indikator terhadap ambang batas yang sama untuk setiap
                provinsi.
              </p>
            </div>

            <div className="stagger mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {[
                { label: "Kelas rusak total", threshold: "≥ 20%" },
                { label: "Rasio murid-guru", threshold: "≥ 25" },
                { label: "Rasio murid-rombel", threshold: "≥ 25" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-xs sm:flex-col sm:items-start sm:px-5"
                >
                  <span className="text-sm font-medium text-slate-600">
                    {item.label}
                  </span>
                  <span className="shrink-0 rounded-sm bg-secondary px-3 py-1.5 text-sm font-bold text-accent">
                    {item.threshold}
                  </span>
                </div>
              ))}
            </div>

            <div className="stagger mt-5 grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-red-100 bg-white p-5 shadow-xs sm:p-6">
                <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">
                  Cluster 1
                </span>
                <h3 className="mt-3 text-lg font-bold text-secondary">
                  Kritis
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Minimal dua indikator melewati ambang batas. Wilayah ini
                  memerlukan beberapa jenis intervensi.
                </p>
              </article>

              <article className="rounded-2xl border border-amber-100 bg-white p-5 shadow-xs sm:p-6">
                <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                  Cluster 2
                </span>
                <h3 className="mt-3 text-lg font-bold text-secondary">
                  Perlu Perhatian
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Satu indikator melewati ambang batas. Penanganan difokuskan
                  pada indikator yang bermasalah tersebut.
                </p>
              </article>

              <article className="rounded-2xl border border-lime-100 bg-white p-5 shadow-xs sm:p-6">
                <span className="inline-flex rounded-full bg-lime-100 px-3 py-1 text-xs font-bold text-lime-700">
                  Cluster 3
                </span>
                <h3 className="mt-3 text-lg font-bold text-secondary">
                  Relatif Baik
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tidak ada indikator yang melewati ambang batas. Kondisi tetap
                  perlu dipantau dan dipelihara.
                </p>
              </article>
            </div>

            <p className="mt-5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm leading-6 text-slate-600">
              Cluster ditentukan berdasarkan jumlah indikator yang melewati
              ambang batas, bukan berdasarkan nama atau lokasi provinsi.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Section: Kumpulan Data Populer */}
      <ScrollReveal>
        <section className="bg-background py-16 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Kumpulan Data Populer
              </h2>
            </div>

            {/* Carousel Container */}
            <div>
              {/* Cards Grid */}
              <div className="stagger grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {visibleDatasets.map((dataset) => (
                  <DatasetCard key={dataset.id} dataset={dataset} />
                ))}
              </div>

              <div className="mt-8 flex flex-col items-center gap-5 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
                <Link
                  href="/dataset"
                  className="order-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:text-primary-hover sm:order-1"
                >
                  Lihat semua dataset
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <div className="order-1 flex items-center gap-4 sm:order-2">
                  <button
                    onClick={handlePrev}
                    type="button"
                    aria-label="Dataset sebelumnya"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900 active:scale-95"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div
                    role="group"
                    aria-label={`Posisi ${activePaginationStep + 1} dari ${paginationSteps}`}
                    className="flex items-center gap-1.5"
                  >
                    {Array.from({ length: paginationSteps }).map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={`Tampilkan kelompok dataset ${index + 1}`}
                        aria-current={
                          index === activePaginationStep ? "step" : undefined
                        }
                        onClick={() => {
                          const targetIndex =
                            paginationSteps <= 1
                              ? 0
                              : Math.round(
                                  (index / (paginationSteps - 1)) * maxIndex,
                                );
                          setCarouselIndex(targetIndex);
                        }}
                        className={`h-2 rounded-full transition-all ${
                          index === activePaginationStep
                            ? "w-6 bg-primary"
                            : "w-2 bg-slate-300 hover:bg-slate-400"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    type="button"
                    aria-label="Dataset selanjutnya"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900 active:scale-95"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
