'use client';

import Divider from '@/components/Divider';
import EntityMap from '@/components/EntityMap';
import RecordingDendrogram from '@/components/RecordingOverview/RecordingDendrogram';
import { SampleList } from '@/components/RecordingOverview/SampleList';
import EntityTitleId from '@/components/text/EntityTitleId';
import { FragmentType, useFragment } from '@/graphql/fragment-masking';
import { graphql } from '@/graphql/gql';
import * as Turf from '@turf/turf';
import { Tabs } from 'flowbite-react';
import React from 'react';
import { PiGraphFill, PiMapPinBold } from 'react-icons/pi';
import { CircleLayer, Layer, Source } from 'react-map-gl';


const RecordingOverview_RecordingFragment = graphql(/* GraphQL */ `
  fragment RecordingOverview_RecordingFragment on Recording {
    id
    name
    description
    createdAt
    updatedAt
    samples {
      latitude
      longitude
    }
    ...RecordingDendrogram_RecordingFragment
    ...SampleList_RecordingFragment
  }
`);


export const sampleLayer: CircleLayer = {
  id: 'sample-position',
  source: 'samples',
  type: 'circle',
  paint: {
    'circle-color': '#00ccff',
    'circle-radius': 5
  }
};

type RecordingProps = {
  recordingFragmentRef: FragmentType<typeof RecordingOverview_RecordingFragment>
}

export const RecordingOverview: React.FC<RecordingProps> = ({
  recordingFragmentRef
}) => {
  const recording = useFragment(RecordingOverview_RecordingFragment, recordingFragmentRef);

  const sampleFeatures: GeoJSON.FeatureCollection<GeoJSON.Point> = {
    type: 'FeatureCollection',
    features: recording.samples.map(sample => ({
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [sample.longitude, sample.latitude]
      }
    }))
  };

  const centrePoint = sampleFeatures.features.length > 0
    ? Turf.center(sampleFeatures)
    : Turf.point([0, 0]);

  return (
    <div>
      <div className="flex gap-8">
        <div className="flex-grow">
          <EntityTitleId id={ recording.id } title={ recording.name }/>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Description</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{ recording.description } fdsa fads fdsaf dsafsdafsdafdsafdsafsadfasdfasdfsdadfas</dd>
          </dl>
        </div>
        <div className="flex-none">
          <Tabs.Group
            aria-label="Tabs with underline"
            style="underline"
          >
            <Tabs.Item
              active
              icon={ PiMapPinBold }
              title="Map"
            >
              <EntityMap
                longitude={ centrePoint.geometry.coordinates[0] }
                latitude={ centrePoint.geometry.coordinates[1] }
                zoom={ 14 }
              >
                <Source id="samples" type="geojson" data={ sampleFeatures }>
                  <Layer { ...sampleLayer } />
                </Source>
              </EntityMap>
            </Tabs.Item>
            <Tabs.Item
              active
              icon={ PiGraphFill }
              title="Nodes"
            >
              <RecordingDendrogram
                recordingFragmentRef={ recording }
                width={ 600 }
                height={ 300 }
              />
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
      <Divider/>
      <SampleList recordingFragmentRef={ recording }/>
    </div>
  );
};

export default RecordingOverview;
