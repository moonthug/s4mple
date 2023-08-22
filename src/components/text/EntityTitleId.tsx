import React from 'react';


type EntityTitleIdProps = {
  code: string;
  title: string;
}

const EntityTitleId: React.FC<EntityTitleIdProps> = ({ title, code }) => {
  return (
    <>
      <h1 className="mb-4 text-4xl font-semibold">{ title }</h1>
      <h5 className="mb-8 font-mono font-light text-gray-400">{ code }</h5>
    </>
  );
};

export default EntityTitleId;
