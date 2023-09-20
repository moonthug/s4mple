import EntityMap from '@/components/EntityMap';
import { FragmentType, useFragment } from '@/graphql/generated/fragment-masking';
import { graphql } from '@/graphql/generated/gql';
import React from 'react';
import { CircleLayer, Layer, Source } from 'react-map-gl';


export const sampleLayer: CircleLayer = {
  id: 'sample-position',
  source: 'sample',
  type: 'circle',
  paint: {
    'circle-color': '#00ccff',
    'circle-radius': 5
  }
};

const SampleMap_SampleFragment = graphql(/* GraphQL */ `
  fragment SampleMap_SampleFragment on Sample {
    longitude
    latitude
  }
`);

type SampleMapProps = {
  sampleFragmentRef: FragmentType<typeof SampleMap_SampleFragment>
}

const SampleMap: React.FC<SampleMapProps> = ({
  sampleFragmentRef
}) => {
  const sample = useFragment(SampleMap_SampleFragment, sampleFragmentRef);

  const sampleFeature: GeoJSON.Feature<GeoJSON.Point> = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Point',
      coordinates: [sample?.longitude || 0, sample?.latitude || 0]
    }
  };

  return (
    <EntityMap
      longitude={ sample?.longitude || 0 }
      latitude={ sample?.latitude || 0 }
      zoom={ 16 }
    >
      <Source id="sample" type="geojson" data={ sampleFeature }>
        <Layer { ...sampleLayer } />
      </Source>
    </EntityMap>
  );
};

export default SampleMap;
