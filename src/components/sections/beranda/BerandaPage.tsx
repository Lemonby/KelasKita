"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { statsOverview, top5Prioritas } from "@/data/dummy";
import IndonesiaInteractiveMap from "./IndonesiaInteractiveMap";

export default function BerandaPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]/50 pb-20">
      {/* Container Utama */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 pt-6 sm:pt-8">

        {/* ==================== 1. HERO BANNER ==================== */}
        <section className="relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs">
          <div className="relative w-full">
            {/* Background Image Hero yang menentukan tinggi banner secara natural */}
            <Image
              src="/hero-beranda.png"
              alt="Selamat datang di KelasKita"
              width={1864}
              height={262}
              priority
              className="w-full h-auto block select-none"
            />

            {/* Gradient overlay lembut di layar kecil untuk keterbacaan teks */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:from-white/80 sm:via-white/30 sm:to-transparent lg:bg-transparent" />

            {/* Teks Sambutan Hero */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-14 max-w-2xl">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-[35px] font-extrabold tracking-tight text-slate-900 leading-tight">
                Selamat datang di{" "}
                <span className="text-[#96C816] drop-shadow-xs">KelasKita</span>
              </h1>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-slate-600 max-w-lg leading-relaxed">
                Simplifikasi data pendidikan untuk keputusan yang lebih baik.
              </p>
            </div>
          </div>
        </section>

        {/* ==================== 2. STATS CARDS ==================== */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsOverview.map((item, index) => {
            if (item.highlight) {
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#202D41] p-6 text-white shadow-xs flex flex-col justify-between transition-transform hover:-translate-y-0.5 duration-200"
                >
                  <p className="text-sm font-medium text-slate-200">
                    {item.label}
                  </p>
                  <div className="mt-5">
                    <span className="text-4xl font-extrabold text-[#C8EE44] tracking-tight">
                      {item.value}
                    </span>
                    <p className="mt-1 text-xs text-slate-300">
                      {item.unit}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between transition-transform hover:-translate-y-0.5 duration-200"
              >
                <p className="text-sm font-medium text-slate-700">
                  {item.label}
                </p>
                <div className="mt-5">
                  <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                    {item.value}
                  </span>
                  <p className="mt-1 text-xs text-slate-500">
                    {item.unit}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* ==================== 3. PETA & TOP 5 PRIORITAS ==================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Kolom Kiri: Peta Interaktif (Lebar 7 atau 8 kolom) */}
          <div className="lg:col-span-8 rounded-2xl bg-white p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col">
            <IndonesiaInteractiveMap />
          </div>

          {/* Kolom Kanan: Top 5 Wilayah Prioritas (Lebar 4 atau 5 kolom) */}
          <div className="lg:col-span-4 rounded-2xl bg-white p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-5 tracking-tight">
                Top 5 Wilayah Prioritas
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs font-semibold text-slate-700">
                      <th className="pb-3 w-12 font-medium">No</th>
                      <th className="pb-3 font-medium">Wilayah</th>
                      <th className="pb-3 text-right font-medium">Jenis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {top5Prioritas.map((row) => (
                      <tr
                        key={row.no}
                        className="group hover:bg-slate-50/80 transition-colors"
                      >
                        <td className="py-3.5">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#C8EE44] text-[#202D41] font-bold text-xs shadow-2xs">
                            {row.no}
                          </span>
                        </td>
                        <td className="py-3.5 font-medium text-slate-800 group-hover:text-slate-950 transition-colors">
                          {row.wilayah}
                        </td>
                        <td className="py-3.5 text-right font-bold text-slate-900">
                          {row.jenis}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Link 'Lihat semua' ke Prioritas Daerah */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-end">
              <Link
                href="/prioritas-daerah"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6E67FB] hover:text-[#5851db] transition-colors group"
              >
                <span>Lihat semua</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}
