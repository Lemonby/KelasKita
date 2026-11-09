"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { GeoJSON, MapContainer, TileLayer, useMap } from "react-leaflet";
import { usePathname } from "next/navigation";
import type { FeatureCollection, Geometry } from "geojson";
import type { Path } from "leaflet";
import {
  CLUSTER_THEME,
} from "@/data/indonesiaGeoData";
import { berandaMapData, ProvinceMapItem } from "@/data/berandaMapData";

interface LeafletMapInnerProps {
  onSelectProvince: (province: ProvinceMapItem) => void;
  selectedProvince: ProvinceMapItem | null;
  activeClusterFilter: string;
  searchQuery: string;
}

type ProvinceFeatureCollection = FeatureCollection<
  Geometry,
  Record<string, unknown>
>;

function normalizeProvinceName(name: string) {
  return name
    .toLocaleLowerCase("id")
    .replace(/[^a-z0-9]/g, "")
    .replace(/daerahistimewa/g, "di")
    .replace(/kepulauan/g, "kep");
}

function MapController({ target }: { target: [number, number] | null }) {
  const map = useMap();

  useEffect(() => {
    if (target) {
      map.flyTo(target, 6.5, { duration: 1.2 });
    }
  }, [target, map]);

  return null;
}

export default function LeafletMapInner({
  onSelectProvince,
  selectedProvince,
  activeClusterFilter,
  searchQuery,
}: LeafletMapInnerProps) {
  const pathname = usePathname();
  const [boundaries, setBoundaries] =
    useState<ProvinceFeatureCollection | null>(null);
  const [boundaryError, setBoundaryError] = useState(false);
  const [hoveredProvinceId, setHoveredProvinceId] = useState<string | null>(
    null,
  );
  useEffect(() => {
    let active = true;

    fetch("/indonesia-provinces.geojson")
      .then((response) => {
        if (!response.ok)
          throw new Error("GeoJSON provinsi tidak dapat dimuat.");
        return response.json() as Promise<ProvinceFeatureCollection>;
      })
      .then((data) => {
        if (active) setBoundaries(data);
      })
      .catch(() => {
        if (active) setBoundaryError(true);
      });

    return () => {
      active = false;
    };
  }, []);

  const provincesByName = useMemo(
    () =>
      new Map(
        berandaMapData.map((province) => [
          normalizeProvinceName(province.name),
          province,
        ]),
      ),
    [],
  );

  const getProvince = (featureName: string) =>
    provincesByName.get(normalizeProvinceName(featureName));

  const getProvinceStyle = (province: ProvinceMapItem) => {
    const isSelected = selectedProvince?.id === province.id;
    const isHovered = hoveredProvinceId === province.id;
    const matchesCluster =
      activeClusterFilter === "all" || province.cluster === activeClusterFilter;
    const query = searchQuery.trim().toLocaleLowerCase("id");
    const matchesSearch =
      !query ||
      province.name.toLocaleLowerCase("id").includes(query) ||
      province.island.toLocaleLowerCase("id").includes(query);

    return {
      color: isSelected ? "#5147d9" : "#ffffff",
      weight: isSelected ? 2.5 : isHovered ? 2 : 1.25,
      opacity: isSelected || isHovered ? 1 : 0.95,
      fillColor: isSelected
        ? "#c8ee44"
        : CLUSTER_THEME[province.cluster].fillColor,
      fillOpacity: isSelected
        ? 0.78
        : isHovered
          ? 0.52
          : matchesCluster && matchesSearch
            ? 0.26
            : 0.06,
    };
  };
  const provinceStyleRef = React.useRef(getProvinceStyle);
  useEffect(() => {
    provinceStyleRef.current = getProvinceStyle;
  });

  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-xl border border-slate-200 bg-sky-100 shadow-inner sm:h-[480px]">
      <MapContainer
        key={pathname}
        center={[-2.5, 118]}
        zoom={4}
        minZoom={3}
        maxZoom={10}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors · batas provinsi &copy; BIG via <a href="https://github.com/mashadinoor/Indonesia-Geojson-2026">GeoJSON Indonesia</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />

        <MapController
          target={selectedProvince ? selectedProvince.center : null}
        />

        {boundaries && (
          <GeoJSON
            data={boundaries}
            style={(feature) => {
              const province = getProvince(
                String(feature?.properties?.PROVINSI ?? ""),
              );
              return province
                ? getProvinceStyle(province)
                : {
                    color: "#ffffff",
                    weight: 1,
                    fillColor: "#94a3b8",
                    fillOpacity: 0.2,
                  };
            }}
            onEachFeature={(feature, layer) => {
              const province = getProvince(
                String(feature.properties?.PROVINSI ?? ""),
              );
              if (!province) return;

              const provinceLayer = layer as Path;
              provinceLayer.bindTooltip(province.name, {
                sticky: true,
                direction: "top",
                className: "custom-map-tooltip",
              });
              provinceLayer.on({
                mouseover: () => {
                  setHoveredProvinceId(province.id);
                  provinceLayer.setStyle({ weight: 2.5, fillOpacity: 0.55 });
                  provinceLayer.bringToFront();
                },
                mouseout: () => {
                  setHoveredProvinceId(null);
                  provinceLayer.setStyle(provinceStyleRef.current(province));
                },
                click: () => onSelectProvince(province),
              });
            }}
          />
        )}
      </MapContainer>

      {!boundaries && (
        <div className="pointer-events-none absolute inset-0 z-[400] flex items-center justify-center bg-white/55 px-5 text-center text-sm font-medium text-slate-600 backdrop-blur-[1px]">
          {boundaryError
            ? "Batas provinsi belum dapat dimuat. Coba muat ulang halaman."
            : "Memuat batas wilayah 38 provinsi..."}
        </div>
      )}
    </div>
  );
}
