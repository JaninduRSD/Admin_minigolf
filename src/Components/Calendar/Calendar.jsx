import React, { useState, useEffect } from "react";

const Calendar = () => {
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const [date, setDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(date.getFullYear());
  const [currMonth, setCurrMonth] = useState(date.getMonth());

  const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    
    let days = [];

    // Add previous month days
    for (let i = firstDayofMonth; i > 0; i--) {
      days.push(
        <li key={`prev-${i}`} className="text-gray-400">{lastDateofLastMonth - i + 1}</li>
      );
    }

    // Add current month days
    for (let i = 1; i <= lastDateofMonth; i++) {
      const isToday =
        i === date.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "bg-color4 text-white rounded-full"
          : "";
      days.push(
        <li key={`curr-${i}`} className={`${isToday} hover:bg-gray-200 rounded-full`}>
          {i}
        </li>
      );
    }

    // Add next month days
    for (let i = lastDayofMonth; i < 6; i++) {
      days.push(
        <li key={`next-${i}`} className="text-gray-400">{i - lastDayofMonth + 1}</li>
      );
    }

    return days;
  };

  const handlePrevNext = (direction) => {
    const newMonth = direction === "prev" ? currMonth - 1 : currMonth + 1;
    if (newMonth < 0 || newMonth > 11) {
      const newDate = new Date(currYear, newMonth, new Date().getDate());
      setDate(newDate);
      setCurrYear(newDate.getFullYear());
      setCurrMonth(newDate.getMonth());
    } else {
      setCurrMonth(newMonth);
    }
  };

  useEffect(() => {
    renderCalendar();
  }, [currMonth]);

  return (
    <div className="w-[325px] bg-white rounded-lg  p-5">
      <header className="flex justify-between items-center">
        <h2 className="text-xl font-medium font-poppins">{`${months[currMonth]} ${currYear}`}</h2>
        <div className="flex space-x-4">
          <span
            onClick={() => handlePrevNext("prev")}
            className="cursor-pointer text-gray-600 text-2xl hover:bg-gray-200 p-2 rounded-full"
          >
            &lt;
          </span>
          <span
            onClick={() => handlePrevNext("next")}
            className="cursor-pointer text-gray-600 text-2xl hover:bg-gray-200 p-2 rounded-full"
          >
            &gt;
          </span>
        </div>
      </header>
      <ul className="grid grid-cols-7 text-center font-poppins text-sm ">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <li key={day} className="font-medium text-gray-700">
            {day}
          </li>
        ))}
      </ul>
      <ul className="grid grid-cols-7 gap-y-5 mt-2 text-center font-poppins text-sm">
        {renderCalendar()}
      </ul>
    </div>
  );
};

export default Calendar;
