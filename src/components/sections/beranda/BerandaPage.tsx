"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Layers } from "lucide-react";
import { statsOverview } from "@/data/dummy";
import { berandaMapData } from "@/data/berandaMapData";
import IndonesiaInteractiveMap from "./IndonesiaInteractiveMap";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BerandaPage() {
  const topPriorityRegions = [...berandaMapData]
    .sort(
      (first, second) =>
        Number(first.cluster.replace("Cluster ", "")) -
          Number(second.cluster.replace("Cluster ", "")) ||
        getExceededIndicators(second).length -
          getExceededIndicators(first).length,
    )
    .slice(0, 5);

  function getExceededIndicators(region: (typeof berandaMapData)[number]) {
    const indicators = [];

    if (region.data["Kelas Rusak Total(%)"] >= 20) {
      indicators.push("Kelas rusak");
    }
    if (region.data["Rasio Murid Guru"] >= 25) {
      indicators.push("Rasio murid-guru");
    }
    if (region.data["Rasio Murid Rombel"] >= 25) {
      indicators.push("Kepadatan rombel");
    }

    return indicators;
  }

  return (
    <div className="min-h-screen bg-background/50 pb-20">
      {/* Container Utama */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 pt-6 sm:pt-8">
        {/* ==================== 1. HERO BANNER ==================== */}
        <ScrollReveal>
          <section className="relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs">
            <div className="relative min-h-[132px] w-full sm:min-h-0">
              {/* Background Image Hero yang menentukan tinggi banner secara natural */}
              <Image
                src="/hero-beranda.png"
                alt="Selamat datang di KelasKita"
                width={1864}
                height={262}
                priority
                className="absolute inset-0 h-full w-full select-none object-cover object-center sm:relative sm:inset-auto sm:h-auto sm:object-contain"
              />

              {/* Gradient overlay lembut di layar kecil untuk keterbacaan teks */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:from-white/80 sm:via-white/30 sm:to-transparent lg:bg-transparent" />

              {/* Teks Sambutan Hero */}
              <div className="absolute inset-0 flex max-w-2xl flex-col justify-center px-5 sm:px-10 lg:px-14">
                <h1 className="text-lg font-extrabold leading-tight tracking-tight text-slate-900 sm:text-2xl md:text-3xl lg:text-[35px]">
                  Selamat datang di{" "}
                  <span className="text-[#96C816] drop-shadow-xs">
                    KelasKita
                  </span>
                </h1>
                <p className="mt-1 max-w-lg text-xs leading-relaxed text-slate-600 sm:mt-2 sm:text-sm md:text-base">
                  Simplifikasi data pendidikan untuk keputusan yang lebih baik.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ==================== 2. STATS CARDS ==================== */}
        <ScrollReveal>
          <section className="stagger grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {statsOverview.map((item, index) => {
              if (item.highlight) {
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-secondary p-4 text-white shadow-xs flex flex-col justify-between transition-transform hover:-translate-y-0.5 duration-200 sm:p-6"
                  >
                    <p className="text-sm font-medium text-slate-200">
                      {item.label}
                    </p>
                    <div className="mt-5">
                      <span className="text-3xl font-extrabold text-accent tracking-tight sm:text-4xl">
                        {item.value}
                      </span>
                      <p className="mt-1 text-xs text-slate-300">{item.unit}</p>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-4 border border-slate-200/90 shadow-xs flex flex-col justify-between transition-transform hover:-translate-y-0.5 duration-200 sm:p-6"
                >
                  <p className="text-sm font-medium text-slate-700">
                    {item.label}
                  </p>
                  <div className="mt-5">
                    <span className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                      {item.value}
                    </span>
                    <p className="mt-1 text-xs text-slate-500">{item.unit}</p>
                  </div>
                </div>
              );
            })}
          </section>
        </ScrollReveal>

        {/* ==================== 3. PETA & TOP 5 PRIORITAS ==================== */}
        <ScrollReveal>
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Kolom Kiri: Peta Interaktif (Lebar 7 atau 8 kolom) */}
            <div className="lg:col-span-8 rounded-2xl bg-white p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col">
              <IndonesiaInteractiveMap />
            </div>

            {/* Kolom Kanan: Ringkasan prioritas berbasis cluster */}
            <div className="lg:col-span-4 rounded-2xl bg-white p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="section-heading">Prioritas utama</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      Diurutkan berdasarkan tingkat urgensi cluster dan jumlah
                      indikator yang melewati ambang.
                    </p>
                  </div>
                  <Layers className="mt-1 h-5 w-5 shrink-0 text-primary" />
                </div>

                <div className="space-y-3">
                  {topPriorityRegions.map((region, index) => {
                    const exceededIndicators = getExceededIndicators(region);

                    return (
                      <div
                        key={region.id}
                        className="rounded-xl border border-slate-100 bg-slate-50/60 p-3 transition-colors hover:border-slate-200 hover:bg-slate-50"
                      >
                        <div className="flex items-start gap-3">
                          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-accent text-xs font-bold text-secondary">
                            {index + 1}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <p className="truncate text-sm font-bold text-slate-800">
                                {region.name}
                              </p>
                            </div>
                            <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[10px] font-semibold">
                              <span
                                className={`rounded-full px-2 py-0.5 ${
                                  region.cluster === "Cluster 1"
                                    ? "bg-secondary text-accent"
                                    : region.cluster === "Cluster 2"
                                      ? "bg-slate-200 text-slate-700"
                                      : "bg-slate-100 text-slate-500"
                                }`}
                              >
                                {region.cluster}
                              </span>
                              <span className="text-slate-500">
                                {exceededIndicators.length > 0
                                  ? `${exceededIndicators.length} indikator melewati ambang`
                                  : "Tidak ada indikator melewati ambang"}
                              </span>
                            </div>
                            <div className="mt-2 flex items-start gap-1.5 text-[11px] text-slate-600">
                              <AlertTriangle className="h-3 w-3 text-amber-500" />
                              <span>
                                {exceededIndicators.length > 0
                                  ? exceededIndicators.join(" • ")
                                  : "Pemantauan dan pemeliharaan berkala"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-end">
                <Link
                  href="/prioritas-daerah"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group"
                >
                  <span>Lihat semua</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
