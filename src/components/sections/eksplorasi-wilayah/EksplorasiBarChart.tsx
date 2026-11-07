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

type IndikatorKey =
  | "Kelas Rusak Total"
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
  "Kelas Rusak Total": "#F97316",
  "Rasio Murid Guru": "var(--token-color-primary)",
  "Rasio Murid Rombel": "#14B8A6",
  "Angka Putus Sekolah": "var(--token-color-accent)",
};

export default function EksplorasiBarChart({
  data,
  indikator,
}: EksplorasiBarChartProps) {
  const barColor = indikatorColors[indikator];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="Provinsi" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" name={indikator} radius={[4, 4, 0, 0]}>
            {data.map((entry) => (
              <Cell key={entry.Provinsi} fill={barColor} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
