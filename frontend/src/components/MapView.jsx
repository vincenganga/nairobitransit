import React, { useCallback, useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, PolylineF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const defaultCenter = {
  lat: -1.2921,
  lng: 36.8219
};

export default function MapView({ activeRoute, cbdCoordinates }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(mapInstance) {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(function callback(mapInstance) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (map) {
      if (activeRoute?.center) {
        map.panTo(activeRoute.center);
        map.setZoom(activeRoute.zoom || 13);
      } else {
        map.panTo(defaultCenter);
        map.setZoom(13);
      }
    }
  }, [activeRoute, map]);

  if (!isLoaded) {
    return (
      <div style={{ width: '100%', height: '100%', backgroundColor: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ textAlign: 'center', padding: '24px' }}>
          <div style={{ width: '32px', height: '32px', border: '4px solid blue', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 12px auto' }}></div>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ fontSize: '13px', color: '#475569', fontWeight: '600', margin: 0 }}>Loading Nairobi Transit Map...</p>
        </div>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={activeRoute?.center || defaultCenter}
      zoom={activeRoute?.zoom || 13}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      {activeRoute && activeRoute.center && (
        <>
          <MarkerF 
            position={cbdCoordinates} 
          />

          <MarkerF 
            position={activeRoute.center} 
            label={{
              text: activeRoute.number,
              color: 'white',
              fontWeight: 'bold',
              fontSize: '11px'
            }}
          />

          <PolylineF
            path={activeRoute.path}
            options={{
              strokeColor: activeRoute.color,
              strokeOpacity: 0.8,
              strokeWeight: 6,
              geodesic: true,
            }}
          />
        </>
      )}
    </GoogleMap>
  );
}