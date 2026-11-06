"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  provincesGeoData,
  ProvinceGeoItem,
  CLUSTER_THEME,
} from "@/data/indonesiaGeoData";
import {
  AlertTriangle,
  ArrowRight,
  GraduationCap,
  Layers,
  MapPin,
  Search,
  Wifi,
  Wrench,
  X,
  Loader2,
} from "lucide-react";

// Dynamic import with SSR disabled to prevent Leaflet window reference error
const LeafletMapInner = dynamic(() => import("./LeafletMapInner"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[420px] sm:h-[480px] rounded-xl bg-slate-100 flex flex-col items-center justify-center text-slate-500 gap-3 border border-slate-200">
      <Loader2 className="w-8 h-8 animate-spin text-[#6E67FB]" />
      <p className="text-xs font-medium text-slate-600">
        Memuat Peta Interaktif Indonesia (Leaflet)...
      </p>
    </div>
  ),
});

export default function IndonesiaInteractiveMap() {
  const [selectedProvince, setSelectedProvince] = useState<ProvinceGeoItem | null>(null);
  const [activeClusterFilter, setActiveClusterFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="relative flex flex-col">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
              Peta Prioritas Pendidikan
            </h2>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Interaktif Leaflet
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Sebaran 38 provinsi di Indonesia berdasarkan hasil klasterisasi kesenjangan fasilitas dan guru
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative w-full sm:w-56">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari provinsi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-7 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6E67FB]/30 focus:border-[#6E67FB] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Cluster Filter Buttons */}
      <div className="flex flex-wrap items-center gap-1.5 mb-3 text-xs">
        <span className="text-slate-500 text-[11px] font-medium mr-1 flex items-center gap-1">
          <Layers className="w-3 h-3 text-slate-400" /> Filter:
        </span>
        <button
          onClick={() => setActiveClusterFilter("all")}
          className={`px-2.5 py-1 rounded-md font-medium transition-all ${activeClusterFilter === "all"
              ? "bg-slate-900 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
        >
          Semua (38)
        </button>
        <button
          onClick={() => setActiveClusterFilter("Cluster 1")}
          className={`px-2.5 py-1 rounded-md font-medium transition-all flex items-center gap-1.5 ${activeClusterFilter === "Cluster 1"
              ? "bg-[#1E293B] text-white shadow-xs ring-2 ring-[#C8EE44]"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#1E293B] border border-slate-400" />
          Cluster 1 (Tinggi)
        </button>
        <button
          onClick={() => setActiveClusterFilter("Cluster 2")}
          className={`px-2.5 py-1 rounded-md font-medium transition-all flex items-center gap-1.5 ${activeClusterFilter === "Cluster 2"
              ? "bg-[#475569] text-white shadow-xs ring-2 ring-[#6E67FB]"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#475569]" />
          Cluster 2 (Sedang)
        </button>
        <button
          onClick={() => setActiveClusterFilter("Cluster 3")}
          className={`px-2.5 py-1 rounded-md font-medium transition-all flex items-center gap-1.5 ${activeClusterFilter === "Cluster 3"
              ? "bg-[#94A3B8] text-slate-900 font-bold shadow-xs ring-2 ring-slate-400"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#94A3B8]" />
          Cluster 3 (Rendah)
        </button>
      </div>

      {/* React-Leaflet Map Instance */}
      <LeafletMapInner
        onSelectProvince={(prov) => setSelectedProvince(prov)}
        selectedProvince={selectedProvince}
        activeClusterFilter={activeClusterFilter}
        searchQuery={searchQuery}
      />

      {/* Legend below the map - Matches Reference Screenshot */}
      <div className="mt-4 flex flex-wrap items-center justify-start gap-4 sm:gap-6 pt-2 border-t border-slate-100 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <span className="w-5 h-3 rounded-sm bg-[#94A3B8]" />
          <span className="font-medium text-slate-700">Cluster 3</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-3 rounded-sm bg-[#475569]" />
          <span className="font-medium text-slate-700">Cluster 2</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-3 rounded-sm bg-[#1E293B]" />
          <span className="font-medium text-slate-700">Cluster 1</span>
        </div>
        <span className="text-[11px] text-slate-400 ml-auto hidden sm:inline">
          *Klik provinsi pada peta untuk melihat indikator & rekomendasi detail
        </span>
      </div>

      {/* Detail Popover / Modal (Opsi A) when province clicked */}
      {selectedProvince && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl border border-slate-200/80 animate-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#6E67FB]" />
                  <h3 className="text-xl font-bold text-slate-900">
                    {selectedProvince.name}
                  </h3>
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${selectedProvince.cluster === "Cluster 1"
                        ? "bg-[#1E293B] text-[#C8EE44]"
                        : selectedProvince.cluster === "Cluster 2"
                          ? "bg-slate-200 text-slate-800"
                          : "bg-slate-100 text-slate-600"
                      }`}
                  >
                    {selectedProvince.cluster}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1 pl-7">
                  Wilayah: {selectedProvince.island} • Titik Koordinat: [{selectedProvince.center[0].toFixed(2)}, {selectedProvince.center[1].toFixed(2)}]
                </p>
              </div>
              <button
                onClick={() => setSelectedProvince(null)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Score Highlight */}
            <div className="my-5 rounded-xl bg-slate-50 p-4 border border-slate-200/80">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold text-slate-600">
                  Indeks Skor Kesenjangan Daerah
                </span>
                <span className="text-sm font-extrabold text-slate-900">
                  {selectedProvince.score}%
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${selectedProvince.score}%`,
                    backgroundColor:
                      selectedProvince.cluster === "Cluster 1"
                        ? "#1E293B"
                        : selectedProvince.cluster === "Cluster 2"
                          ? "#475569"
                          : "#94A3B8",
                  }}
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                {CLUSTER_THEME[selectedProvince.cluster].description}
              </p>
            </div>

            {/* Key Indicators Grid */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="rounded-xl border border-slate-200 p-3 bg-white text-center">
                <Wrench className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                <p className="text-[10px] text-slate-500">Ruang Rusak Berat</p>
                <p className="text-base font-bold text-slate-900 mt-0.5">
                  {selectedProvince.rusakBeratPercent}%
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-3 bg-white text-center">
                <GraduationCap className="w-4 h-4 text-[#6E67FB] mx-auto mb-1" />
                <p className="text-[10px] text-slate-500">Kekurangan Guru</p>
                <p className="text-base font-bold text-slate-900 mt-0.5">
                  {selectedProvince.guruKurangPercent}%
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-3 bg-white text-center">
                <Wifi className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
                <p className="text-[10px] text-slate-500">Akses Internet</p>
                <p className="text-base font-bold text-slate-900 mt-0.5">
                  {selectedProvince.aksesInternetPercent}%
                </p>
              </div>
            </div>

            {/* Critical Issues */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                Fokus Masalah Prioritas:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProvince.urgentIssues.map((issue, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                  >
                    • {issue}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedProvince(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition"
              >
                Tutup
              </button>
              <Link
                href={`/eksplorasi-daerah?provinsi=${selectedProvince.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-lg bg-[#202D41] text-[#C8EE44] hover:bg-slate-800 transition shadow-sm group"
              >
                <span>Jelajahi di Eksplorasi Daerah</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
