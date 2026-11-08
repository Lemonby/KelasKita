// Dummy data realistis untuk KelasKita

export const statsOverview = [
  { label: "Wilayah tercakup", value: "38", unit: "Provinsi" },
  { label: "Indikator dianalisis", value: "4", unit: "indikator" },
  {
    label: "Wilayah Prioritas tinggi",
    value: "10",
    unit: "Daerah",
    highlight: true,
  },
  { label: "Kelengkapan data", value: "92.3%", unit: "Dari total data" },
];

export const top5Prioritas = [
  { no: 1, wilayah: "Nusa Tenggara Timur", jenis: "Cluster 1", skor: 92 },
  { no: 2, wilayah: "Kalimantan Timur", jenis: "Cluster 1", skor: 89 },
  { no: 3, wilayah: "Maluku", jenis: "Cluster 2", skor: 86 },
  { no: 4, wilayah: "Sulawesi Utara", jenis: "Cluster 2", skor: 84 },
  { no: 5, wilayah: "Sulawesi Selatan", jenis: "Cluster 3", skor: 82 },
];

export const clusterData = [
  { no: 1, Provinsi: "Aceh", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 2, Provinsi: "Sumatera Utara", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 3, Provinsi: "Sumatera Barat", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 4, Provinsi: "Riau", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 5, Provinsi: "Jambi", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 6, Provinsi: "Sumatera Selatan", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 7, Provinsi: "Bengkulu", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 8, Provinsi: "Lampung", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 9, Provinsi: "Kep. Bangka Belitung", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 10, Provinsi: "Kepulauan Riau", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 11, Provinsi: "D.K.I. Jakarta", jenis: "Cluster 2", keterangan: "Perlu Perhatian" },
  { no: 12, Provinsi: "Jawa Barat", jenis: "Cluster 2", keterangan: "Perlu Perhatian" },
  { no: 13, Provinsi: "Jawa Tengah", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 14, Provinsi: "D.I. Yogyakarta", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 15, Provinsi: "Jawa Timur", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 16, Provinsi: "Banten", jenis: "Cluster 2", keterangan: "Perlu Perhatian" },
  { no: 17, Provinsi: "Bali", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 18, Provinsi: "Nusa Tenggara Barat", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 19, Provinsi: "Nusa Tenggara Timur", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 20, Provinsi: "Kalimantan Barat", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 21, Provinsi: "Kalimantan Tengah", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 22, Provinsi: "Kalimantan Selatan", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 23, Provinsi: "Kalimantan Timur", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 24, Provinsi: "Kalimantan Utara", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 25, Provinsi: "Sulawesi Utara", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 26, Provinsi: "Sulawesi Tengah", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 27, Provinsi: "Sulawesi Selatan", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 28, Provinsi: "Sulawesi Tenggara", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 29, Provinsi: "Gorontalo", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 30, Provinsi: "Sulawesi Barat", jenis: "Cluster 2", keterangan: "Perlu Perhatian" },
  { no: 31, Provinsi: "Maluku", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 32, Provinsi: "Maluku Utara", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 33, Provinsi: "Papua Barat", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 34, Provinsi: "Papua Barat Daya", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 35, Provinsi: "Papua", jenis: "Cluster 3", keterangan: "Relatif Baik" },
  { no: 36, Provinsi: "Papua Tengah", jenis: "Cluster 1", keterangan: "Kritis" },
  { no: 37, Provinsi: "Papua Selatan", jenis: "Cluster 2", keterangan: "Perlu Perhatian" },
  { no: 38, Provinsi: "Papua Pegunungan", jenis: "Cluster 1", keterangan: "Kritis" },
];

export type Dataset = {
  id: number | string;
  title: string;
  description: string;
  lavels: string;
  format: "CSV" | "XLSX" | "JSON";
  urgency: "Tinggi" | "Sedang" | "Rendah";
  category: string;
  source: string;
  date: string;
  createdDate?: string;
  updatedDate?: string;
  owner?: string;
  coverage?: string;
};

export const datasets: Dataset[] = [
  {
    id: 1,
    title: "rasio-murid-guru-sd",
    description:
      "Perbandingan jumlah peserta didik dengan rombongan belajar pada jenjang Sekolah Dasar (SD), menunjukkan rata-rata jumlah peserta didik SD dalam satu rombongan belajar",
    lavels: "SD",
    format: "XLSX",
    urgency: "Tinggi",
    category: "Civitas Akademik",
    source: "Portal Data Pendidikan",
    date: "8 Mei 2025",
    createdDate: "15 Oktober 2024",
    updatedDate: "8 Mei 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
  {
    id: 2,
    title: "kondisi-ruang-kelas-rusak-berat-sd",
    description:
      "Jumlah Ruang Kelas Sekolah Dasar (SD) Berdasarkan Wilayah, Kondisi, dan Status Satuan Pendidikan, Tahun Ajaran 2022-2023",
    lavels: "SD",
    format: "XLSX",
    urgency: "Tinggi",
    category: "Infrastruktur",
    source: "Portal Data Pendidikan",
    date: "8 Mei 2025",
    createdDate: "15 Oktober 2024",
    updatedDate: "8 Mei 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
  {
    id: 3,
    title: "rasio murid rombel sd",
    description:
      "Perbandingan jumlah peserta didik dengan rombongan belajar pada jenjang Sekolah Dasar (SD), menunjukkan rata-rata jumlah peserta didik SD dalam satu rombongan belajar",
    lavels: "SD",
    format: "XLSX",
    urgency: "Tinggi",
    category: "Tenaga Pendidik",
    source: "Portal Data Pendidikan",
    date: "8 Mei 2025",
    createdDate: "15 Oktober 2024",
    updatedDate: "8 Mei 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
  {
    id: 4,
    title: "Jumlah siswa putus sekolah di Sekolah Dasar",
    description:
      "Banyaknya peserta didik pada jenjang SD/sederajat yang tidak mampu menyelesaikan pendidikan atau dikeluarkan dari satuan pendidikan sehingga tidak dapat melanjutkan pendidikan ke jenjang berikutnya.",
    lavels: "SD",
    format: "JSON",
    urgency: "Sedang",
    category: "Kesejahteraan Siswa",
    source: "Portal Data Pendidikan",
    date: "2 April 2025",
    createdDate: "15 Oktober 2024",
    updatedDate: "2 April 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
  {
    id: 5,
    title: "Proporsi sekolah dengan akses ke listrik pada jenjang SD",
    description:
      "Perbandingan antara satuan pendidikan yang memiliki akses listrik, dengan seluruh satuan pendidikan, pada bentuk Sekolah Dasar (SD) di suatu wilayah pada waktu tertentu.",
    lavels: "SD",
    format: "XLSX",
    urgency: "Sedang",
    category: "Aksesibilitas",
    source: "Portal Data Pendidikan",
    date: "8 Mei 2025",
    createdDate: "15 Oktober 2024",
    updatedDate: "8 Mei 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
  {
    id: 6,
    title: "Jumlah sekolah dasar (SD) yang memiliki fasilitas sanitas dasar",
    description:
      "Banyaknya satuan pendidikan dengan bentuk Sekolah Sasar (SD) yang memiliki fasilitas sanitasi dasar per jenis kelamin, yaitu paling sedikit satu toilet laki-laki dan satu toilet perempuan, di suatu wilayah pada suatu waktu tertentu.",
    lavels: "SD",
    format: "XLSX",
    urgency: "Sedang",
    category: "Infrastruktur",
    source: "Portal Data Pendidikan",
    date: "8 Mei 2025",
    createdDate: "15 Oktober 2024",
    updatedDate: "8 Mei 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
  {
    id: 7,
    title: "Jumlah satuan pendidikan SD 2024 (SD/MI/Sederajat)",
    description:
      "Banyaknya satuan pendidikan dengan bentuk sekolah dasar (SD) dan satuan pendidikan kerja sama sekolah dasar (SPK SD) di suatu wilayah pada suatu waktu tertentu.",
    lavels: "SD",
    format: "XLSX",
    urgency: "Sedang",
    category: "Infrastruktur",
    source: "Portal Data Pendidikan",
    date: "8 Mei 2025",
    createdDate: "15 Oktober 2024",
    updatedDate: "8 Mei 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
  {
    id: 8,
    title: "Ketersediaan fasilitas pendidikan SD",
    description:
      "Status kepemilikan dan kondisi fasilitas satuan pendidikan berupa perpustakaan sekolah yang ada di Sekolah Dasar (SD)",
    lavels: "SD",
    format: "XLSX",
    urgency: "Sedang",
    category: "Infrastruktur",
    source: "Portal Data Pendidikan",
    date: "8 Mei 2025",
    createdDate: "15 Oktober 2024",
    updatedDate: "8 Mei 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
  {
    id: 9,
    title: "Jumlah Peseta Didik SD yang Memiliki Akses ke Fasilitas Pendidikan",
    description:
      "Banyaknya peserta didik pada jenjang Sekolah Dasar (SD) yang memiliki akses ke fasilitas pendidikan, di suatu wilayah pada suatu waktu tertentu.",
    lavels: "SD",
    format: "XLSX",
    urgency: "Sedang",
    category: "Infrastruktur",
    source: "Portal Data Pendidikan",
    date: "8 Mei 2025",
    createdDate: "15 Oktober 2024",
    updatedDate: "8 Mei 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
  {
    id: 10,
    title: "Kondisi ruang kelas rusak berat SMP",
    description:
      "Banyaknya satuan pendidikan dengan bentuk Sekolah Menengah Pertama (SMP) yang memiliki ruang kelas yang rusak berat, di suatu wilayah pada suatu waktu tertentu.",
    lavels: "SMP",
    format: "XLSX",
    urgency: "Sedang",
    category: "Infrastruktur",
    source: "Portal Data Pendidikan",
    date: "8 Mei 2025",
    createdDate: "15 Oktober 2024",
    updatedDate: "8 Mei 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
  {
    id: 11,
    title: "Ketersediaan fasilitas pendidikan SMP",
    description:
      "Status kepemilikan dan kondisi fasilitas satuan pendidikan berupa perpustakaan sekolah yang ada di Sekolah Menengah Pertama (SMP)",
    lavels: "SMP",
    format: "XLSX",
    urgency: "Sedang",
    category: "Infrastruktur",
    source: "Portal Data Pendidikan",
    date: "8 Mei 2025",
    createdDate: "15 Oktober 2024",
    updatedDate: "8 Mei 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
  {
    id: 12,
    title: "Proporsi sekolah dengan akses ke listrik pada jenjang SMP",
    description:
      "Banyaknya satuan pendidikan Sekolah Menengah Pertama (SMP) yang memiliki akses listrik, di suatu wilayah pada suatu waktu tertentu.",
    lavels: "SMP",
    format: "XLSX",
    urgency: "Sedang",
    category: "Infrastruktur",
    source: "Portal Data Pendidikan",
    date: "8 Mei 2025",
    createdDate: "15 Oktober 2024",
    updatedDate: "8 Mei 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
  {
    id: 13,
    title: "Jumlah Sekolah Menengah Pertama (SMP) yang Memiliki Fasilitas Sanitasi Dasar",
    description:
      "Banyaknya satuan pendidikan dengan bentuk Sekolah Menengah Pertama (SMP) yang memiliki fasilitas sanitasi dasar per jenis kelamin, yaitu paling sedikit satu toilet laki-laki dan satu toilet perempuan, di suatu wilayah pada suatu waktu tertentu.",
    lavels: "SMP",
    format: "XLSX",
    urgency: "Sedang",
    category: "Infrastruktur",
    source: "Portal Data Pendidikan",
    date: "8 Mei 2025",
    createdDate: "15 Oktober 2024",
    updatedDate: "8 Mei 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
  {
    id: 14,
    title: "Jumlah sekolah menengah atas (SMA) yang memiliki kondisi ruang kelas rusak berat",
    description:
      "Banyaknya ruang kelas di satuan pendidikan pada bentuk pendidikan Sekolah Menengah Atas (SMA) dan Satuan Pendidikan Kerja Sama Sekolah Menengah Atas (SPK SMA), di suatu wilayah pada waktu tertentu.",
    lavels: "SMA",
    format: "XLSX",
    urgency: "Sedang",
    category: "Infrastruktur",
    source: "Portal Data Pendidikan",
    date: "8 Mei 2025",
    createdDate: "15 Oktober 2024",
    updatedDate: "8 Mei 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
  {
    id: 15,
    title: "Ketersediaan fasilitas pendidikan SMA",
    description:
      "Status kepemilikan dan kondisi fasilitas satuan pendidikan berupa perpustakaan sekolah yang ada di Sekolah Menengah Atas (SMA)",
    lavels: "SMA",
    format: "XLSX",
    urgency: "Sedang",
    category: "Infrastruktur",
    source: "Portal Data Pendidikan",
    date: "8 Mei 2025",
    createdDate: "15 Oktober 2024",
    updatedDate: "8 Mei 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
  {
    id: 16,
    title: "Proporsi sekolah menengah atas (SMA) yang memiliki akses ke listrik",
    description:
      "Perbandingan antara satuan pendidikan yang memiliki akses listrik, dengan seluruh satuan pendidikan, pada bentuk Sekolah Menengah Atas (SMA) di suatu wilayah pada waktu tertentu.",
    lavels: "SMA",
    format: "XLSX",
    urgency: "Sedang",
    category: "Infrastruktur",
    source: "Portal Data Pendidikan",
    date: "8 Mei 2025",
    createdDate: "15 Oktober 2024",
    updatedDate: "8 Mei 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
  {
    id: 17,
    title: "Jumlah Sekolah Menengah Atas (SMA) yang Memiliki Fasilitas Sanitasi Dasar",
    description:
      "Banyaknya satuan pendidikan dengan bentuk Sekolah Menengah Atas (SMA) yang memiliki fasilitas sanitasi dasar per jenis kelamin, yaitu paling sedikit satu toilet laki-laki dan satu toilet perempuan, di suatu wilayah pada suatu waktu tertentu.",
    lavels: "SMA",
    format: "XLSX",
    urgency: "Sedang",
    category: "Infrastruktur",
    source: "Portal Data Pendidikan",
    date: "8 Mei 2025",
    createdDate: "7 Februari 2025",
    updatedDate: "8 Mei 2025",
    owner: "Kemendikdasmen",
    coverage: "514 kabupaten dan kota",
  },
];

// Ga dipakai lagi
export const datasetPreviewData = [
  {
    no: 1,
    kabupaten: "Intan Jaya",
    provinsi: "Papua Tengah",
    totalRuangKelas: 386,
    rusakBerat: 142,
    persenRusakBerat: "36,8%",
    skor: 88,
  },
  {
    no: 2,
    kabupaten: "Maluku Barat Daya",
    provinsi: "Maluku",
    totalRuangKelas: 523,
    rusakBerat: 171,
    persenRusakBerat: "32,7%",
    skor: 82,
  },
  {
    no: 3,
    kabupaten: "Sumba Tengah",
    provinsi: "Nusa Tenggara Timur",
    totalRuangKelas: 640,
    rusakBerat: 188,
    persenRusakBerat: "29,4%",
    skor: 76,
  },
  {
    no: 4,
    kabupaten: "Mahakam Ulu",
    provinsi: "Kalimantan Timur",
    totalRuangKelas: 298,
    rusakBerat: 71,
    persenRusakBerat: "23,8%",
    skor: 61,
  },
  {
    no: 5,
    kabupaten: "Aceh Singkil",
    provinsi: "Aceh",
    totalRuangKelas: 702,
    rusakBerat: 119,
    persenRusakBerat: "17,0%",
    skor: 48,
  },
  {
    no: 6,
    kabupaten: "Lebak",
    provinsi: "Banten",
    totalRuangKelas: 2314,
    rusakBerat: 301,
    persenRusakBerat: "13,0%",
    skor: 44,
  },
  {
    no: 7,
    kabupaten: "Sabang",
    provinsi: "Aceh",
    totalRuangKelas: 207,
    rusakBerat: 14,
    persenRusakBerat: "6,8%",
    skor: 22,
  },
  {
    no: 8,
    kabupaten: "Kota Bandung",
    provinsi: "Jawa Barat",
    totalRuangKelas: 6180,
    rusakBerat: 205,
    persenRusakBerat: "3,3%",
    skor: 12,
  },
];

export const insights = [
  {
    icon: "users" as const,
    title: "Ketimpangan guru/murid di Kalimantan Timur",
    description:
      "Sebanyak 80% sekolah di Nusa Tenggara Timur masih kekurangan fasilitas dasar tertinggi dibandingkan daerah lain.",
    category: "Kualitas",
  },
  {
    icon: "building" as const,
    title: "Kesenjangan fasilitas tertinggi di Nusa Tenggara Timur",
    description:
      "Sebanyak 80% sekolah di Nusa Tenggara Timur masih kekurangan fasilitas dasar tertinggi dibandingkan daerah lain.",
    category: "Fasilitas",
  },
  {
    icon: "building" as const,
    title: "Provinsi yang memiliki persentase ruang kelas rusak paling tinggi, dan kondisi indikator kapasitas pendidikannya",
    description:
      "Sulawesi Barat memiliki persentase kerusakan ruang kelas sekitar 6,6 kali lebih tinggi dibandingkan D.I. Yogyakarta yang memiliki nilai terendah, yaitu 3,17%. Menariknya, kelima provinsi tersebut tidak memiliki rasio murid-guru yang sangat tinggi. Nilainya hanya berkisar 12–14 murid per guru. Artinya, permasalahan infrastruktur fisik tidak selalu berjalan beriringan dengan tingginya beban guru.",
      category: "Fasilitas",
  },
  {
    icon: "building" as const,
    title: "Hubungan antara kerusakan ruang kelas dengan angka putus sekolah",
    description:
      "Hasil korelasi Pearson 0,012 Hubungan linear sangat lemah. Berdasarkan data ini, tidak ditemukan hubungan linear yang berarti antara persentase ruang kelas rusak dan jumlah siswa putus sekolah.",
    category: "Fasilitas",
  },
  {
    icon: "graduation" as const,
    title: "Provinsi yang memiliki rasio murid-guru paling tinggi",
    description:
      "Papua Tengah dan Papua Pegunungan menunjukkan tekanan kapasitas yang menonjol pada dua indikator sekaligus. Artinya, tingginya rasio murid-guru di kedua provinsi tersebut juga diikuti rasio murid-rombel yang tinggi. Namun, Jawa Barat dan Banten menunjukkan pola berbeda: rasio murid-gurunya tinggi, tetapi jumlah murid per rombongan belajar juga mencapai 27. Ini menunjukkan bahwa tantangan kapasitas pendidikan tidak hanya ditemukan di wilayah timur Indonesia, tetapi juga di provinsi dengan jumlah penduduk besar di Pulau Jawa.",
    category: "Partisipasi",
  },
  {
    icon: "graduation" as const,
    title: "perbandingan rata-rata beban guru berdasarkan rasio murid-guru antara provinsi di Pulau Jawa dan Pulau Papua",
    description:
      "Rata-rata rasio murid-guru di enam provinsi Pulau Papua sekitar 6,33 poin lebih tinggi daripada Pulau Jawa. Secara relatif, angka tersebut sekitar 33,6% lebih tinggi. Perbedaan ini menunjukkan adanya indikasi ketimpangan kapasitas guru antara kedua kelompok wilayah. Namun, hasil ini masih merupakan perbandingan deskriptif. Kita belum dapat menyatakan bahwa perbedaannya signifikan secara statistik atau menyimpulkan penyebabnya.",
    category: "Partisipasi",
  },
];

export const rekomendasi = [
  {
    icon: "building" as const,
    title:
      "Prioritaskan verifikasi kondisi fasilitas sekolah di Nusa Tenggara Timur",
    description:
      "Lakukan survei lapangan untuk memvalidasi data kekurangan fasilitas dan identifikasi jenis fasilitas yang paling dibutuhkan.",
    category: "Fasilitas",
    wilayah: "Nusa Tenggara Timur",
  },
  {
    icon: "arrowRight" as const,
    title: "Tingkatkan program akses pendidikan menengah di Maluku",
    description:
      "Pertimbangkan bantuan transportasi, beasiswa, atau penambahan sekolah menengah di wilayah dengan akses terbatas.",
    category: "Fasilitas",
    wilayah: "Maluku",
  },
  {
    icon: "userCheck" as const,
    title: "Lanjutkan program peningkatan partisipasi sekolah di Aceh",
    description:
      "Pertimbangkan bantuan transportasi, beasiswa, atau penambahan sekolah menengah di wilayah dengan akses terbatas.",
    category: "SDM",
    wilayah: "Aceh",
  },
  {
    icon: "users" as const,
    title: "Perkuat distribusi guru di Kalimantan Timur",
    description:
      "Evaluasi kebutuhan guru dan pertimbangkan insentif untuk daerah dengan rasio guru/murid tinggi.",
    category: "SDM",
    wilayah: "Kalimantan Timur",
  },
  {
    icon: "users" as const,
    title: "Cluster 1 — Kritis",
    description:
      "Provinsi yang memiliki setidaknya dua dari tiga indikator pendidikan yang melewati ambang batas. Provinsi dalam Cluster 1 menghadapi beberapa jenis permasalahan pendidikan secara bersamaan. Artinya, penanganannya mungkin membutuhkan lebih dari satu jenis intervensi.",
    descriptionItems: [
     "Evaluasi distribusi guru: Identifikasi sekolah yang memiliki rasio murid-guru tinggi dan periksa kebutuhan guru berdasarkan jumlah siswa serta kondisi pembelajaran.",
     "Redistribusi tenaga pendidik: Pertimbangkan penempatan atau redistribusi guru berdasarkan kebutuhan aktual sekolah.",
     "Evaluasi kapasitas ruang belajar: Identifikasi sekolah dengan jumlah murid per rombongan belajar tinggi.",
     "Penyesuaian rombongan belajar: Kaji kebutuhan penambahan rombel atau ruang kelas jika kapasitas sekolah tidak memadai.",
     "Monitoring kapasitas pendidikan: Pantau perubahan rasio murid-guru dan murid-rombel secara berkala."
    ],
    category: "SDM",
    wilayah: "Kalimantan Timur",
  },
  {
    icon: "users" as const,
    title: "Cluster 2 — Perlu Perhatian",
    description:
      "Provinsi yang hanya memiliki satu indikator pendidikan melewati ambang batas.",
    descriptionItems: [
      "Penanganan infrastruktur: Sulawesi Barat perlu diprioritaskan untuk pemeriksaan kondisi bangunan dan rehabilitasi ruang kelas yang mengalami kerusakan.",
      "Evaluasi kepadatan kelas: D.K.I. Jakarta, Jawa Barat, dan Banten perlu mengidentifikasi sekolah dengan jumlah murid per rombongan belajar yang tinggi.",
      "Evaluasi kebutuhan guru: Papua Selatan perlu memeriksa distribusi dan kebutuhan guru pada sekolah-sekolah yang memiliki rasio murid-guru tinggi.",
      "Pencegahan peningkatan masalah: Lakukan monitoring indikator secara berkala untuk mengidentifikasi perubahan kondisi.",
      "Intervensi berbasis sekolah: Hindari memberikan program yang sama kepada seluruh provinsi dalam cluster ini karena jenis masalahnya berbeda."
    ],
    category: "SDM",
    wilayah: "Kalimantan Timur",
  },
  {
    icon: "users" as const,
    title: "Cluster 3 — Relatif Baik",
    description:
      "Evaluasi kebutuhan guru dan pertimbangkan insentif untuk daerah dengan rasio guru/murid tinggi.",
    descriptionItems: [
      "Pemeliharaan fasilitas: Melakukan pemeriksaan dan pemeliharaan ruang kelas secara rutin untuk mencegah kerusakan.",
      "Monitoring kapasitas guru: Memastikan distribusi guru tetap sesuai dengan kebutuhan sekolah.",
      "Pengawasan kapasitas rombel: Memantau perkembangan jumlah siswa dan rombongan belajar.",
      "Pencegahan kerusakan: Melakukan perawatan preventif terhadap fasilitas pendidikan.",
      "Evaluasi berkala: Memperbarui data indikator untuk mengetahui apakah suatu provinsi mengalami perubahan kategori."
    ],
    category: "SDM",
    wilayah: "Kalimantan Timur",
  },
];

export const eksplorasiData = {
  chartData: [
    { name: "NTT", value: 85, color: "#6366f1" },
    { name: "Maluku", value: 72, color: "#a3e635" },
    { name: "Kalimantan Timur", value: 68, color: "#6366f1" },
  ],
  tabelData: [
    {
      "No": 1,
      "Kode Kemdagri": 11,
      "Kode BPS": 11,
      "Provinsi": "Aceh",
      "Kelas Rusak Total": 8.815679097079235,
      "Rasio Murid Guru": 11,
      "Rasio Murid Rombel": 19,
      "Angka Putus Sekolah": 1060,
      "Perankingan (Nilai Akhir V)": 0.3801174984901692
    },
    {
      "No": 2,
      "Kode Kemdagri": 12,
      "Kode BPS": 12,
      "Provinsi": "Sumatera Utara",
      "Kelas Rusak Total": 9.038223439846158,
      "Rasio Murid Guru": 15,
      "Rasio Murid Rombel": 21,
      "Angka Putus Sekolah": 3767,
      "Perankingan (Nilai Akhir V)": 0.552933140807849
    },
    {
      "No": 3,
      "Kode Kemdagri": 13,
      "Kode BPS": 13,
      "Provinsi": "Sumatera Barat",
      "Kelas Rusak Total": 9.340988674721599,
      "Rasio Murid Guru": 14,
      "Rasio Murid Rombel": 19,
      "Angka Putus Sekolah": 778,
      "Perankingan (Nilai Akhir V)": 0.39229882468295224
    },
    {
      "No": 4,
      "Kode Kemdagri": 14,
      "Kode BPS": 14,
      "Provinsi": "Riau",
      "Kelas Rusak Total": 8.831453355833851,
      "Rasio Murid Guru": 16,
      "Rasio Murid Rombel": 22,
      "Angka Putus Sekolah": 1051,
      "Perankingan (Nilai Akhir V)": 0.4361254188664641
    },
    {
      "No": 5,
      "Kode Kemdagri": 15,
      "Kode BPS": 15,
      "Provinsi": "Jambi",
      "Kelas Rusak Total": 9.545406039910361,
      "Rasio Murid Guru": 15,
      "Rasio Murid Rombel": 20,
      "Angka Putus Sekolah": 664,
      "Perankingan (Nilai Akhir V)": 0.4038282275316245
    },
    {
      "No": 6,
      "Kode Kemdagri": 16,
      "Kode BPS": 16,
      "Provinsi": "Sumatera Selatan",
      "Kelas Rusak Total": 8.394929953302203,
      "Rasio Murid Guru": 16,
      "Rasio Murid Rombel": 22,
      "Angka Putus Sekolah": 1887,
      "Perankingan (Nilai Akhir V)": 0.47051443585256975
    },
    {
      "No": 7,
      "Kode Kemdagri": 17,
      "Kode BPS": 17,
      "Provinsi": "Bengkulu",
      "Kelas Rusak Total": 5.520702634880803,
      "Rasio Murid Guru": 13,
      "Rasio Murid Rombel": 19,
      "Angka Putus Sekolah": 286,
      "Perankingan (Nilai Akhir V)": 0.31657341935575023
    },
    {
      "No": 8,
      "Kode Kemdagri": 18,
      "Kode BPS": 18,
      "Provinsi": "Lampung",
      "Kelas Rusak Total": 9.81578593518892,
      "Rasio Murid Guru": 15,
      "Rasio Murid Rombel": 21,
      "Angka Putus Sekolah": 849,
      "Perankingan (Nilai Akhir V)": 0.4239200371931664
    },
    {
      "No": 9,
      "Kode Kemdagri": 19,
      "Kode BPS": 19,
      "Provinsi": "Kep. Bangka Belitung",
      "Kelas Rusak Total": 12.384243261921217,
      "Rasio Murid Guru": 18,
      "Rasio Murid Rombel": 24,
      "Angka Putus Sekolah": 231,
      "Perankingan (Nilai Akhir V)": 0.46895481459930954
    },
    {
      "No": 10,
      "Kode Kemdagri": 21,
      "Kode BPS": 21,
      "Provinsi": "Kepulauan Riau",
      "Kelas Rusak Total": 4.645773559920547,
      "Rasio Murid Guru": 17,
      "Rasio Murid Rombel": 23,
      "Angka Putus Sekolah": 271,
      "Perankingan (Nilai Akhir V)": 0.36322978363171815
    },
    {
      "No": 11,
      "Kode Kemdagri": 31,
      "Kode BPS": 31,
      "Provinsi": "D.K.I. Jakarta",
      "Kelas Rusak Total": 1.0539854943013327,
      "Rasio Murid Guru": 20,
      "Rasio Murid Rombel": 27,
      "Angka Putus Sekolah": 815,
      "Perankingan (Nilai Akhir V)": 0.3972813382136567
    },
    {
      "No": 12,
      "Kode Kemdagri": 32,
      "Kode BPS": 32,
      "Provinsi": "Jawa Barat",
      "Kelas Rusak Total": 7.724051135987282,
      "Rasio Murid Guru": 23,
      "Rasio Murid Rombel": 27,
      "Angka Putus Sekolah": 5272,
      "Perankingan (Nilai Akhir V)": 0.7081513500771235
    },
    {
      "No": 13,
      "Kode Kemdagri": 33,
      "Kode BPS": 33,
      "Provinsi": "Jawa Tengah",
      "Kelas Rusak Total": 8.055963421406997,
      "Rasio Murid Guru": 17,
      "Rasio Murid Rombel": 21,
      "Angka Putus Sekolah": 2212,
      "Perankingan (Nilai Akhir V)": 0.4801916833848938
    },
    {
      "No": 14,
      "Kode Kemdagri": 34,
      "Kode BPS": 34,
      "Provinsi": "D.I. Yogyakarta",
      "Kelas Rusak Total": 3.1698271639493387,
      "Rasio Murid Guru": 15,
      "Rasio Murid Rombel": 20,
      "Angka Putus Sekolah": 99,
      "Perankingan (Nilai Akhir V)": 0.3002936276063672
    },
    {
      "No": 15,
      "Kode Kemdagri": 35,
      "Kode BPS": 35,
      "Provinsi": "Jawa Timur",
      "Kelas Rusak Total": 8.161344732479604,
      "Rasio Murid Guru": 15,
      "Rasio Murid Rombel": 19,
      "Angka Putus Sekolah": 2654,
      "Perankingan (Nilai Akhir V)": 0.47347038861166457
    },
    {
      "No": 16,
      "Kode Kemdagri": 36,
      "Kode BPS": 36,
      "Provinsi": "Banten",
      "Kelas Rusak Total": 6.924826879328016,
      "Rasio Murid Guru": 23,
      "Rasio Murid Rombel": 27,
      "Angka Putus Sekolah": 1397,
      "Perankingan (Nilai Akhir V)": 0.5147773857872677
    },
    {
      "No": 17,
      "Kode Kemdagri": 51,
      "Kode BPS": 51,
      "Provinsi": "Bali",
      "Kelas Rusak Total": 5.5896348105257125,
      "Rasio Murid Guru": 16,
      "Rasio Murid Rombel": 22,
      "Angka Putus Sekolah": 168,
      "Perankingan (Nilai Akhir V)": 0.35523186626858466
    },
    {
      "No": 18,
      "Kode Kemdagri": 52,
      "Kode BPS": 52,
      "Provinsi": "Nusa Tenggara Barat",
      "Kelas Rusak Total": 7.929241299613316,
      "Rasio Murid Guru": 13,
      "Rasio Murid Rombel": 22,
      "Angka Putus Sekolah": 1093,
      "Perankingan (Nilai Akhir V)": 0.4080264806687437
    },
    {
      "No": 19,
      "Kode Kemdagri": 53,
      "Kode BPS": 53,
      "Provinsi": "Nusa Tenggara Timur",
      "Kelas Rusak Total": 13.210502759958228,
      "Rasio Murid Guru": 14,
      "Rasio Murid Rombel": 18,
      "Angka Putus Sekolah": 3463,
      "Perankingan (Nilai Akhir V)": 0.5581348019134318
    },
    {
      "No": 20,
      "Kode Kemdagri": 61,
      "Kode BPS": 61,
      "Provinsi": "Kalimantan Barat",
      "Kelas Rusak Total": 10.87557910875579,
      "Rasio Murid Guru": 16,
      "Rasio Murid Rombel": 18,
      "Angka Putus Sekolah": 1092,
      "Perankingan (Nilai Akhir V)": 0.43041649515385394
    },
    {
      "No": 21,
      "Kode Kemdagri": 62,
      "Kode BPS": 62,
      "Provinsi": "Kalimantan Tengah",
      "Kelas Rusak Total": 10.293626960293627,
      "Rasio Murid Guru": 12,
      "Rasio Murid Rombel": 16,
      "Angka Putus Sekolah": 549,
      "Perankingan (Nilai Akhir V)": 0.3558923047504602
    },
    {
      "No": 22,
      "Kode Kemdagri": 63,
      "Kode BPS": 63,
      "Provinsi": "Kalimantan Selatan",
      "Kelas Rusak Total": 5.893375808113932,
      "Rasio Murid Guru": 13,
      "Rasio Murid Rombel": 17,
      "Angka Putus Sekolah": 534,
      "Perankingan (Nilai Akhir V)": 0.31669045411022817
    },
    {
      "No": 23,
      "Kode Kemdagri": 64,
      "Kode BPS": 64,
      "Provinsi": "Kalimantan Timur",
      "Kelas Rusak Total": 6.671327856435355,
      "Rasio Murid Guru": 17,
      "Rasio Murid Rombel": 22,
      "Angka Putus Sekolah": 639,
      "Perankingan (Nilai Akhir V)": 0.396997314981985
    },
    {
      "No": 24,
      "Kode Kemdagri": 65,
      "Kode BPS": 65,
      "Provinsi": "Kalimantan Utara",
      "Kelas Rusak Total": 10.256410256410255,
      "Rasio Murid Guru": 14,
      "Rasio Murid Rombel": 19,
      "Angka Putus Sekolah": 162,
      "Perankingan (Nilai Akhir V)": 0.37410672356844377
    },
    {
      "No": 25,
      "Kode Kemdagri": 71,
      "Kode BPS": 71,
      "Provinsi": "Sulawesi Utara",
      "Kelas Rusak Total": 10.463226330759854,
      "Rasio Murid Guru": 13,
      "Rasio Murid Rombel": 15,
      "Angka Putus Sekolah": 469,
      "Perankingan (Nilai Akhir V)": 0.3524858664846315
    },
    {
      "No": 26,
      "Kode Kemdagri": 72,
      "Kode BPS": 72,
      "Provinsi": "Sulawesi Tengah",
      "Kelas Rusak Total": 11.587397758255074,
      "Rasio Murid Guru": 13,
      "Rasio Murid Rombel": 16,
      "Angka Putus Sekolah": 1013,
      "Perankingan (Nilai Akhir V)": 0.3998785666916429
    },
    {
      "No": 27,
      "Kode Kemdagri": 73,
      "Kode BPS": 73,
      "Provinsi": "Sulawesi Selatan",
      "Kelas Rusak Total": 11.182941795231418,
      "Rasio Murid Guru": 14,
      "Rasio Murid Rombel": 19,
      "Angka Putus Sekolah": 1811,
      "Perankingan (Nilai Akhir V)": 0.4634554078787016
    },
    {
      "No": 28,
      "Kode Kemdagri": 74,
      "Kode BPS": 74,
      "Provinsi": "Sulawesi Tenggara",
      "Kelas Rusak Total": 13.199158906578552,
      "Rasio Murid Guru": 13,
      "Rasio Murid Rombel": 18,
      "Angka Putus Sekolah": 730,
      "Perankingan (Nilai Akhir V)": 0.4219882284594002
    },
    {
      "No": 29,
      "Kode Kemdagri": 75,
      "Kode BPS": 75,
      "Provinsi": "Gorontalo",
      "Kelas Rusak Total": 7.240024183796856,
      "Rasio Murid Guru": 14,
      "Rasio Murid Rombel": 18,
      "Angka Putus Sekolah": 518,
      "Perankingan (Nilai Akhir V)": 0.3466159532727657
    },
    {
      "No": 30,
      "Kode Kemdagri": 76,
      "Kode BPS": 76,
      "Provinsi": "Sulawesi Barat",
      "Kelas Rusak Total": 20.76949267960504,
      "Rasio Murid Guru": 12,
      "Rasio Murid Rombel": 16,
      "Angka Putus Sekolah": 402,
      "Perankingan (Nilai Akhir V)": 0.47501830919093146
    },
    {
      "No": 31,
      "Kode Kemdagri": 81,
      "Kode BPS": 81,
      "Provinsi": "Maluku",
      "Kelas Rusak Total": 13.771722281145468,
      "Rasio Murid Guru": 13,
      "Rasio Murid Rombel": 18,
      "Angka Putus Sekolah": 654,
      "Perankingan (Nilai Akhir V)": 0.42527616272329294
    },
    {
      "No": 32,
      "Kode Kemdagri": 82,
      "Kode BPS": 82,
      "Provinsi": "Maluku Utara",
      "Kelas Rusak Total": 13.80350307388934,
      "Rasio Murid Guru": 13,
      "Rasio Murid Rombel": 17,
      "Angka Putus Sekolah": 534,
      "Perankingan (Nilai Akhir V)": 0.4119037482888444
    },
    {
      "No": 33,
      "Kode Kemdagri": 92,
      "Kode BPS": 91,
      "Provinsi": "Papua Barat",
      "Kelas Rusak Total": 7.341907824222938,
      "Rasio Murid Guru": 17,
      "Rasio Murid Rombel": 18,
      "Angka Putus Sekolah": 272,
      "Perankingan (Nilai Akhir V)": 0.3554076820673474
    },
    {
      "No": 34,
      "Kode Kemdagri": 96,
      "Kode BPS": 92,
      "Provinsi": "Papua Barat Daya",
      "Kelas Rusak Total": 9.311402286032896,
      "Rasio Murid Guru": 13,
      "Rasio Murid Rombel": 15,
      "Angka Putus Sekolah": 312,
      "Perankingan (Nilai Akhir V)": 0.3311765002220362
    },
    {
      "No": 35,
      "Kode Kemdagri": 91,
      "Kode BPS": 94,
      "Provinsi": "Papua",
      "Kelas Rusak Total": 12.439945092656144,
      "Rasio Murid Guru": 18,
      "Rasio Murid Rombel": 18,
      "Angka Putus Sekolah": 503,
      "Perankingan (Nilai Akhir V)": 0.4341365251739078
    },
    {
      "No": 36,
      "Kode Kemdagri": 94,
      "Kode BPS": 96,
      "Provinsi": "Papua Tengah",
      "Kelas Rusak Total": 6.176538372896981,
      "Rasio Murid Guru": 39,
      "Rasio Murid Rombel": 31,
      "Angka Putus Sekolah": 856,
      "Perankingan (Nilai Akhir V)": 0.6149380893777816
    },
    {
      "No": 37,
      "Kode Kemdagri": 93,
      "Kode BPS": 95,
      "Provinsi": "Papua Selatan",
      "Kelas Rusak Total": 10.865609565895502,
      "Rasio Murid Guru": 26,
      "Rasio Murid Rombel": 22,
      "Angka Putus Sekolah": 774,
      "Perankingan (Nilai Akhir V)": 0.5115774553683339
    },
    {
      "No": 38,
      "Kode Kemdagri": 95,
      "Kode BPS": 97,
      "Provinsi": "Papua Pegunungan",
      "Kelas Rusak Total": 11.517137096774194,
      "Rasio Murid Guru": 38,
      "Rasio Murid Rombel": 28,
      "Angka Putus Sekolah": 709,
      "Perankingan (Nilai Akhir V)": 0.641647669489792
    }
  ]
};

export const faqData = [
  {
    id: 1,
    question: "Apa itu KelasKita dan apa tujuan utamanya?",
    answer:
      "KelasKita adalah platform Sistem Pendukung Keputusan Berbasis Data (Data-Driven Decision Support System) yang dirancang untuk menyederhanakan data pendidikan, memetakan kesenjangan fasilitas dan tenaga pendidik antardaerah, serta memberikan rekomendasi tindakan terukur agar alokasi bantuan pendidikan lebih adil dan tepat sasaran.",
  },
  {
    id: 2,
    question: "Dari mana sumber data yang digunakan oleh KelasKita?",
    answer:
      "Data yang dihimpun berasal dari portal data terbuka resmi pemerintah Republik Indonesia, termasuk Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen), Kementerian Komunikasi dan Digital (Komdigi), Data.go.id, dan Satu Data Indonesia yang diperbarui secara berkala.",
  },
  {
    id: 3,
    question: "Bagaimana cara KelasKita menentukan prioritas wilayah penanganan?",
    answer:
      "Sistem menghitung skor prioritas melalui algoritma klasterisasi berbasis indikator terbobot, seperti persentase ruang kelas rusak berat, rasio ketimpangan guru-murid, ketersediaan akses internet/digital, serta kapasitas anggaran pendidikan daerah.",
  },
  {
    id: 4,
    question: "Apakah rekomendasi tindakan bersifat mutlak atau keputusan final?",
    answer:
      "Tidak. Rekomendasi tindakan yang disajikan bersifat sebagai sistem pendukung keputusan (decision support) yang transparan dan dapat ditelusuri perhitungannya untuk membantu para perencana, analis, dan pejabat pengambil kebijakan merumuskan intervensi yang tepat.",
  },
  {
    id: 5,
    question: "Siapa saja yang dapat menggunakan platform KelasKita?",
    answer:
      "KelasKita terbuka untuk digunakan oleh pembuat kebijakan pendidikan, dinas pendidikan daerah, peneliti, akademisi, jurnalis data, organisasi masyarakat sipil, hingga masyarakat umum yang peduli terhadap pemerataan kualitas pendidikan nasional.",
  },
  {
    id: 6,
    question: "Apa yang membedakan antara Cluster 1 dan yang lainnya?",
    answer:
      "Pengelompokan ditentukan secara rule-based berdasarkan tiga ambang batas: kelas rusak total ≥ 20%, rasio murid-guru ≥ 25, dan rasio murid-rombel ≥ 25. Cluster 1 (Kritis) memiliki minimal dua indikator yang melewati ambang batas sehingga memerlukan beberapa jenis intervensi. Cluster 2 (Perlu Perhatian) hanya memiliki satu indikator yang melewati ambang batas sehingga membutuhkan penanganan khusus pada indikator tersebut. Cluster 3 (Relatif Baik) tidak memiliki indikator yang melewati ambang batas, tetapi tetap perlu dipantau dan dipelihara. Jadi, cluster ditentukan berdasarkan jumlah masalah, bukan nama atau lokasi provinsi.",
  },
  {
    id: 7,
    question: "Bagaimana cara menggunakan fitur Eksplorasi Daerah?",
    answer:
      "Masukkan nama daerah pada kolom pencarian di halaman Eksplorasi Daerah, lalu pilih indikator yang ingin dibandingkan. Sistem akan menampilkan perbandingan visual, grafik indikator, dan insight otomatis dari daerah yang dipilih.",
  },
  {
    id: 8,
    question: "Apakah data ini bisa diunduh?",
    answer:
      "Ya, setiap dataset yang tersedia pada halaman Dataset dapat diunduh secara gratis dalam format CSV, XLSX, atau JSON sesuai kebutuhan analisis Anda.",
  },
];

export const footerLinks = {
  jelajahi: [
    { label: "Overview", href: "/beranda" },
    { label: "Dataset", href: "/dataset" },
    { label: "Prioritas Wilayah", href: "/prioritas-daerah" },
    { label: "Eksplorasi Wilayah", href: "/eksplorasi-daerah" },
    { label: "Rekomendasi", href: "/rekomendasi" },
  ],
  kategoriData: [
    { label: "Infrastruktur", href: "#" },
    { label: "Tenaga pendidik", href: "#" },
    { label: "Kualitas pembelajaran", href: "#" },
    { label: "Anggaran", href: "#" },
  ],
  sumberData: [
    { label: "Kemendikdasmen", href: "#" },
    { label: "Komdigi", href: "#" },
    { label: "Data.go.id", href: "#" },
    { label: "Satu Data Indonesia", href: "#" },
  ],
};

export const daerahList = [
  "Aceh", "Sumatera Utara", "Sumatera Barat", "Riau", "Jambi", "Sumatera Selatan", "Bengkulu", "Lampung", "Kep. Bangka Belitung", "Kepulauan Riau", "D.K.I. Jakarta", "Jawa Barat", "Jawa Tengah", "D.I. Yogyakarta", "Jawa Timur", "Banten", "Bali", "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur", "Kalimantan Utara", "Sulawesi Utara", "Sulawesi Tengah", "Sulawesi Selatan", "Sulawesi Tenggara", "Gorontalo", "Sulawesi Barat", "Maluku", "Maluku Utara", "Papua Barat", "Papua Barat Daya", "Papua", "Papua Tengah", "Papua Selatan", "Papua Pegunungan"
];

export const indikatorList = [
  "Kelas Rusak Total",
  "Rasio Murid Guru",
  "Rasio Murid Rombel",
  "Angka Putus Sekolah",
];
