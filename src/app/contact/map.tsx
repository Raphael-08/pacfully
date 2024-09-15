"use client";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Skeleton } from "@/components/ui/skeleton";
// import { useGeolocation } from "@/hooks/use-geolocation";

const mapContainerStyle = {
  width: "20rem",
  height: "20rem",
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
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    scaleControl: false,
    fullscreenControl: true,
    streetViewControl: false,
    rotateControl: false,
  };

  return (
    <div className="flex justify-center flex-1 h-80 m-6">
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