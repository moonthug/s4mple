import { Spinner } from 'flowbite-react';
import React from 'react';


type BarcodeProps = {
  latitude: number;
  longitude: number;
  isLoading: boolean;
}

const Geolocation: React.FC<BarcodeProps> = ({
  latitude,
  longitude,
  isLoading = false
}) => {
  if (isLoading) {
    return (
      <Spinner/>
    );
  }

  return (
    <pre>{ longitude }, { latitude }</pre>
  );
};

export default Geolocation;
