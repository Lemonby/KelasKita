"use client";

import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { clusterData } from "@/data/dummy";

const clusterPriority: Record<string, number> = {
  "Cluster A": 1,
  "Cluster B": 2,
  "Cluster C": 3,
};

const clusterStyles: Record<
  string,
  { badge: string; text: string; bar: string }
> = {
  "Cluster A": {
    badge: "bg-red-100 text-red-700",
    text: "text-red-700",
    bar: "bg-red-500",
  },
  "Cluster B": {
    badge: "bg-amber-100 text-amber-700",
    text: "text-amber-700",
    bar: "bg-amber-500",
  },
  "Cluster C": {
    badge: "bg-[#e6ffad] text-[#5b8c00]",
    text: "text-[#5b8c00]",
    bar: "bg-[#9bdc22]",
  },
};

const initialVisibleRows = 5;

export default function PrioritasDaerahPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const prioritizedRegions = useMemo(
    () =>
      [...clusterData].sort(
        (first, second) =>
          clusterPriority[first.jenis] - clusterPriority[second.jenis] ||
          first.no - second.no,
      ),
    [],
  );

  const filteredRegions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return prioritizedRegions;

    return prioritizedRegions.filter(
      (region) =>
        region.Provinsi.toLowerCase().includes(query) ||
        region.jenis.toLowerCase().includes(query) ||
        region.keterangan.toLowerCase().includes(query),
    );
  }, [prioritizedRegions, searchQuery]);

  const visibleRegions = showAll
    ? filteredRegions
    : filteredRegions.slice(0, initialVisibleRows);

  return (
    <section className="min-h-screen bg-[#f5fdfd] px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-[#202d41] px-6 py-8 text-white shadow-sm sm:px-8 sm:py-9 lg:px-9">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Prioritas <span className="text-[#c8ee44]">Daerah</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-5 text-slate-200 sm:text-base">
            Daftar wilayah berdasarkan tingkat permasalahan pendidikan dari
            hasil klasifikasi indikator.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
          <label className="relative block w-full max-w-sm">
            <span className="sr-only">Cari wilayah</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setShowAll(false);
              }}
              placeholder="Ketik untuk mencari daerah"
              className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-[#6e67fb] focus:ring-2 focus:ring-[#6e67fb]/20"
            />
          </label>
          <p className="text-sm text-slate-500">
            {filteredRegions.length} dari {clusterData.length} wilayah
          </p>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="hidden grid-cols-[76px_minmax(180px,1.3fr)_minmax(190px,1fr)_minmax(150px,0.8fr)] gap-5 border-b border-slate-200 px-6 py-4 text-xs font-bold text-slate-600 sm:grid">
            <span>Peringkat</span>
            <span>Wilayah</span>
            <span>Tingkat permasalahan</span>
            <span>Jenis cluster</span>
          </div>

          {visibleRegions.length > 0 ? (
            visibleRegions.map((region, index) => {
              const style = clusterStyles[region.jenis];
              const rank = index + 1;

              return (
                <div
                  key={region.Provinsi}
                  className="grid gap-3 border-b border-slate-200 px-5 py-4 last:border-b-0 sm:grid-cols-[76px_minmax(180px,1.3fr)_minmax(190px,1fr)_minmax(150px,0.8fr)] sm:items-center sm:gap-5 sm:px-6"
                >
                  <div className="flex items-center justify-between sm:block">
                    <span className="text-xs font-bold text-slate-500 sm:hidden">
                      Peringkat
                    </span>
                    <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-lg bg-[#c8ee44] px-2 text-sm font-bold text-[#202d41]">
                      {rank}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-[#202d41]">
                      {region.Provinsi}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold sm:hidden ${style.badge}`}
                    >
                      {region.jenis}
                    </span>
                  </div>
                  <div>
                    <span className="mb-1 block text-xs font-medium text-slate-500 sm:hidden">
                      Tingkat permasalahan
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
                        <div
                          className={`h-full rounded-full ${style.bar}`}
                          style={{
                            width: `${((4 - clusterPriority[region.jenis]) / 3) * 100}%`,
                          }}
                        />
                      </div>
                      <span className={`text-xs font-semibold ${style.text}`}>
                        {region.keterangan}
                      </span>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}
                    >
                      {region.jenis}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="px-6 py-12 text-center text-sm text-slate-500">
              Tidak ada wilayah yang sesuai dengan pencarian.
            </p>
          )}
        </div>

        {filteredRegions.length > initialVisibleRows && (
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="ml-auto mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[#6e67fb] shadow-sm transition hover:border-[#6e67fb] hover:bg-slate-50"
          >
            {showAll ? "Tampilkan lebih sedikit" : "Lihat lebih banyak"}
            <ArrowRight
              aria-hidden="true"
              className={`h-4 w-4 transition-transform ${showAll ? "rotate-[-90deg]" : ""}`}
            />
          </button>
        )}
      </div>
    </section>
  );
}
