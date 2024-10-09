import React, { useState } from "react";
import Comment from '../../Components/assets/Comment Icon.png';
import Edit from '../../Components/assets/Edit Icon.png';
import { Link } from 'react-router-dom'; // Import Link for navigation

const UpcomingEvents = () => {
  const events = [
    { id: 1, name: "Nick & Margot Wedding", customer: "Artur", size: "Medium", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Burwood Middle School Open Day", customer: "Artur", size: "Medium", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, name: "Box Hill Nursery School Event", customer: "Artur", size: "Medium", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 4, name: "Melbourne Crown Year-End Event", customer: "Marta", size: "Large", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  ];

  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <div className=" w-full">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <table className="table-auto w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="text-left">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Event Name</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr
                key={event.id}
                className={`hover:bg-gray-100 cursor-pointer transition duration-200 ${
                  hoveredRow === event.id ? "shadow-lg" : ""
                }`}
                onMouseEnter={() => setHoveredRow(event.id)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4 flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="appearance-none h-5 w-5 border border-gray-300 rounded-full bg-white checked:bg-gray-600 checked:border-transparent focus:outline-none"
                  />
                  <span>{event.name}</span>
                </td>

                <td className="py-3 px-4">
                  {hoveredRow === event.id ? (
                    <img
                      src={event.image}
                      alt="Customer"
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <span>{event.customer}</span>
                  )}
                </td>

                <td className="py-3 px-4">
                  {hoveredRow === event.id ? (
                    <div className="flex space-x-2">
                      <button className="p-2 hover:bg-gray-200 rounded-full">
                        <img
                          src={Edit}
                          alt="Edit"
                          className="w-5 h-5 rounded-full"
                        />
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded-full">
                        <img
                          src={Comment}
                          alt="Comment"
                          className="w-5 h-5 rounded-full"
                        />
                      </button>
                    </div>
                  ) : (
                    <span
                      className={`py-1 px-3 rounded-full text-white ${
                        event.size === "Large"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {event.size}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* See More button below the table */}
        <div className="mt-1 flex justify-end">
          <Link to="/enquiries">
            <button
              className=" text-black px-4 py-2 rounded-lg  "
            >
              See More...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
