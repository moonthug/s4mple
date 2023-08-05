import React from 'react';


type EntityTitleIdProps = {
  id: string;
  title: string;
}

const EntityTitleId: React.FC<EntityTitleIdProps> = ({ title, id }) => {
  return (
    <>
      <h1 className="mb-4 text-4xl font-semibold">{ title }</h1>
      <h5 className="mb-8 font-mono font-light text-gray-400">{ id }</h5>
    </>
  );
};

export default EntityTitleId;
