import PrinterTest from '@/app/debug/PrinterTest';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'TEST',
};

export default async function Home() {
  const session = await getServerSession();

  return (
    <main>
      <div role="status" className="flex flex-col animate-pulse">
        <div className="flex">
          <div className="w-0.5 h-[100px] bg-gray-200 rounded-full"></div>
          <div className="w-1 h-[100px] bg-white rounded-full"></div>
          <div className="w-1 h-[100px] bg-gray-200 rounded-full"></div>
          <div className="w-0.5 h-[100px] bg-white rounded-full"></div>
          <div className="w-2 h-[100px] bg-gray-200 rounded-full"></div>
          <div className="w-2 h-[100px] bg-white rounded-full"></div>
          <div className="w-1 h-[100px] bg-gray-200 rounded-full"></div>
          <div className="w-1 h-[100px] bg-white rounded-full"></div>
          <div className="w-2 h-[100px] bg-gray-200 rounded-full"></div>
          <div className="w-1 h-[100px] bg-white rounded-full"></div>
          <div className="w-1 h-[100px] bg-gray-200 rounded-full"></div>
          <div className="w-1 h-[100px] bg-white rounded-full"></div>
          <div className="w-2 h-[100px] bg-gray-200 rounded-full"></div>
          <div className="w-2 h-[100px] bg-white rounded-full"></div>
          <div className="w-1 h-[100px] bg-gray-200 rounded-full"></div>
          <div className="w-1 h-[100px] bg-white rounded-full"></div>
          <div className="w-1 h-[100px] bg-gray-200 rounded-full"></div>
          <div className="w-0.5 h-[100px] bg-white rounded-full"></div>
          <div className="w-1 h-[100px] bg-gray-200 rounded-full"></div>
          <div className="w-1 h-[100px] bg-white rounded-full"></div>
          <div className="w-2 h-[100px] bg-gray-200 rounded-full"></div>
          <div className="w-2 h-[100px] bg-white rounded-full"></div>
          <div className="w-0.5 h-[100px] bg-gray-200 rounded-full"></div>
          <div className="w-1 h-[100px] bg-white rounded-full"></div>
          <div className="w-2 h-[100px] bg-gray-200 rounded-full"></div>
        </div>
        <div className="flex justify-center mt-2">
          <div className="h-4 w-20 bg-gray-200 rounded-full"></div>
        </div>
        <span className="sr-only">Loading Barcode...</span>
      </div>
      <PrinterTest/>
    </main>
  );
}
