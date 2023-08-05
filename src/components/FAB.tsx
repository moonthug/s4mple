import React from 'react';


interface IconTypeProps {
  width: number;
  height: number;
  color: string;
}

type IconType = (props: IconTypeProps) => JSX.Element;

type FABProps = {
  icon: IconType
}

const FAB: React.FC<FABProps> = ({ icon }) => {
  return (
    <div className="absolute bottom-12 right-12">
      <button
        className="p-0 w-16 h-16 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
      >
        { React.createElement(icon, { width: 12, height: 12, color: '#fff' }) }
      </button>
    </div>
  );
};

export default FAB;
