import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Header from '../componets/header/Header';

const CalendarChange = () => {
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = React.useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('Введите название события:');
    if (title) {
      const newEvent = {
        title,
        start,
        end,
      };
      setEvents([...events, newEvent]);
    }
  };
  return (
    <div>
      <Header />
      <div className="container">
        <div className="calendar">
          <Calendar
            localizer={localizer}
            events={events}
            selectable
            defaultDate={new Date()}
            onSelectSlot={handleSelectSlot}
            style={{ height: 500 }}
          />
        </div>
      </div>
    </div>
  );
};
export default CalendarChange;
