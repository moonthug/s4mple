'use client';


import { Button } from 'flowbite-react';


export const PrinterTest: React.FC = () => {
  var SERVICE = '49535343-FE7D-4AE5-8FA9-9FAFD205E455'.toLowerCase();
  var WRITE = '49535343-8841-43F4-A8D4-ECBE34729BB3'.toLowerCase();

  var DATA = ''
    + '\x1B' + '\x61' + '\x31'                                              // center align
    + '\x1D' + '\x21' + '\x11' + 'Hello\nBluetooth!\n\n'                    // double font size
    + '\x1D' + '\x21' + '\x00' + '... from your friends\nat https://qz.io'  // normal font size
    + '\n\n\n\n\n\n\n';                                                     // feed paper

  var deviceHandle;

  const requestDevice = () => {
    navigator.bluetooth.requestDevice({
      filters: [{
        name: 'D110-F202034119',
      }],
      optionalServices: [
        SERVICE
      ]
    }).then(device => {
      console.log('device', device);
      deviceHandle = device;
      return device.gatt.connect();
    }).then(server => {
      console.log('server', server);
      return server.getPrimaryService(SERVICE);
    }).then(service => {
      console.log('service', service);
      return service.getCharacteristic(WRITE);
    }).then(channel => {
      console.log('channel', channel);
      return channel.writeValue(new TextEncoder('utf-8').encode(DATA));
    }).catch(error => {
      console.error(error);
    }).finally(() => {
      console.log('disconnect');
      deviceHandle.gatt.disconnect();
    });
  };
  return (
    <main>
      <Button onClick={ () => requestDevice() }>Request</Button>
    </main>
  );
};

export default PrinterTest;
