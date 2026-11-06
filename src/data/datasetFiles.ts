export const datasetFiles: Record<number, string> = {
  1: "sd/1-rasio-murid-guru-sd.xlsx",
  2: "sd/2-kondisi-ruang-kelas-rusak-berat-sd.xlsx",
  3: "sd/3-rasio-murid-rombel-sd.xlsx",
  4: "sd/4-jumlah-siswa-putus-sekolah-sd.xlsx",
  5: "sd/5-proporsi-sekolah-dengan-akses-ke-listrik-pada-jenjang-sd.xlsx",
  6: "sd/6-Jumlah Sekolah Dasar (SD) yang Memiliki Fasilitas Sanitasi Dasar_.xlsx",
  7: "sd/7-jumlah-satuan-pendidikan-sd-2024-sd-mi-sederajat.xlsx",
  8: "sd/8-ketersediaan-fasilitas-pendidikan-sd.xlsx",
  9: "sd/9-jumlah-peserta-didik-sd-2024-sd-mi-sederajat.xlsx",
  10: "smp/10-kondisi-ruang-kelas-rusak-berat-smp.xlsx",
  11: "smp/11-ketersediaan-fasilitas-pendidikan-smp.xlsx",
  12: "smp/12-proporsi-sekolah-dengan-akses-ke-listrik-pada-jenjang-smp.xlsx",
  13: "smp/13-Jumlah Sekolah Menengah Pertama (SMP) yang Memiliki Fasilitas Sanitasi Dasar_.xlsx",
  14: "sma/14-Jumlah Sekolah Menengah Atas (SMA) yang Memiliki Fasilitas Sanitasi Dasar_.xlsx",
  15: "sma/15-ketersediaan-fasilitas-pendidikan-sma.xlsx",
  16: "sma/16-proporsi-sekolah-dengan-akses-ke-listrik-pada-jenjang-sma.xlsx",
  17: "sma/17-kondisi-ruang-kelas-rusak-berat-sma.xlsx",
};

export function getDatasetFileUrl(id: number) {
  const filename = datasetFiles[id];
  return filename
    ? `/dataset_pendidikan_public/${filename
        .split("/")
        .map((part) => encodeURIComponent(part))
        .join("/")}`
    : undefined;
}
