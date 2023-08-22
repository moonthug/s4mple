import { shortenId } from '@/lib/utils/text';
import { Tooltip } from 'flowbite-react';
import React, { PropsWithChildren } from 'react';


const ID: React.FC<PropsWithChildren> = ({ children }) => {
  const id = children as string;

  return (
    <Tooltip content={ id }>
      <p className="font-sans text-sm text-gray-500 text-center underline">
        { shortenId(id) }
      </p>
    </Tooltip>
  );
};

export default ID;
