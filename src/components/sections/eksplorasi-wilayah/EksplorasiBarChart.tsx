"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

type IndikatorKey =
  | "Kelas Rusak Total(%)"
  | "Rasio Murid Guru"
  | "Rasio Murid Rombel"
  | "Angka Putus Sekolah";

type ChartDataItem = {
  Provinsi: string;
  value: number;
};

type EksplorasiBarChartProps = {
  data: ChartDataItem[];
  indikator: IndikatorKey;
};

const indikatorColors: Record<IndikatorKey, string> = {
  "Kelas Rusak Total(%)": "#F97316",
  "Rasio Murid Guru": "var(--token-color-primary)",
  "Rasio Murid Rombel": "#14B8A6",
  "Angka Putus Sekolah": "var(--token-color-accent)",
};

export default function EksplorasiBarChart({
  data,
  indikator,
}: EksplorasiBarChartProps) {
  const barColor = indikatorColors[indikator];
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return (
    <div
      className="w-full overflow-x-auto"
      role="region"
      aria-label={`Grafik ${indikator}`}
      tabIndex={0}
    >
      <div
        style={{
          width: `max(100%, ${Math.max(data.length * 38, 320)}px)`,
          height: 320,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 16, right: 20, left: 0, bottom: 58 }}
          >
            <XAxis
              dataKey="Provinsi"
              interval={0}
              angle={-35}
              textAnchor="end"
              height={72}
              tick={{ fontSize: 11 }}
            />
            <YAxis
              tickFormatter={(value: number | string) =>
                indikator === "Kelas Rusak Total(%)"
                  ? `${value}%`
                  : String(value)
              }
            />
            <Tooltip />
            <Bar
              key={indikator}
              dataKey="value"
              name={indikator}
              radius={[4, 4, 0, 0]}
              isAnimationActive={!reducedMotion}
              animationBegin={0}
              animationDuration={700}
              animationEasing="ease-out"
            >
              {data.map((entry) => (
                <Cell key={entry.Provinsi} fill={barColor} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
