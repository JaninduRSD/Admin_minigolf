import React from "react";
// Choose an appropriate icon
import Icon1 from '../../Components/assets/icon500.png'

// Event data with start and end times
const events = [
  { title: "Great Ocean Road", start: "08:00", end: "16:15", color: "bg-blue-500" },
  { title: "Box Hill, South", start: "09:30", end: "12:00", color: "bg-green-500" },
  { title: "Burwood", start: "10:00", end: "17:40", color: "bg-red-500" },
];

const Timeline = () => {
  // Generate 1-hour intervals starting at 7:00 AM
  const startHour = 7;
  const endHour = 19;

  // Adjust time slots to 1-hour intervals
  const timeSlots = Array.from({ length: endHour - startHour }, (_, i) => {
    const hour = i + startHour;
    return `${hour.toString().padStart(2, "0")}:00`;
  });

  return (
    <div className="relative w-[280px] h-[600px] overflow-y-scroll">
      {/* Timeline labels and horizontal lines */}
      {timeSlots.map((time, index) => (
        <div key={index} className="absolute left-0 w-full flex items-center" style={{ top: `${index * 80}px` }}>
          <div className="w-12 text-right pr-2 text-gray-500 text-sm">{time}</div>
          <div className="flex-1 h-px w-full bg-gray-300"></div>
        </div>
      ))}

      {/* Event blocks */}
      {events.map((event, index) => {
        const startTime = new Date(`1970-01-01T${event.start}:00`);
        const endTime = new Date(`1970-01-01T${event.end}:00`);
        const duration = (endTime - startTime) / (1000 * 60); // duration in minutes
        const startTimeMinutes = (startTime.getHours() * 60 + startTime.getMinutes()) - (startHour * 60); // Start time relative to 7:00 AM
        const top = (startTimeMinutes / 60) * 80; // Calculate top based on time relative to 7:00 AM (1-hour intervals)
        const height = (duration / 60) * 80; // Calculate height based on duration

        return (
          <div
            key={index}
            className={`absolute left-16 ${event.color} bg-opacity-35 p-4 rounded-3xl shadow-md text-white`}
            style={{ top: `${top}px`, height: `${height}px`, width: "calc(100% - 64px)" }}
          >
            <div className="flex items-center">
              <img
                src={Icon1}
                className={`w-7 h-7 rounded-full ${event.color} bg-opacity-40`}
              />
              <h3 className="font-bold ml-2">{event.title}</h3>
            </div>
            <p>{event.start} - {event.end}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
