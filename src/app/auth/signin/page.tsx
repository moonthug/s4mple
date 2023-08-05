'use client';

import SignInForm from '@/components/forms/SignInForm';
import { Card } from 'flowbite-react';
import React from 'react';


export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
        Flowbite
      </a>
      <Card>
        <SignInForm/>
      </Card>
    </div>
  );
}
