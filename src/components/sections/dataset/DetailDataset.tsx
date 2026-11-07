"use client";

import Link from "next/link";
import { ArrowLeft, Download, Info, LoaderCircle, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import type { Dataset } from "@/data/dummy";
import { getDatasetFileUrl } from "@/data/datasetFiles";

type SheetRows = Record<string, unknown[][]>;

export default function DetailDataset({ dataset }: { dataset: Dataset }) {
  const fileUrl = getDatasetFileUrl(Number(dataset.id));
  const [sheets, setSheets] = useState<SheetRows>({});
  const [sheetNames, setSheetNames] = useState<string[]>([]);
  const [sheetName, setSheetName] = useState("");
  const [loading, setLoading] = useState(Boolean(fileUrl));
  const [error, setError] = useState("");

  useEffect(() => {
    if (!fileUrl) {
      return;
    }

    let active = true;
    fetch(fileUrl)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("File dataset tidak dapat dimuat.");
        }
        return XLSX.read(await response.arrayBuffer(), { type: "array" });
      })
      .then((workbook) => {
        if (!active) return;
        const nextSheets = Object.fromEntries(
          workbook.SheetNames.map((name) => [
            name,
            XLSX.utils.sheet_to_json<unknown[]>(workbook.Sheets[name], {
              header: 1,
              defval: "",
              raw: false,
            }),
          ]),
        );
        const firstSheet = workbook.SheetNames[0] ?? "";
        setSheets(nextSheets);
        setSheetNames(workbook.SheetNames);
        setSheetName(firstSheet);
      })
      .catch((reason: unknown) => {
        if (active) {
          setError(
            reason instanceof Error ? reason.message : "Preview gagal dimuat.",
          );
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [fileUrl]);

  return (
    <section className="bg-background px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/dataset"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-primary"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Kembali ke dataset
        </Link>
        <header>
          <h1 className="text-2xl font-bold leading-tight text-secondary sm:text-3xl">
            {dataset.title}
          </h1>
          <span className="mt-3 inline-flex rounded-full bg-[#e6e3ff] px-3 py-1 text-xs font-semibold text-primary">
            {dataset.category}
          </span>
          <p className="mt-5 max-w-4xl text-sm leading-6 text-slate-600">
            {dataset.description}
          </p>
        </header>

        <div className="mt-6 grid max-w-2xl gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2">
          <InfoRow
            label="Dataset dibuat"
            value={dataset.createdDate ?? dataset.date}
          />
          <InfoRow
            label="Dataset diperbarui"
            value={dataset.updatedDate ?? dataset.date}
          />
          <InfoRow label="Pemilik" value={dataset.owner ?? dataset.source} />
          <InfoRow label="Format dataset" value={dataset.format} />
          <InfoRow label="Cakupan" value={dataset.coverage ?? "Indonesia"} />
          <InfoRow label="Jenjang" value={dataset.lavels} />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => navigator.clipboard?.writeText(window.location.href)}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <Share2 size={15} aria-hidden="true" />
            Bagikan tautan
          </button>
          {fileUrl ? (
            <a
              href={fileUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary-hover"
            >
              <Download size={15} aria-hidden="true" />
              Unduh Dataset
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-lg bg-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-500">
              <Info size={15} aria-hidden="true" />
              File belum tersedia
            </span>
          )}
        </div>

        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="bg-secondary px-5 py-4 text-white">
            <h2 className="text-sm font-bold">
              Pratinjau <span className="text-accent">{dataset.title}</span>
            </h2>
            <p className="mt-1 text-xs text-slate-300">
              {sheetName ? `Sheet: ${sheetName} · ` : ""}Menampilkan seluruh
              data
            </p>
          </div>
          {loading ? (
            <div className="flex items-center justify-center gap-2 px-5 py-14 text-sm text-slate-500">
              <LoaderCircle
                size={18}
                className="animate-spin"
                aria-hidden="true"
              />
              Memuat preview XLSX...
            </div>
          ) : error ? (
            <p className="px-5 py-12 text-center text-sm text-red-600">
              {error}
            </p>
          ) : sheetNames.length > 0 ? (
            <>
              <div className="overflow-x-auto border-b border-slate-200 bg-white">
                <div className="flex min-w-max">
                  {sheetNames.map((name) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() => setSheetName(name)}
                      className={`border-b-2 px-4 py-3 text-xs font-semibold transition ${
                        name === sheetName
                          ? "border-primary text-primary"
                          : "border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="max-h-[620px] overflow-auto">
                <table className="w-max min-w-full text-left text-xs">
                  <tbody>
                    {(sheets[sheetName] ?? []).map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className={
                          rowIndex === 0
                            ? "bg-[#e6e3ff] font-bold text-secondary"
                            : "border-t border-slate-100 text-slate-600"
                        }
                      >
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="whitespace-nowrap px-3 py-2.5"
                          >
                            {String(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <p className="px-5 py-12 text-center text-sm text-slate-500">
              Preview belum tersedia untuk dataset ini.
            </p>
          )}
        </section>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-2 text-xs last:border-0">
      <span className="text-slate-500">{label}</span>
      <span className="text-right font-medium text-slate-700">{value}</span>
    </div>
  );
}
