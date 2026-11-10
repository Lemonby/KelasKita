"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Building2,
  ChartNoAxesCombined,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  GraduationCap,
  Search,
  ArrowRight,
  UserCheck,
  Users,
} from "lucide-react";

import ExplorasiChart from "@/components/sections/eksplorasi-wilayah/EksplorasiBarChart";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FilterDropdown from "@/components/ui/FilterDropdown";

// IMPORT DATA MILIKMU
import { eksplorasiData, insights } from "@/data/dummy";

// Tipe indikator yang tersedia
type IndikatorKey =
  | "Kelas Rusak Total(%)"
  | "Rasio Murid Guru"
  | "Rasio Murid Rombel"
  | "Angka Putus Sekolah";

// Daftar indikator
const indikatorOptions: IndikatorKey[] = [
  "Kelas Rusak Total(%)",
  "Rasio Murid Guru",
  "Rasio Murid Rombel",
  "Angka Putus Sekolah",
];

const tableIndicators: IndikatorKey[] = [
  "Kelas Rusak Total(%)",
  "Rasio Murid Guru",
  "Rasio Murid Rombel",
  "Angka Putus Sekolah",
];

const insightIcons = {
  "alert-triangle": AlertTriangle,
  "chart-no-axes-combined": ChartNoAxesCombined,
  graduation: GraduationCap,
  users: Users,
  building: Building2,
  arrowRight: ArrowRight,
  userCheck: UserCheck,
} as const;

const insightCategoryStyles: Record<string, { icon: string; label: string }> = {
  Partisipasi: {
    icon: "bg-[#C9C4FF] text-primary",
    label: "bg-[#C9C4FF] text-primary",
  },
  Kualitas: {
    icon: "bg-[#E4FF9E] text-[#84CC16]",
    label: "bg-[#E4FF9E] text-[#65A30D]",
  },
  Fasilitas: {
    icon: "bg-[#B9F3EC] text-[#0F9F91]",
    label: "bg-[#B9F3EC] text-[#0F766E]",
  },
  Prioritas: {
    icon: "bg-[#FFE0B2] text-[#EA580C]",
    label: "bg-[#FFE0B2] text-[#C2410C]",
  },
};

const defaultInsightCategoryStyle = {
  icon: "bg-slate-100 text-slate-600",
  label: "bg-slate-100 text-slate-600",
};

export default function EkspolarasiWilayah() {
  // ==========================================
  // 1. STATE
  // ==========================================

  // Menyimpan provinsi yang dipilih
  // Default [] = semua provinsi ditampilkan
  const [selectedProvinsi, setSelectedProvinsi] = useState<string[]>([]);

  // Menyimpan indikator yang dipilih
  const [selectedIndikator, setSelectedIndikator] = useState<IndikatorKey>(
    "Angka Putus Sekolah",
  );

  // Mengatur dropdown filter provinsi
  const [showFilter, setShowFilter] = useState(false);
  const [tablePage, setTablePage] = useState(1);
  const [insightSearch, setInsightSearch] = useState("");

  // ==========================================
  // 2. MENGAMBIL DATA PROVINSI
  // ==========================================

  const daftarProvinsi = useMemo(() => {
    return [
      ...new Set(eksplorasiData.tabelData.map((item) => item.Provinsi)),
    ].sort((a, b) => a.localeCompare(b, "id"));
  }, []);

  // ==========================================
  // 3. FILTER DATA BERDASARKAN PROVINSI
  // ==========================================

  const filteredData = useMemo(() => {
    // Jika tidak ada provinsi dipilih,
    // tampilkan seluruh data
    if (selectedProvinsi.length === 0) {
      return eksplorasiData.tabelData;
    }

    // Jika ada pilihan, ambil provinsi tersebut
    return eksplorasiData.tabelData.filter((item) =>
      selectedProvinsi.includes(item.Provinsi),
    );
  }, [selectedProvinsi]);

  // ==========================================
  // 4. MENGOLAH DATA UNTUK RECHARTS
  // ==========================================

  const chartData = useMemo(() => {
    return filteredData.map((item) => ({
      Provinsi: item.Provinsi,
      value: item[selectedIndikator],
    }));
  }, [filteredData, selectedIndikator]);

  const tableData = useMemo(() => {
    if (selectedProvinsi.length > 0) {
      return filteredData;
    }

    const startIndex = (tablePage - 1) * 10;
    return filteredData.slice(startIndex, startIndex + 10);
  }, [filteredData, selectedProvinsi.length, tablePage]);

  const totalTablePages = Math.ceil(filteredData.length / 10);

  const filteredInsights = useMemo(() => {
    const query = insightSearch.trim().toLocaleLowerCase("id");

    if (!query) {
      return insights;
    }

    return insights.filter((insight) =>
      [insight.title, insight.description, insight.category].some((value) =>
        value.toLocaleLowerCase("id").includes(query),
      ),
    );
  }, [insightSearch]);

  // ==========================================
  // 5. CHECKBOX PROVINSI
  // ==========================================

  const handleProvinceChange = (provinsi: string) => {
    setSelectedProvinsi((prev) => {
      // Jika sudah dipilih, hapus dari pilihan
      if (prev.includes(provinsi)) {
        return prev.filter((item) => item !== provinsi);
      }

      // Jika belum dipilih, tambahkan
      return [...prev, provinsi];
    });
  };

  // ==========================================
  // 6. RESET FILTER
  // ==========================================

  const handleReset = () => {
    setSelectedProvinsi([]);
    setSelectedIndikator("Angka Putus Sekolah");
    setTablePage(1);
    setInsightSearch("");
  };

  // ==========================================
  // 7. TAMPILAN HALAMAN
  // ==========================================

  return (
    <main className="page-shell min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <ScrollReveal>
          <header className="page-hero section-hero rounded-2xl bg-secondary text-white">
            <div className="section-hero-content">
              <h1 className="section-hero-title">
                Eksplorasi <span className="text-lime-400">Daerah</span>
              </h1>

              <p className="section-hero-description">
                Bandingkan kondisi pendidikan antar wilayah berdasarkan
                indikator yang tersedia.
              </p>
            </div>
          </header>
        </ScrollReveal>

        {/* FILTER SECTION */}
        <ScrollReveal className="relative z-20">
          <section className="mx-auto mt-9 max-w-3xl">
            <h2 className="section-heading text-center sm:!text-3xl">
              Masukan Nama Daerahmu
            </h2>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:items-start">
              {/* FILTER PROVINSI */}
              <div className="relative w-full sm:w-[420px]">
                <button
                  type="button"
                  onClick={() => setShowFilter((prev) => !prev)}
                  className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm shadow-sm hover:border-lime-400"
                >
                  <span className="text-slate-600">
                    {selectedProvinsi.length === 0
                      ? "Semua Provinsi"
                      : `${selectedProvinsi.length} Provinsi Dipilih`}
                  </span>

                  <span className="rounded-full bg-lime-300 px-5 py-2 font-semibold text-secondary">
                    {showFilter ? "Tutup" : "Filter"}
                  </span>
                </button>

                {/* DROPDOWN CHECKBOX */}
                {showFilter && (
                  <div className="absolute left-0 top-full z-30 mt-2 w-full max-w-[calc(100vw-2rem)] rounded-xl border border-slate-200 bg-white p-4 shadow-xl sm:max-w-none">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-semibold text-secondary">
                        Pilih Provinsi
                      </h3>

                      <button
                        type="button"
                        onClick={() => setSelectedProvinsi([])}
                        className="text-xs font-semibold text-indigo-600 hover:underline"
                      >
                        Hapus pilihan
                      </button>
                    </div>

                    <div className="max-h-64 space-y-2 overflow-y-auto">
                      {daftarProvinsi.map((provinsi) => (
                        <label
                          key={provinsi}
                          className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-slate-50"
                        >
                          <input
                            type="checkbox"
                            checked={selectedProvinsi.includes(provinsi)}
                            onChange={() => handleProvinceChange(provinsi)}
                            className="h-4 w-4 accent-lime-500"
                          />

                          <span>{provinsi}</span>
                        </label>
                      ))}
                    </div>

                    <div className="mt-3 border-t pt-3 text-right">
                      <button
                        type="button"
                        onClick={() => setShowFilter(false)}
                        className="rounded-lg bg-secondary px-5 py-2 text-xs font-semibold text-white hover:bg-slate-700"
                      >
                        Terapkan
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* RESET BUTTON */}
              <button
                type="button"
                onClick={handleReset}
                className="rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
              >
                Atur Ulang
              </button>
            </div>
          </section>
        </ScrollReveal>

        {/* CHART SECTION */}
        <ScrollReveal className="relative z-10">
          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-md sm:mt-12 sm:p-6 md:p-8">
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="section-heading">Perbandingan Indikator</h2>

                <p className="mt-1 text-sm text-slate-400">
                  {selectedProvinsi.length === 0
                    ? "Menampilkan seluruh provinsi"
                    : `Menampilkan ${selectedProvinsi.length} provinsi`}
                </p>
              </div>

              {/* FILTER INDIKATOR */}
              <FilterDropdown
                label="Pilih indikator"
                value={selectedIndikator}
                options={indikatorOptions}
                onChange={(value) =>
                  setSelectedIndikator(value as IndikatorKey)
                }
                className="sm:w-auto sm:min-w-64"
              />
            </div>

            {/* MEMANGGIL COMPONENT CHART */}
            <ExplorasiChart data={chartData} indikator={selectedIndikator} />
          </section>
        </ScrollReveal>

        {/* TABLE SECTION */}
        <ScrollReveal>
          <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md sm:mt-10">
            <div className="bg-secondary px-6 py-5 text-white md:px-8">
              <h2 className="section-heading text-white">
                Data Indikator Pendidikan
              </h2>
              <p className="mt-1 text-sm text-slate-200">
                {selectedProvinsi.length === 0
                  ? "Menampilkan data seluruh provinsi"
                  : `Menampilkan data ${selectedProvinsi.length} provinsi terpilih`}
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-[760px] w-full text-left text-sm">
                <thead className="bg-background text-secondary">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Provinsi</th>
                    {tableIndicators.map((indikator) => (
                      <th key={indikator} className="px-6 py-4 font-semibold">
                        {indikator}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {tableData.map((item) => (
                    <tr key={item.Provinsi} className="hover:bg-slate-50">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-secondary">
                        {item.Provinsi}
                      </td>
                      {tableIndicators.map((indikator) => (
                        <td
                          key={indikator}
                          className="whitespace-nowrap px-6 py-4 text-slate-600"
                        >
                          {item[indikator].toLocaleString("id-ID")}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {tableData.length === 0 && (
                    <tr>
                      <td
                        colSpan={tableIndicators.length + 1}
                        className="px-6 py-8 text-center text-slate-500"
                      >
                        Tidak ada data untuk provinsi yang dipilih.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {selectedProvinsi.length === 0 && totalTablePages > 1 && (
              <div className="flex flex-nowrap items-center justify-between gap-1 border-t border-slate-100 px-2 py-3 sm:gap-2 sm:px-6 sm:py-4 md:px-8">
                <button
                  type="button"
                  onClick={() => setTablePage((page) => Math.max(1, page - 1))}
                  disabled={tablePage === 1}
                  aria-label="Halaman sebelumnya"
                  className="inline-flex h-9 shrink-0 items-center justify-center gap-1 rounded-lg px-2 text-sm font-semibold text-secondary hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 sm:px-3"
                >
                  <ChevronLeft size={16} />
                  <span className="sr-only sm:not-sr-only">Sebelumnya</span>
                </button>

                <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
                  {Array.from(
                    { length: totalTablePages },
                    (_, index) => index + 1,
                  ).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setTablePage(page)}
                      aria-current={page === tablePage ? "page" : undefined}
                      className={`h-8 min-w-8 rounded-lg px-1.5 text-xs font-semibold sm:px-2 ${
                        page === tablePage
                          ? "bg-[#dff6e9] text-secondary"
                          : "text-slate-500 hover:bg-slate-100"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setTablePage((page) => Math.min(totalTablePages, page + 1))
                  }
                  disabled={tablePage === totalTablePages}
                  aria-label="Halaman berikutnya"
                  className="inline-flex h-9 shrink-0 items-center justify-center gap-1 rounded-lg px-2 text-sm font-semibold text-secondary hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 sm:px-3"
                >
                  <span className="sr-only sm:not-sr-only">Berikutnya</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </section>
        </ScrollReveal>

        {/* INSIGHT SECTION */}
        <ScrollReveal className="mt-12 sm:mt-16">
          <section>
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <h2 className="section-heading !text-2xl sm:!text-3xl">
                Insight
              </h2>

              <label className="flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-400 sm:w-72">
                <Search size={16} />
                <input
                  type="search"
                  value={insightSearch}
                  onChange={(event) => setInsightSearch(event.target.value)}
                  onInput={(event) =>
                    setInsightSearch((event.target as HTMLInputElement).value)
                  }
                  placeholder="Ketik untuk mencari insight"
                  className="min-w-0 flex-1 bg-transparent text-secondary outline-none placeholder:text-slate-400"
                />
              </label>
            </div>

            <div className="stagger space-y-5">
              {filteredInsights.map((insight) => {
                const Icon = insightIcons[insight.icon] ?? CircleHelp;
                const categoryStyle =
                  insightCategoryStyles[insight.category] ??
                  defaultInsightCategoryStyle;

                return (
                  <article
                    key={insight.title}
                    className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:gap-5 sm:p-6"
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${categoryStyle.icon}`}
                    >
                      <Icon size={28} />
                    </div>

                    <div>
                      <h3 className="font-bold text-secondary">
                        {insight.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {insight.description}
                      </p>
                      <span
                        className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${categoryStyle.label}`}
                      >
                        {insight.category}
                      </span>
                    </div>
                  </article>
                );
              })}

              {filteredInsights.length === 0 && (
                <p className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500">
                  Insight tidak ditemukan.
                </p>
              )}
            </div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
