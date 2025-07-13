import React from 'react';
import { Spreadsheet } from './components/Spreadsheet';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4">AI Spreadsheet</h1>
      <Spreadsheet />
    </div>
  );
}
