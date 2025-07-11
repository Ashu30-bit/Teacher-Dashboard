import React from 'react';

export default function TaskList() {
  return (
    <div className="bg-white rounded shadow p-4">
      <p className="font-semibold text-gray-700 mb-2">Task List</p>
      <input type="text" placeholder="Search task..." className="border rounded px-2 py-1 text-sm w-full mb-2" />
      <div className="text-sm text-gray-500">Tasks will appear here</div>
    </div>
  )
}