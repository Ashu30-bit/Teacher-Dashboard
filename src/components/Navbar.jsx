import React from 'react';

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-white shadow p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Teacher Dashboard</h1>

        <div className="flex space-x-4 border-l pl-7">
          <Link to="/calendar" className="text-gray-700 font-medium hover:text-blue-500">
            Calendar
          </Link>
          <Link to="/tasks" className="text-gray-700 font-medium hover:text-blue-500">
            Tasks
          </Link>
          <Link to="/reports" className="text-gray-700 font-medium hover:text-blue-500">
            Reports
          </Link>
        </div>
      </div>
    </div>
  );
}
