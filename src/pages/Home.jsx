import React from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ActionPanel from '../components/ActionPanel';
import WeeklyCalendar from '../components/WeeklyCalendar';
import TimeTable from '../components/TimeTable';
import TaskList from '../components/TaskList';
import PerformanceChart from '../components/PerformanceChart';
import TeacherInfo from '../components/TeacherInfo';
import { Grid, Container, Box } from '@mui/material';

export default function Home() {
  return (
    <div className="flex bg-gray-200">
      <Sidebar />
      <div className="flex-1">
        <Navbar />

        <div className='p-5 mt-10'>
             <ActionPanel />
        </div>
       
      
    <div className="details p-20">
      <TeacherInfo/>
    </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-4">
  <div className="bg-white p-4 rounded-lg shadow-md">
    <WeeklyCalendar />
  </div>

  <div className="bg-white p-4 rounded-lg shadow-md">
    <TaskList />
  </div>

  <div className="bg-white p-4 rounded-lg shadow-md">
    <TimeTable />
  </div>

  <div className="bg-white p-4 rounded-lg shadow-md">
    <PerformanceChart />
  </div>
</div>
      </div>
    </div>
  );
}
