import { eksplorasiData, rekomendasi, clusterData } from "./dummy";
import { provincesGeoData } from "./indonesiaGeoData";

export type ProvinceMapItem = {
  id: string;
  name: string;
  island: string;
  cluster: "Cluster 1" | "Cluster 2" | "Cluster 3";
  center: [number, number];
  polygons: [number, number][][];
  data: (typeof eksplorasiData.tabelData)[number];
  urgentIssues: string[];
};

function normalizeProvinceName(name: string) {
  return name
    .toLocaleLowerCase("id")
    .replace(/[^a-z0-9]/g, "")
    .replace(/daerahistimewa/g, "di")
    .replace(/kepulauan/g, "kep");
}

function getRecommendationIssues(
  provinceName: string,
  cluster: ProvinceMapItem["cluster"],
) {
  const recommendation =
    rekomendasi.find(
      (item) =>
        item.wilayah === provinceName && !item.title.startsWith("Cluster "),
    ) ??
    rekomendasi.find((item) => item.title.startsWith(cluster));

  if (!recommendation) {
    return ["Evaluasi indikator pendidikan secara berkala"];
  }

  if (recommendation.descriptionItems?.length) {
    return recommendation.descriptionItems
      .slice(0, 2)
      .map((item) => item.split(":")[0].trim());
  }

  return [recommendation.title];
}

export const berandaMapData: ProvinceMapItem[] = eksplorasiData.tabelData.map(
  (row) => {
    const geometry = provincesGeoData.find(
      (province) =>
        normalizeProvinceName(province.name) ===
        normalizeProvinceName(row.Provinsi),
    );
    const clusterEntry = clusterData.find(
      (item) =>
        normalizeProvinceName(item.Provinsi) ===
        normalizeProvinceName(row.Provinsi),
    );

    if (!geometry || !clusterEntry) {
      throw new Error(`Metadata peta tidak ditemukan untuk ${row.Provinsi}.`);
    }

    const cluster = clusterEntry.jenis as ProvinceMapItem["cluster"];

    return {
      id: normalizeProvinceName(row.Provinsi),
      name: row.Provinsi,
      island: geometry.island,
      cluster,
      center: geometry.center,
      polygons: geometry.polygons,
      data: row,
      urgentIssues: getRecommendationIssues(row.Provinsi, cluster),
    };
  },
);
