"use client";

import {
  ArrowRight,
  Building2,
  ChevronDown,
  RotateCcw,
  UserCheck,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { clusterData, rekomendasi } from "@/data/dummy";
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
    () =>
      Array.from(
        new Set([
          ...clusterData.map((item) => item.Provinsi),
          ...rekomendasi
            .filter((item) => !item.cluster)
            .map((item) => item.wilayah),
        ]),
      ),
    [],
  );
  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          rekomendasi.flatMap((item) => item.categories ?? [item.category]),
        ),
      ),
    [],
  );

  const filteredRecommendations = rekomendasi.filter((item) => {
    const matchesCategory =
      selectedCategory === "Semua kategori" ||
      (item.categories ?? [item.category]).includes(selectedCategory);
    const matchesRegion =
      selectedRegion === "Semua daerah" ||
      (item.cluster
        ? clusterData.some(
            (region) =>
              region.Provinsi === selectedRegion &&
              region.jenis === item.cluster,
          )
        : item.wilayah === selectedRegion);

    return matchesCategory && matchesRegion;
  });

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

        <ScrollReveal>
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
        </ScrollReveal>

        <ScrollReveal className="stagger">
        <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
          {filteredRecommendations.length > 0 ? (
            filteredRecommendations.map((item) => {
              const style = categoryStyles[item.category];
              const Icon = iconMap[item.icon];
              const itemCategories = item.categories ?? [item.category];
              const clusterRegions = item.cluster
                ? clusterData.filter((region) => region.jenis === item.cluster)
                : [];

              return (
                <details
                  key={`${item.wilayah}-${item.title}`}
                  className="ui-card group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-slate-300 hover:shadow-md"
                >
                  <summary className="flex min-h-28 cursor-pointer list-none items-center gap-4 p-4 text-left transition hover:bg-slate-50/60 select-none [&::-webkit-details-marker]:hidden sm:gap-6 sm:px-6 sm:py-5 lg:px-8">
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${style.iconBackground} ${style.text} sm:h-16 sm:w-16`}
                    >
                      <Icon size={30} strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold leading-5 text-secondary sm:text-base sm:leading-6">
                        {item.title}
                      </span>
                      <span className="mt-2 flex flex-wrap gap-2">
                        {itemCategories.map((category) => {
                          const categoryStyle = categoryStyles[category];

                          return (
                            <span
                              key={category}
                              className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${categoryStyle.background} ${categoryStyle.text}`}
                            >
                              {category}
                            </span>
                          );
                        })}
                      </span>
                    </span>
                    <span className="hidden shrink-0 rounded-lg border border-slate-200 px-4 py-2 text-center text-xs font-medium text-slate-500 sm:block">
                      {item.cluster
                        ? `${clusterRegions.length} provinsi`
                        : item.wilayah}
                    </span>
                    <ChevronDown
                      size={20}
                      aria-hidden="true"
                      className="shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <div className="accordion-answer border-t border-slate-100 bg-slate-50/50 px-5 py-5 sm:px-8 sm:py-6">
                    <div className="sm:pl-20">
                      {item.cluster ? (
                        <div className="mb-4 rounded-xl border border-slate-200 bg-white p-4">
                          <p className="text-xs font-semibold text-secondary">
                            Cakupan {item.cluster} ({clusterRegions.length} provinsi)
                          </p>
                          <p className="mt-1.5 text-xs leading-5 text-slate-500">
                            {clusterRegions
                              .map((region) => region.Provinsi)
                              .join(", ")}
                          </p>
                        </div>
                      ) : (
                        <span className="mb-3 inline-flex rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500 sm:hidden">
                          {item.wilayah}
                        </span>
                      )}
                      <div className="max-w-3xl text-sm leading-6 text-slate-600">
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
                    </div>
                  </div>
                </details>
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
