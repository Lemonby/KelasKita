import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/dummy";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="space-y-5 lg:col-span-5 pr-0 lg:pr-8">
            <Link href="/" className="inline-block transition-opacity hover:opacity-95">
              <Image
                src="/logo-footer-native.png"
                alt="KelasKita Logo"
                width={260}
                height={95}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-300">
              Data pendidikan terbuka untuk membantu keputusan yang lebih adil bagi setiap daerah.
            </p>
            <div>
              <Link
                href="/beranda"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-secondary shadow-sm transition hover:bg-accent-hover hover:scale-[1.02]"
              >
                Lihat peta kesenjangan
              </Link>
            </div>
          </div>

          {/* Jelajahi */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-accent">
              Jelajahi
            </h4>
            <ul className="space-y-3">
              {footerLinks.jelajahi.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kategori data */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-accent">
              Kategori data
            </h4>
            <ul className="space-y-3">
              {footerLinks.kategoriData.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sumber data */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-accent">
              Sumber data
            </h4>
            <ul className="space-y-3">
              {footerLinks.sumberData.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Terms */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#31435C] pt-6 sm:flex-row">
          <p className="text-xs text-slate-400">
            © 2026 KelasKita. Data bersumber dari portal data terbuka pemerintah.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/syarat-penggunaan"
              className="text-xs text-slate-400 transition hover:text-white"
            >
              Syarat penggunaan
            </Link>
            <Link
              href="/kebijakan-privasi"
              className="text-xs text-slate-400 transition hover:text-white"
            >
              Kebijakan privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
