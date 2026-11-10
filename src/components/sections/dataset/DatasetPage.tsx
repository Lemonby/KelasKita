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
import ScrollReveal from "@/components/ui/ScrollReveal";
import FilterDropdown from "@/components/ui/FilterDropdown";

export default function DatasetPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua kategori");
  const [level, setLevel] = useState("Semua jenjang");
  const [viewMode, setViewMode] = useState<"card" | "list">("card");
  const [page, setPage] = useState(1);
  const perPage = 9;
  const categories = useMemo(
    () => Array.from(new Set(datasets.map((dataset) => dataset.category))),
    [],
  );
  const levels = useMemo(
    () => Array.from(new Set(datasets.map((dataset) => dataset.levels))),
    [],
  );
  const filteredDatasets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return datasets.filter((dataset) => {
      const matchesCategory =
        category === "Semua kategori" || dataset.category === category;
      const matchesLevel =
        level === "Semua jenjang" || dataset.levels === level;
      const searchableText =
        `${dataset.title} ${dataset.description} ${dataset.category}`.toLowerCase();
      return (
        matchesCategory &&
        matchesLevel &&
        searchableText.includes(normalizedQuery)
      );
    });
  }, [category, level, query]);
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

  const updateLevel = (value: string) => {
    setLevel(value);
    setPage(1);
  };

  return (
    <section className="page-shell bg-background px-4 py-9 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="relative z-20">
          <header className="page-hero section-hero rounded-2xl bg-secondary text-white">
            <div className="section-hero-content">
              <h1 className="section-hero-title max-w-xl">
                Dataset kesenjangan{" "}
                <span className="text-accent">pendidikan antardaerah</span>
              </h1>
              <p className="section-hero-description">
                Temukan data, lihat daerah yang tertinggal, dan dapatkan saran
                tindakan.
              </p>
              <div className="mt-6 grid max-w-4xl gap-2 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.2fr)_minmax(10rem,0.9fr)_minmax(9rem,0.75fr)]">
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
                <FilterDropdown
                  label="Filter jenjang"
                  value={level}
                  options={["Semua jenjang", ...levels]}
                  onChange={updateLevel}
                  className="w-full"
                />
                <FilterDropdown
                  label="Filter kategori"
                  value={category}
                  options={["Semua kategori", ...categories]}
                  onChange={updateCategory}
                  leadingIcon={<Filter size={16} />}
                  variant="accent"
                  className="w-full"
                />
              </div>
            </div>
          </header>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
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
        </ScrollReveal>

        {visibleDatasets.length > 0 ? (
          <ScrollReveal>
            <div
              className={
                viewMode === "card"
                  ? "stagger mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                  : "stagger mt-5 space-y-4"
              }
            >
              {visibleDatasets.map((dataset) => (
                <DatasetItem
                  key={dataset.id}
                  dataset={dataset}
                  viewMode={viewMode}
                />
              ))}
            </div>
          </ScrollReveal>
        ) : (
          <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center text-sm text-slate-500">
            Dataset tidak ditemukan. Coba kata kunci, kategori, atau jenjang
            lain.
          </div>
        )}

        {totalPages > 1 && (
          <nav
            className="mt-10 flex items-center justify-center gap-1"
            aria-label="Pagination"
          >
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
                      ? "bg-[#dff6e9] text-secondary"
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
              onClick={() =>
                setPage((value) => Math.min(totalPages, value + 1))
              }
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
      className={`ui-card group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-accent hover:shadow-md ${
        viewMode === "list"
          ? "flex flex-col gap-4 px-5 sm:flex-row sm:items-center sm:gap-5 lg:gap-8 lg:px-7"
          : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-md bg-[#e6e3ff] px-2 py-1 text-[10px] font-bold text-primary">
          {dataset.format}
        </span>
        <span className="flex shrink-0 items-center gap-1 text-[10px] text-slate-400">
          <BarChart3 size={12} aria-hidden="true" />
          {dataset.urgency}
        </span>
      </div>
      <div className={viewMode === "list" ? "mt-0 min-w-0 flex-1" : "mt-4"}>
        <p className="text-xs font-semibold text-primary">{dataset.category}</p>
        <h2 className="mt-1 line-clamp-2 text-sm font-bold leading-5 text-secondary group-hover:text-primary">
          {dataset.title}
        </h2>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
          {dataset.description}
        </p>
      </div>
      <div
        className={`mt-5 border-t border-slate-100 pt-4 text-[10px] text-slate-500 ${
          viewMode === "list"
            ? "mt-0 flex flex-wrap items-center gap-x-5 gap-y-2 border-t-0 sm:min-w-0 sm:border-l sm:pl-6"
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
      className={`rounded p-1.5 ${active ? "bg-secondary text-white" : "text-slate-400 hover:text-slate-700"}`}
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
