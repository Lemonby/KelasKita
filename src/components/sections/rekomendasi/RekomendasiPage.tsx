"use client";

import {
  ArrowRight,
  Building2,
  RotateCcw,
  UserCheck,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { rekomendasi } from "@/data/dummy";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FilterDropdown from "@/components/ui/FilterDropdown";

const categoryStyles: Record<
  string,
  {
    background: string;
    iconBackground: string;
    text: string;
  }
> = {
  Fasilitas: {
    background: "bg-[#deddff]",
    iconBackground: "bg-[#c6c3ff]",
    text: "text-primary",
  },
  SDM: {
    background: "bg-[#e6ffad]",
    iconBackground: "bg-[#ddff91]",
    text: "text-[#79b900]",
  },
};

const iconMap = {
  building: Building2,
  arrowRight: ArrowRight,
  userCheck: UserCheck,
  users: Users,
} as const;

export default function RekomendasiPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua kategori");
  const [selectedRegion, setSelectedRegion] = useState("Semua daerah");

  const regions = useMemo(
    () => Array.from(new Set(rekomendasi.map((item) => item.wilayah))),
    [],
  );
  const categories = useMemo(
    () => Array.from(new Set(rekomendasi.map((item) => item.category))),
    [],
  );

  const filteredRecommendations = rekomendasi.filter(
    (item) =>
      (selectedCategory === "Semua kategori" ||
        item.category === selectedCategory) &&
      (selectedRegion === "Semua daerah" || item.wilayah === selectedRegion),
  );

  const resetFilters = () => {
    setSelectedCategory("Semua kategori");
    setSelectedRegion("Semua daerah");
  };

  return (
    <section className="page-shell bg-background px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
        <div className="page-hero section-hero rounded-2xl bg-secondary text-white">
          <div className="section-hero-content">
          <h1 className="section-hero-title">
            Rekomendasi <span className="text-accent">Tindakan</span>
          </h1>
          <p className="section-hero-description">
            Usulan yang dapat dipertimbangkan berdasarkan temuan dan data yang
            tersedia
          </p>
          </div>
        </div>
        </ScrollReveal>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-end">
          <FilterSelect
            label="Provinsi"
            value={selectedRegion}
            options={["Semua daerah", ...regions]}
            onChange={setSelectedRegion}
          />
          <FilterSelect
            label="Kategori"
            value={selectedCategory}
            options={["Semua kategori", ...categories]}
            onChange={setSelectedCategory}
          />
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-5 text-sm font-semibold text-white transition hover:bg-secondary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <RotateCcw size={15} aria-hidden="true" />
            Atur ulang
          </button>
        </div>

        <ScrollReveal className="stagger">
        <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
          {filteredRecommendations.length > 0 ? (
            filteredRecommendations.map((item) => {
              const style = categoryStyles[item.category];
              const Icon = iconMap[item.icon];

              return (
                <article
                  key={`${item.wilayah}-${item.title}`}
                  className="ui-card flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-start sm:p-6 lg:gap-6 lg:p-7"
                >
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${style.iconBackground} ${style.text} sm:h-20 sm:w-20`}
                  >
                    <Icon size={34} strokeWidth={2.2} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-base font-bold leading-6 text-secondary sm:text-lg">
                      {item.title}
                    </h2>
                    <div className="mt-2 max-w-2xl text-sm leading-5 text-slate-500">
                      {item.descriptionItems ? (
                        <ul className="list-disc space-y-1 pl-5">
                          {item.descriptionItems.map((descriptionItem) => (
                            <li key={descriptionItem}>{descriptionItem}</li>
                          ))}
                        </ul>
                      ) : (
                        item.description
                      )}
                    </div>
                    <span
                      className={`mt-4 inline-flex rounded-full px-4 py-1 text-xs font-semibold ${style.background} ${style.text}`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <span className="self-start rounded-lg border border-slate-200 px-4 py-2 text-center text-xs font-medium text-slate-500 sm:ml-auto sm:min-w-28 sm:self-end">
                    {item.wilayah}
                  </span>
                </article>
              );
            })
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center text-sm text-slate-500">
              Tidak ada rekomendasi yang sesuai dengan filter pilihan.
            </div>
          )}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

type FilterSelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <div className="relative block w-full sm:max-w-56">
      <span className="mb-1.5 block text-[11px] font-medium text-slate-500">
        {label}
      </span>
      <FilterDropdown
        label={label}
        value={value}
        options={options}
        onChange={onChange}
      />
    </div>
  );
}
