import { createContext, useState } from "react";

/* ---- Types ---- */
export type Feature = GeoJSON.Feature;

type FeatureContextType = {
  features: Feature[];
  addFeature: (feature: Feature) => void;
  exportGeoJSON: () => void;
};

/* ---- Context ---- */
export const FeatureContext = createContext<FeatureContextType>({
  features: [],
  addFeature: () => {},
  exportGeoJSON: () => {}
});

/* ---- Provider ---- */
export function FeatureProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [features, setFeatures] = useState<Feature[]>([]);

  const addFeature = (feature: Feature) => {
    setFeatures((prev) => [...prev, feature]);
  };

  const exportGeoJSON = () => {
    const geojson = {
      type: "FeatureCollection",
      features
    };

    const blob = new Blob([JSON.stringify(geojson, null, 2)], {
      type: "application/json"
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "features.geojson";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <FeatureContext.Provider value={{ features, addFeature, exportGeoJSON }}>
      {children}
    </FeatureContext.Provider>
  );
}
