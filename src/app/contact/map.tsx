"use client";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Skeleton } from "@/components/ui/skeleton";
// import { useGeolocation } from "@/hooks/use-geolocation";

const mapContainerStyle = {
  width: "30rem",
  height: "50rem",
};

type MapProps = {
  longitude: number;
  latitude: number;
};

export const Map = ({ latitude, longitude }: MapProps) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
    libraries: ["places"],
  });

  if (loadError) {
    return <div className="h-80 w-100">Error loading maps</div>;
  }

  if (!isLoaded) {
    return <Skeleton className="h-80 w-100" />;
  }
  const center = {
    lat: latitude,
    lng: longitude,
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scaleControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    rotateControl: false,
  };

  return (
    <div className="flex justify-center flex-1">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={18}
        center={center}
        options={options}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};