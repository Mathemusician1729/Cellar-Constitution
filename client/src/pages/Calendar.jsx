import React, { useState, useEffect } from 'react';
import axios from 'axios'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/react/daygrid'
import timeGridPlugin from '@fullcalendar/react/timegrid'
import interactionPlugin from '@fullcalendar/react/interaction'

const Calendar = () => {
    // const [events, setEvents] = useState([])
    // useEffect(() => {
    //     axios.get("http://localhost:8080/shift")
    // })
    const events = [ // temporary events rn
        { id: 1, title: 'Food sorting', start: '2026-11-27T09:00:00', end: '2026-11-27T11:30:00' },
        { id: 2, title: 'Deliveries',   start: '2026-11-27T14:00:00', end: '2026-11-27T16:00:00' },
        { id: 3, title: 'Pantry open',  start: '2026-11-28T10:00:00', end: '2026-11-28T14:00:00' },
    ]   

    return (
	  <div> 
        <title>Calendar | Cellar Constitution</title>
        <FullCalendar 
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView='timeGridWeek'
            headerToolbar={{
                left: 'prev, next today',
                center: 'title',
                right: 'dayGridMonth, timeGridWeek, timeGridDay'
            }}
            slotMinTime="08:00:00"
            slotMaxTime="20:00:00"
            events={events}
            height='auto'
        />
      </div>
    )   
}

export default Calendar

