import React from 'react';

import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

export default function PerformanceChart() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Attendance (%)',
        data: [88, 92, 85, 90, 87],
        backgroundColor: '#3B82F6'
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }

  return (
    <div className="bg-white rounded shadow p-4">
      <p className="font-semibold text-gray-700 mb-2">Attendance Overview</p>
      <Bar data={data} options={options} />
    </div>
  )
}