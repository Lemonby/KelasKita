"use client";

import React, { useState, useMemo, useRef } from "react";
import { ChevronDown, Search, X, HelpCircle, ArrowRight } from "lucide-react";
import { faqData } from "@/data/dummy";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FaqPage() {
  const [openIds, setOpenIds] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle buka/tutup pertanyaan
  const toggleItem = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  // Filter FAQ berdasarkan kata kunci pencarian
  const filteredFaq = useMemo(() => {
    if (!searchQuery.trim()) return faqData;
    const query = searchQuery.toLowerCase().trim();
    return faqData.filter(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  return (
    <div className="relative z-10 min-h-screen bg-background/60 pb-24 pt-6 sm:pt-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* ==================== 1. HERO HEADER BANNER ==================== */}
        <ScrollReveal>
          <section className="page-hero section-hero relative overflow-hidden rounded-2xl bg-secondary text-white">
            <div className="section-hero-content space-y-3.5">
              <h1 className="section-hero-title text-white">
                Pertanyaan yang{" "}
                <span className="text-accent">Biasa Ditanyakan</span>
              </h1>
              <p className="section-hero-description !mt-0 max-w-2xl">
                Pada halaman ini anda dapat menemukan Jawaban atas Pertanyaan
                pada Portal Satu Data Kementerian Komunikasi dan Digital
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* ==================== 2. SEARCH BAR ==================== */}
        <ScrollReveal>
        <section className="relative mx-auto max-w-3xl">
          <div
            onClick={() => {
              const el = document.getElementById(
                "faq-search-input",
              ) as HTMLInputElement;
              el?.focus();
            }}
            className="relative cursor-text rounded-full shadow-xs"
          >
            {/* Search Icon with pointer-events-none */}
            <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 flex items-center justify-center">
              <Search className="h-5 w-5 text-slate-400" />
            </div>

            <input
              ref={inputRef}
              id="faq-search-input"
              name="faq-search"
              type="text"
              placeholder="Cari pertanyaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onInput={(e) =>
                setSearchQuery((e.target as HTMLInputElement).value)
              }
              className="w-full cursor-text rounded-full border border-slate-200 bg-white py-3.5 pl-14 pr-12 text-sm text-slate-800 placeholder:text-slate-400 transition-all focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10"
            />

            {/* Clear Button */}
            {searchQuery && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchQuery("");
                  inputRef.current?.focus();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
                aria-label="Hapus pencarian"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </section>
        </ScrollReveal>

        {/* ==================== 3. FAQ ACCORDION LIST ==================== */}
        <section className="space-y-4">
          {/* Status info bar */}
          <div className="flex items-center justify-between px-1">
            <p className="text-xs sm:text-sm font-medium text-slate-500">
              Menampilkan {filteredFaq.length} pertanyaan
            </p>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="cursor-pointer text-xs font-semibold text-primary hover:underline"
              >
                Reset pencarian
              </button>
            )}
          </div>

          {/* Accordion list */}
          {filteredFaq.length > 0 ? (
            <ScrollReveal className="stagger">
              <div className="space-y-3.5">
                {filteredFaq.map((item) => {
                  const isOpen = openIds.includes(item.id);

                  return (
                    <details
                      key={item.id}
                      open={isOpen}
                      className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs transition-all duration-200 hover:border-slate-300"
                    >
                      {/* Header Tombol Pertanyaan */}
                      <summary
                        onClick={(e) => {
                          e.preventDefault();
                          toggleItem(item.id);
                        }}
                        className="flex w-full cursor-pointer list-none items-center justify-between gap-4 p-4 sm:p-5 text-left transition hover:bg-slate-50/60 select-none [&::-webkit-details-marker]:hidden"
                      >
                        <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                          {/* Nomor Badge Hijau Lime */}
                          <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-secondary font-extrabold text-sm sm:text-base shadow-2xs pointer-events-none">
                            {item.id}
                          </span>
                          <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                            {item.question}
                          </span>
                        </div>

                        {/* Panah Indikator (Chevron) */}
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 pointer-events-none">
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ease-out ${
                              isOpen ? "rotate-180 text-slate-900" : ""
                            }`}
                          />
                        </span>
                      </summary>

                      {/* Konten Jawaban */}
                      <div className="accordion-answer border-t border-slate-100 bg-slate-50/50 px-5 pb-5 pt-4 sm:px-6">
                        <div className="pl-12 sm:pl-14">
                          <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 font-normal">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </details>
                  );
                })}
              </div>
            </ScrollReveal>
          ) : (
            /* State jika pencarian tidak menemukan hasil */
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-xs">
              <HelpCircle className="mx-auto h-12 w-12 text-slate-300" />
              <h3 className="mt-4 text-base font-bold text-slate-800">
                Pertanyaan tidak ditemukan
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                Tidak ada pertanyaan yang sesuai dengan kata kunci &quot;
                {searchQuery}&quot;. Coba gunakan kata kunci lain.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-4 inline-flex items-center gap-1.5 cursor-pointer text-xs font-bold text-primary hover:underline"
              >
                <span>Tampilkan semua pertanyaan</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
