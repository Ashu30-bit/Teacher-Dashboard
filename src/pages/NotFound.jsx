import React from 'react';

import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="text-gray-600 mb-4">Page not found</p>
      <Link to="/" className="text-blue-600 underline">Go back home</Link>
    </div>
  )
}
