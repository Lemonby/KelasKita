import { notFound } from "next/navigation";
import DetailDataset from "@/components/sections/dataset/DetailDataset";
import { datasets } from "@/data/dummy";

export const instant = false;

export function generateStaticParams() {
  return datasets.map((dataset) => ({ id: String(dataset.id) }));
}

export default async function DatasetDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dataset = datasets.find((item) => String(item.id) === id);

  if (!dataset) {
    notFound();
  }

  return <DetailDataset dataset={dataset} />;
}
