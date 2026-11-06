"use client";

import Link from "next/link";
import {
  BarChart3,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  FileSpreadsheet,
  Filter,
  Grid2X2,
  List,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";
import { datasets } from "@/data/dummy";

export default function DatasetPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua kategori");
  const [viewMode, setViewMode] = useState<"card" | "list">("card");
  const [page, setPage] = useState(1);
  const perPage = 9;
  const categories = useMemo(
    () => Array.from(new Set(datasets.map((dataset) => dataset.category))),
    [],
  );
  const filteredDatasets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return datasets.filter((dataset) => {
      const matchesCategory =
        category === "Semua kategori" || dataset.category === category;
      const searchableText = `${dataset.title} ${dataset.description} ${dataset.category}`.toLowerCase();
      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [category, query]);
  const totalPages = Math.max(1, Math.ceil(filteredDatasets.length / perPage));
  const currentPage = Math.min(page, totalPages);
  const visibleDatasets = filteredDatasets.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );

  const updateQuery = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const updateCategory = (value: string) => {
    setCategory(value);
    setPage(1);
  };

  return (
    <section className="bg-[#f5fdfd] px-4 py-9 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <header className="rounded-2xl bg-[#202d41] px-6 py-8 text-white shadow-sm sm:px-8 lg:px-9">
          <h1 className="max-w-xl text-2xl font-bold leading-tight sm:text-3xl">
            Dataset kesenjangan{" "}
            <span className="text-[#c8ee44]">pendidikan antardaerah</span>
          </h1>
          <p className="mt-3 text-sm text-slate-200">
            Temukan data, lihat daerah yang tertinggal, dan dapatkan saran tindakan.
          </p>
          <div className="mt-6 flex max-w-xl flex-col gap-2 sm:flex-row">
            <label className="flex h-12 flex-1 items-center gap-2 rounded-full bg-white px-4 text-slate-500">
              <Search size={16} aria-hidden="true" />
              <span className="sr-only">Cari dataset</span>
              <input
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
                onInput={(event) =>
                  updateQuery((event.target as HTMLInputElement).value)
                }
                placeholder="Masukan kata kunci"
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </label>
            <label className="flex h-12 items-center gap-2 rounded-full bg-[#c8ee44] px-4 text-sm font-bold text-[#202d41] sm:min-w-48">
              <Filter size={16} aria-hidden="true" />
              <span className="sr-only">Filter kategori</span>
              <select
                value={category}
                onChange={(event) => updateCategory(event.target.value)}
                onInput={(event) =>
                  updateCategory((event.target as HTMLSelectElement).value)
                }
                className="min-w-0 flex-1 cursor-pointer appearance-none bg-transparent outline-none"
              >
                <option value="Semua kategori">Semua kategori</option>
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </header>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            Menampilkan <strong>{filteredDatasets.length}</strong> dari{" "}
            <strong>{datasets.length}</strong> dataset
          </p>
          <div className="flex rounded-md border border-slate-200 bg-white p-1 shadow-sm">
            <ViewButton
              label="Tampilan kartu"
              active={viewMode === "card"}
              onClick={() => setViewMode("card")}
            >
              <Grid2X2 size={15} />
            </ViewButton>
            <ViewButton
              label="Tampilan list"
              active={viewMode === "list"}
              onClick={() => setViewMode("list")}
            >
              <List size={15} />
            </ViewButton>
          </div>
        </div>

        {visibleDatasets.length > 0 ? (
          <div
            className={
              viewMode === "card"
                ? "mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                : "mt-5 space-y-4"
            }
          >
            {visibleDatasets.map((dataset) => (
              <DatasetItem key={dataset.id} dataset={dataset} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center text-sm text-slate-500">
            Dataset tidak ditemukan. Coba kata kunci atau kategori lain.
          </div>
        )}

        {totalPages > 1 && (
          <nav className="mt-10 flex items-center justify-center gap-1" aria-label="Pagination">
            <PageButton
              label="Halaman sebelumnya"
              disabled={currentPage === 1}
              onClick={() => setPage((value) => Math.max(1, value - 1))}
            >
              <ChevronLeft size={15} />
            </PageButton>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setPage(item)}
                  aria-current={item === currentPage ? "page" : undefined}
                  className={`h-8 min-w-8 rounded-md px-2 text-xs font-semibold transition ${
                    item === currentPage
                      ? "bg-[#dff6e9] text-[#202d41]"
                      : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {item}
                </button>
              ),
            )}
            <PageButton
              label="Halaman berikutnya"
              disabled={currentPage === totalPages}
              onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            >
              <ChevronRight size={15} />
            </PageButton>
          </nav>
        )}
      </div>
    </section>
  );
}

function DatasetItem({
  dataset,
  viewMode,
}: {
  dataset: (typeof datasets)[number];
  viewMode: "card" | "list";
}) {
  return (
    <Link
      href={`/dataset/${dataset.id}`}
      className={`group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#c8ee44] hover:shadow-md ${
        viewMode === "list"
          ? "flex items-center gap-5 px-5 lg:gap-8 lg:px-7"
          : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-md bg-[#e6e3ff] px-2 py-1 text-[10px] font-bold text-[#6e67fb]">
          {dataset.format}
        </span>
        <span className="flex shrink-0 items-center gap-1 text-[10px] text-slate-400">
          <BarChart3 size={12} aria-hidden="true" />
          {dataset.urgency}
        </span>
      </div>
      <div className={viewMode === "list" ? "mt-0 min-w-0 flex-1" : "mt-4"}>
        <p className="text-xs font-semibold text-[#6e67fb]">{dataset.category}</p>
        <h2 className="mt-1 line-clamp-2 text-sm font-bold leading-5 text-[#202d41] group-hover:text-[#6e67fb]">
          {dataset.title}
        </h2>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
          {dataset.description}
        </p>
      </div>
      <div
        className={`mt-5 border-t border-slate-100 pt-4 text-[10px] text-slate-500 ${
          viewMode === "list"
            ? "mt-0 flex min-w-64 items-center gap-5 border-t-0 border-l pl-6"
            : ""
        }`}
      >
        <span className="flex items-center gap-1">
          <FileSpreadsheet size={12} aria-hidden="true" />
          {dataset.owner ?? dataset.source}
        </span>
        <span className="mt-2 flex items-center gap-1 lg:mt-0">
          <CalendarDays size={12} aria-hidden="true" />
          {dataset.updatedDate ?? dataset.date}
        </span>
      </div>
    </Link>
  );
}

function ViewButton({
  active,
  children,
  label,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={`rounded p-1.5 ${active ? "bg-[#202d41] text-white" : "text-slate-400 hover:text-slate-700"}`}
    >
      {children}
    </button>
  );
}

function PageButton({
  children,
  disabled,
  label,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="rounded-md p-1.5 text-slate-500 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
    >
      {children}
    </button>
  );
}