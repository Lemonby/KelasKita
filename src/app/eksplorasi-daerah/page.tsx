import { Metadata } from "next";
import EksplorasiWilayahPage from "@/components/sections/eksplorasi-wilayah/EksplorasiWilayahPage";

export const metadata: Metadata = {
  title: "Eksplorasi Daerah - KelasKita",
  description:
    "Bandingkan kondisi fasilitas pendidikan dan ketimpangan guru antar wilayah berdasarkan indikator terukur di seluruh Indonesia.",
};

export default function EksplorasiDaerah() {
  return <EksplorasiWilayahPage />;
}
