import 'mapbox-gl/dist/mapbox-gl.css';

import { createSignal } from 'solid-js';
import type { Viewport } from 'solid-map-gl';
import MapGL, { Layer, Source } from 'solid-map-gl';
export default function Map() {
  const [viewport, setViewport] = createSignal({
    center: [-122.45, 37.78],
    zoom: 11,
  } as Viewport);
  return (
    <MapGL
      options={{ style: 'mb:street' }}
      viewport={viewport()}
      onViewportChange={(evt: Viewport) => setViewport(evt)}
    >
      <Source
        source={{
          type: 'geojson',
          data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
        }}
      >
        <Layer
          style={{
            type: 'circle',
            paint: {
              'circle-radius': 8,
              'circle-color': 'red',
            },
          }}
        />
      </Source>
    </MapGL>
  );
}
