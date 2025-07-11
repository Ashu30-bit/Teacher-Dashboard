import React from 'react';
import { Link } from "react-router-dom";
import { Button, Stack } from '@mui/material';

export default function ActionPanel() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4">
      <Link
        to="/add-class"
        className="bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 w-full"
      >
        Add Class
      </Link>

      <Link
        to="/attendance"
        className="bg-green-600 text-white text-center py-2 px-4 rounded hover:bg-green-700 w-full"
      >
        Mark Attendance
      </Link>

      <Link
        to="/reports"
        className="bg-gray-800 text-white text-center py-2 px-4 rounded hover:bg-gray-900 w-full"
      >
        View Reports
      </Link>
    </div>
  );
}

