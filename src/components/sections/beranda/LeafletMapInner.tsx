"use client";

import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Tooltip,
  CircleMarker,
  useMap,
} from "react-leaflet";
import {
  provincesGeoData,
  ProvinceGeoItem,
  CLUSTER_THEME,
} from "@/data/indonesiaGeoData";

interface LeafletMapInnerProps {
  onSelectProvince: (province: ProvinceGeoItem) => void;
  selectedProvince: ProvinceGeoItem | null;
  activeClusterFilter: string;
  searchQuery: string;
}

// Sub-component to smoothly animate map camera
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
  const [hoveredProvinceId, setHoveredProvinceId] = useState<string | null>(null);

  // Initial bounds & center of Indonesia
  const indonesiaCenter: [number, number] = [-2.5, 118.0];
  const defaultZoom = 5;

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] rounded-xl overflow-hidden shadow-inner border border-slate-200">
      <MapContainer
        center={indonesiaCenter}
        zoom={defaultZoom}
        minZoom={4}
        maxZoom={10}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        {/* CARTO Positron Clean Basemap - Matches Minimalist KelasKita Theme */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={19}
        />

        <MapController
          target={selectedProvince ? selectedProvince.center : null}
        />

        {/* 38 Provinsi Polygons */}
        {provincesGeoData.map((province) => {
          const isSelected = selectedProvince?.id === province.id;
          const isHovered = hoveredProvinceId === province.id;

          const matchCluster =
            activeClusterFilter === "all" ||
            province.cluster === activeClusterFilter;
          const matchSearch =
            searchQuery === "" ||
            province.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            province.island.toLowerCase().includes(searchQuery.toLowerCase());
          const isHighlighted = matchCluster && matchSearch;

          const baseColor = CLUSTER_THEME[province.cluster].fillColor;

          const fillColor = isSelected
            ? "#C8EE44"
            : isHovered
            ? "#6E67FB"
            : isHighlighted
            ? baseColor
            : "#CBD5E1";

          const fillOpacity = isSelected
            ? 0.95
            : isHovered
            ? 0.9
            : isHighlighted
            ? 0.8
            : 0.2;

          const borderColor = isSelected
            ? "#1E293B"
            : isHovered
            ? "#ffffff"
            : "#ffffff";

          const weight = isSelected ? 3 : isHovered ? 2.5 : 1.2;

          return (
            <React.Fragment key={province.id}>
              {province.polygons.map((ring, idx) => (
                <Polygon
                  key={`${province.id}-poly-${idx}`}
                  positions={ring}
                  pathOptions={{
                    fillColor,
                    fillOpacity,
                    color: borderColor,
                    weight,
                  }}
                  eventHandlers={{
                    mouseover: () => setHoveredProvinceId(province.id),
                    mouseout: () => setHoveredProvinceId(null),
                    click: () => onSelectProvince(province),
                  }}
                >
                  {/* Tooltip on hover */}
                  <Tooltip
                    sticky
                    direction="top"
                    className="custom-map-tooltip"
                  >
                    <div className="text-left text-xs space-y-1">
                      <div className="flex items-center justify-between gap-3 border-b border-slate-700 pb-1">
                        <span className="font-bold text-white text-sm">
                          {province.name}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            province.cluster === "Cluster 1"
                              ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                              : province.cluster === "Cluster 2"
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                              : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          }`}
                        >
                          {province.cluster}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 pt-0.5">
                        <div>
                          <span className="text-slate-400 block text-[10px]">
                            Skor Prioritas:
                          </span>
                          <span className="font-extrabold text-white">
                            {province.score}%
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">
                            Kelas Rusak:
                          </span>
                          <span className="font-semibold text-slate-200">
                            {province.rusakBeratPercent}%
                          </span>
                        </div>
                      </div>
                      <p className="text-[10px] text-[#C8EE44] font-medium pt-1 border-t border-slate-700/60">
                        Klik untuk melihat analisis lengkap &rarr;
                      </p>
                    </div>
                  </Tooltip>
                </Polygon>
              ))}

              {/* Centroid Marker Dot */}
              {isHighlighted && (
                <CircleMarker
                  center={province.center}
                  radius={isHovered || isSelected ? 5 : 3}
                  pathOptions={{
                    fillColor: isSelected
                      ? "#1E293B"
                      : isHovered
                      ? "#C8EE44"
                      : "#ffffff",
                    fillOpacity: 0.9,
                    color: isSelected ? "#C8EE44" : "#1E293B",
                    weight: 1.5,
                  }}
                  eventHandlers={{
                    click: () => onSelectProvince(province),
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </MapContainer>
    </div>
  );
}

