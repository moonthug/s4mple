'use client';

import { getNextCodeAction } from '@/actions/getNextCode';
import Barcode from '@/components/Barcode';
import Geolocation from '@/components/Geolocation';
import { SampleType } from '@/graphql/generated/graphql';
import { uppercaseFirst } from '@/lib/utils/text';
import { Button, Label, Select, TextInput } from 'flowbite-react';
import print from 'print-js';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LuPrinter, LuSave } from 'react-icons/lu';


export type CreateSampleFormData = {
  code: string,
  description: string,
  type: SampleType,
  longitude: number,
  latitude: number,
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
    formState: { errors },
    watch
  } = useForm<CreateSampleFormData>();

  const [locationLoading, setLocationLoading] = useState(true);
  const [codeLoading, setCodeLoading] = useState(true);

  const latitude = watch('latitude');
  const longitude = watch('longitude');
  const code = watch('code');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setValue('latitude', position.coords.latitude);
      setValue('longitude', position.coords.longitude);
      setLocationLoading(false);
    });

    navigator.geolocation.watchPosition(
      (position) => {
        setValue('latitude', position.coords.latitude);
        setValue('longitude', position.coords.longitude);
        setLocationLoading(false);
      },
      null,
      { enableHighAccuracy: true }
    );
  }, []);

  useEffect(() => {
    getNextCodeAction('sample').then(code => {
      setValue('code', code);
      setCodeLoading(false);
    });
  }, []);

  const formCanSubmit = (!codeLoading && !locationLoading);

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
          <option>Select a Type...</option>
          { Object.values(SampleType).map(sampleType => (
            <option key={ sampleType } value={ sampleType }>{ uppercaseFirst(sampleType) }</option>))
          }
        </Select>
      </div>
      <div>
        <div className="mb-2 block">
          <Label value="Location"/>
        </div>
        <Geolocation isLoading={ locationLoading } latitude={ latitude } longitude={ longitude }/>
      </div>
      <div>
        <Barcode isLoading={ codeLoading } value={ code }/>
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
          disabled={ !formCanSubmit }
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
