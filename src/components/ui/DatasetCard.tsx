import Link from "next/link";
import { Calendar, Building2 } from "lucide-react";
import type { Dataset } from "@/data/dummy";

interface DatasetCardProps {
  dataset: Dataset;
}

function UrgencyBars({ level }: { level: "Tinggi" | "Sedang" | "Rendah" }) {
  const activeCount = level === "Tinggi" ? 3 : level === "Sedang" ? 2 : 1;

  return (
    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
      <div className="flex items-end gap-0.5">
        <span
          className={`w-1 rounded-xs ${
            activeCount >= 1 ? "h-2 bg-slate-700" : "h-2 bg-slate-300"
          }`}
        />
        <span
          className={`w-1 rounded-xs ${
            activeCount >= 2 ? "h-3 bg-slate-700" : "h-3 bg-slate-300"
          }`}
        />
        <span
          className={`w-1 rounded-xs ${
            activeCount >= 3 ? "h-4 bg-slate-700" : "h-4 bg-slate-300"
          }`}
        />
      </div>
      <span>{level}</span>
    </div>
  );
}

export default function DatasetCard({ dataset }: DatasetCardProps) {
  return (
    <Link
      href={`/dataset/${dataset.id}`}
      className="ui-card group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25"
    >
      <div>
        {/* Top bar: Format Pill + Urgency indicator */}
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-md bg-accent px-2.5 py-1 text-[11px] font-bold tracking-wide text-secondary">
            {dataset.format}
          </span>
          <UrgencyBars level={dataset.urgency} />
        </div>

        {/* Dataset Title */}
        <h3 className="mb-2 text-[17px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-primary">
          {dataset.title}
        </h3>

        {/* Dataset Description */}
        <p className="mb-5 text-[13px] leading-relaxed text-slate-500 line-clamp-3">
          {dataset.description}
        </p>

        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block rounded-full bg-[#EEF0FF] px-3.5 py-1 text-xs font-medium text-primary">
            {dataset.category}
          </span>
        </div>
      </div>

      {/* Meta Footer */}
      <div className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <Building2 size={14} className="shrink-0 text-slate-400" />
          <span className="truncate">{dataset.source}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={14} className="shrink-0 text-slate-400" />
          <span>{dataset.date}</span>
        </div>
      </div>
    </Link>
  );
}
