'use client';

import Divider from '@/components/Divider';
import { PropagationList } from '@/components/Sample/PropagationList';
import SampleDendrogram from '@/components/Sample/SampleDendrogram';
import EntityTitleId from '@/components/text/EntityTitleId';
import { Sample as SampleModel } from '@/models/Sample';
import { Tabs } from 'flowbite-react';

import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import { PiGraphFill, PiMapPinBold } from 'react-icons/pi';
import { CircleLayer, Layer, Source } from 'react-map-gl';
import EntityMap from '../EntityMap';


const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWxpY2tzIiwiYSI6ImNsNnhhdHVtMTA3N20zZHAxZ2M3MXp0YjcifQ.jsmP4xv9toaq6WSGxTTJDg';

export const sampleLayer: CircleLayer = {
  id: 'sample-position',
  source: 'sample',
  type: 'circle',
  paint: {
    'circle-color': '#00ccff',
    'circle-radius': 5
  }
};

type SampleProps = {
  sample: SampleModel
}

export const Sample: React.FC<SampleProps> = ({
  sample
}) => {
  const sampleFeature: GeoJSON.Feature<GeoJSON.Point> = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Point',
      coordinates: [sample.longitude, sample.latitude]
    }
  };

  return (
    <div>
      <div className="flex gap-8">
        <div className="flex-grow">
          <EntityTitleId id={ sample.id } title="Sample"/>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Description</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{ sample.description }</dd>
          </dl>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">LonLat</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{ `${ sample.longitude }, ${ sample.latitude }` }</dd>
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
                longitude={ sample.longitude }
                latitude={ sample.latitude }
                zoom={ 16 }
              >
                <Source id="sample" type="geojson" data={ sampleFeature }>
                  <Layer { ...sampleLayer } />
                </Source>
              </EntityMap>
            </Tabs.Item>
            <Tabs.Item
              active
              icon={ PiGraphFill }
              title="Nodes"
            >
              <SampleDendrogram
                sample={ sample }
                width={ 600 }
                height={ 300 }
              />
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
      <Divider/>
      <PropagationList propagations={ sample.propagations }/>
    </div>
  );
};

export default Sample;
