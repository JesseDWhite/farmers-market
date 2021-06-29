import React, { useState } from 'react';
import Calendar from 'react-calendar';


// do we want this to be MyApp()?
function MarketCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default MarketCalendar;