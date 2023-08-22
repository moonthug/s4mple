'use client';

import Barcode, { Renderer } from '@/components/Barcode';
import { SampleType } from '@/graphql/graphql';
import { uppercaseFirst } from '@/lib/utils/text';
import { Button, Label, Select, TextInput } from 'flowbite-react';
import print from 'print-js';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LuPrinter, LuSave } from 'react-icons/lu';


export type CreateSampleFormData = {
  description: string,
  type: SampleType,
  longitude: number,
  latitude: number
};

type CreateSampleFormProps = {
  onSubmit: SubmitHandler<CreateSampleFormData>;
}

const CreateSampleForm: React.FC<CreateSampleFormProps> = ({
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<CreateSampleFormData>();

  const [location, setLocation] = useState([0, 0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation([position.coords.longitude, position.coords.latitude]);
    });

    navigator.geolocation.watchPosition(
      (position) => {
        setLocation([position.coords.longitude, position.coords.latitude]);
      },
      null,
      { enableHighAccuracy: true }
    );
  }, []);

  useEffect(() => {
    setValue('longitude', location[0]);
    setValue('latitude', location[1]);
  }, [location]);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={ handleSubmit(onSubmit) }
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Description"/>
        </div>
        <TextInput
          placeholder="My sample description..."
          { ...register('description') }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="type" value="Type"/>
        </div>
        <Select
          required
          { ...register('type') }
        >
          { Object.values(SampleType).map(sampleType => (
            <option key={ sampleType } value={ sampleType }>{ uppercaseFirst(sampleType) }</option>))
          }
        </Select>
      </div>
      <div>
        <div className="mb-2 block">
          <Label value="Location"/>
        </div>
        <pre>{ JSON.stringify(location) }</pre>
      </div>
      <div>
        <Barcode options={ { format: 'code128' } } renderer={ Renderer.canvas } value="S00001"/>
      </div>
      <div className="flex gap-4 justify-end">
        <Button
          color="gray"
          onClick={ () => {
            print('barcode', 'html');
          } }
        >
          <LuPrinter className="inline mr-3 h-5 w-5"/>
          Print
        </Button>
        <Button
          type="submit"
          gradientDuoTone="greenToBlue"
        >
          <LuSave className="inline mr-3 h-5 w-5"/>
          Save
        </Button>
      </div>
    </form>
  );
};

export default CreateSampleForm;
