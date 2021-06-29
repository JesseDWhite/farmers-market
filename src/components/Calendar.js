import React, { useState } from 'react';
import Calendar from 'react-calendar';
//import Datetime from 'react-datetime';

function MarketCalendar() {
  const [value, setDateState] = useState(new Date());
  const changeDate = (element) => {
    setDateState(element)
  }
  return (
    <React.Fragment>
      <div>
        <Calendar
          onChange={changeDate}
          value={value}
        />
      </div>
    </React.Fragment>
  );
}

export default MarketCalendar;