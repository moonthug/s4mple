import { MAPBOX_TOKEN } from '@/constants/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { PropsWithChildren } from 'react';
import { Map } from 'react-map-gl';


type EntityMapProps = PropsWithChildren & {
  latitude: number,
  longitude: number,
  width?: number,
  height?: number,
  zoom: number
}

const EntityMap: React.FC<EntityMapProps> = ({
  children,
  latitude,
  longitude,
  zoom
}) => {
  return (
    <div
      style={ {
        background: '#fff',
        borderRadius: '6px',
        overflow: 'hidden',
        // @ts-ignore
        '-webkit-mask-image': 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)'
      } }>
      <Map
        initialViewState={ {
          longitude,
          latitude,
          zoom,
        } }
        style={ { width: 600, height: 300 } }
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        mapboxAccessToken={ MAPBOX_TOKEN }
      >
        { children }
      </Map>
    </div>
  );
};

export default EntityMap;
