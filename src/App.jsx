/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './index.css';
import './App.css';

function App() {
  const [date, update_Date] = useState('');
  const [day, update_Day] = useState('');

  const ddmmyyyyDate = (date_Object) => {
    const day = String(date_Object.getDate()).padStart(2, '0'); // Ensuring two digit num
    const month = String(date_Object.getMonth() + 1).padStart(2, '0'); // for 1-12 months, +1 bcz computer assumes as 0-11
    const year = date_Object.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const Day_converter = (event) => {
    const input_Date = event.target.value;
    update_Date(input_Date);

    const date_Object = new Date(input_Date);
    const week_Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const wDay = week_Days[date_Object.getDay()]; // getDay is already defined function in JS to find day
    // Day index are return on getDay, then map on String Day

    console.log(alert("See your Day"));
    update_Day(wDay);
  };

  return (
    <div className='day'>
      <h2>Finding the Day on that Date</h2>
      <input
        type="date"
        value={date}
        onChange={Day_converter}
      />
      {day && <h1>{day}</h1>}
    </div>
  );
}

export default App;