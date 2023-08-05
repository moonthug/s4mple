'use client';

import Divider from '@/components/Divider';
import { PlateList } from '@/components/Propagation/PlateList';
import PropagationDendrogram from '@/components/Propagation/PropagationDendrogram';
import EntityTitleId from '@/components/text/EntityTitleId';
import { Propagation as PropagationModel } from '@/models/Propagation';
import { Tabs } from 'flowbite-react';
import React from 'react';
import { PiGraphFill } from 'react-icons/pi';


type PropagationProps = {
  propagation: PropagationModel
}

export const Propagation: React.FC<PropagationProps> = ({
  propagation
}) => {
  return (
    <div>
      <div className="flex gap-8">
        <div className="flex-grow">
          <EntityTitleId id={ propagation.id } title="Propagation"/>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Recipe</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{ propagation.recipe.name }</dd>
          </dl>
        </div>
        <div className="flex-none">
          <Tabs.Group
            aria-label="Tabs with underline"
            style="underline"
          >
            <Tabs.Item
              active
              icon={ PiGraphFill }
              title="Nodes"
            >
              <PropagationDendrogram
                propagation={ propagation }
                width={ 600 }
                height={ 300 }
              />
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
      <Divider/>
      <PlateList plates={ propagation.plates }/>
    </div>
  );
};

export default Propagation;
