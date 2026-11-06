import { Metadata } from "next";
import BerandaPage from "@/components/sections/beranda/BerandaPage";

export const metadata: Metadata = {
  title: "Beranda - KelasKita",
  description: "Simplifikasi data pendidikan untuk keputusan yang lebih baik. Peta kesenjangan fasilitas dan guru 38 provinsi di Indonesia.",
};

export default function Beranda() {
  return <BerandaPage />;
}
