import JsBarcode, { Options } from 'jsbarcode';
import React, { useEffect, useRef } from 'react';


export const enum Renderer {
  svg = 'svg',
  image = 'image',
  canvas = 'canvas',
}

type BarcodeProps = {
  id?: string;
  renderer?: Renderer;
  value: string;
  options?: Options;
  style?: React.CSSProperties;
  className?: string;
}

const Barcode: React.FC<BarcodeProps> = ({
  id = 'barcode',
  style,
  className,
  value,
  options,
  renderer = Renderer.svg
}) => {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    JsBarcode(containerRef.current, value, options);
  }, [value, options, renderer]);

  switch (renderer) {
    case 'canvas':
      return <canvas id={ id } ref={ containerRef } style={ style } className={ className }/>;
    case 'image':
      return <img id={ id } ref={ containerRef } alt="barcode" style={ style } className={ className }/>;
    default:
      return <svg id={ id } ref={ containerRef } style={ style } className={ className }/>;
  }
};

export default Barcode;
