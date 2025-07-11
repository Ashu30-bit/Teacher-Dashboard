import React from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import './calendar.css'

export default function WeeklyCalendar() {
  return (
    <div className="bg-white rounded shadow p-4 max-h-[500px] overflow-auto">
      <p className="font-semibold text-gray-700 mb-2">Weekly Calendar</p>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        editable={true}
        selectable={true}
        height="auto"
        events={[
          { title: 'Math Class', start: '2025-07-14T10:00:00', end: '2025-07-14T11:00:00', color: '#EF4444' },
          { title: 'Staff Meeting', start: '2025-07-15T13:00:00', end: '2025-07-15T14:00:00', color: '#3B82F6' },
          { title: 'Break', start: '2025-07-16T12:00:00', end: '2025-07-16T12:30:00', color: '#10B981' }
        ]}
      />
    </div>
  )
}
