import { useContext } from "react";
import { FeatureContext } from "../state/FeatureContext";
import { GeoJSON } from "react-leaflet";

export default function FeatureLayer() {
  const { features } = useContext(FeatureContext);

  if (!features || features.length === 0) return null;

  return <GeoJSON data={features as any} />;
}
