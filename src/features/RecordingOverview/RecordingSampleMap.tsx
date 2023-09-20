import EntityMap from '@/components/EntityMap';
import { FragmentType, useFragment } from '@/graphql/generated/fragment-masking';
import { graphql } from '@/graphql/generated/gql';
import * as Turf from '@turf/turf';
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

const RecordingSampleMap_RecordingFragment = graphql(/* GraphQL */ `
  fragment RecordingSampleMap_RecordingFragment on Recording {
    samples {
      longitude
      latitude
    }
  }
`);

type SampleMapProps = {
  recordingFragmentRef: FragmentType<typeof RecordingSampleMap_RecordingFragment>
}

const RecordingSampleMap: React.FC<SampleMapProps> = ({
  recordingFragmentRef
}) => {
  const query = useFragment(RecordingSampleMap_RecordingFragment, recordingFragmentRef);

  const sampleFeatures: GeoJSON.FeatureCollection<GeoJSON.Point> = {
    type: 'FeatureCollection',
    features: query.samples.map(sample => ({
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [sample.longitude, sample.latitude]
      }
    })) as GeoJSON.Feature<GeoJSON.Point>[]
  };

  const centrePoint = sampleFeatures.features.length > 0
    ? Turf.center(sampleFeatures)
    : Turf.point([0, 0]);

  return (
    <EntityMap
      longitude={ centrePoint.geometry.coordinates[0] }
      latitude={ centrePoint.geometry.coordinates[1] }
      zoom={ 14 }
    >
      <Source id="samples" type="geojson" data={ sampleFeatures }>
        <Layer { ...sampleLayer } />
      </Source>
    </EntityMap>
  );
};

export default RecordingSampleMap;
