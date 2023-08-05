'use client';

import Divider from '@/components/Divider';
import EntityMap from '@/components/EntityMap';
import RecordingDendrogram from '@/components/Recording/RecordingDendrogram';
import { SampleList } from '@/components/Recording/SampleList';
import EntityTitleId from '@/components/text/EntityTitleId';
import { Recording as RecordingModel } from '@/models/Recording';
import * as Turf from '@turf/turf';
import { Tabs } from 'flowbite-react';

import React from 'react';
import { PiGraphFill, PiMapPinBold } from 'react-icons/pi';
import { CircleLayer, Layer, Source } from 'react-map-gl';


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
  recording: RecordingModel
}

export const Recording: React.FC<RecordingProps> = ({
  recording
}) => {
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

  const centrePoint = Turf.center(sampleFeatures);

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
                recording={ recording }
                width={ 600 }
                height={ 300 }
              />
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
      <Divider/>
      <SampleList samples={ recording.samples }/>
    </div>
  );
};

export default Recording;
