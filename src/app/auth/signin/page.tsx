'use client';

import SignInForm from '@/components/forms/SignInForm';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

import logo from '../../../../public/logo.png';


export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center">
      <a href="#" className="flex flex-col items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <Image src={ logo } height="200" className="mr-2" alt="s4mple"/>
        S4MPLE
      </a>
      <Card>
        <SignInForm/>
      </Card>
    </div>
  );
}
