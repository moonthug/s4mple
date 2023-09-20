'use client';

import { Spinner } from 'flowbite-react';
import JsBarcode from 'jsbarcode';
import React, { useEffect, useRef } from 'react';


type BarcodeProps = {
  id?: string;
  value?: string;
  style?: React.CSSProperties;
  className?: string;
  isLoading: boolean;
}

const Barcode: React.FC<BarcodeProps> = ({
  style,
  className,
  value,
  isLoading = false
}) => {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current && value) {
      JsBarcode(containerRef.current, value, { format: 'code128' });
    }
  }, [value, containerRef]);

  if (isLoading) {
    return (
      <Spinner/>
    );
  }

  return (
    <canvas id="barcode" ref={ containerRef } style={ style } className={ className }/>
  );
};

export default Barcode;
