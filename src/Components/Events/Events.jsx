import React, { useState } from "react";
import Comment from '../../Components/assets/Comment Icon.png';
import Edit from '../../Components/assets/Edit Icon.png';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([
    { 
      id: 1, 
      name: "Nick & Margot Wedding", 
      customer: "Artur", 
      size: "Medium", 
      image: "https://randomuser.me/api/portraits/men/1.jpg", 
      customerDetails: { firstName: "Nick", lastName: "Margot", email: "nickmargot@example.com", contact: "123-456-7890" },
      billingDetails: { address: "123 Wedding St", city: "Melbourne", state: "VIC", postalCode: "3000", paymentMethod: "Credit Card", invoiceTo: "Artur", message: "Congratulations!" },
      eventDetails: { eventAddress: "123 Celebration Hall", eventCity: "Melbourne", eventStatus: "Confirmed", postalCode: "3000", date: "2024-10-10", startTime: "4:00 PM", endTime: "10:00 PM", crowdType: "Family", eventType: "Wedding", golfType: "N/A", delivery: "Yes", supervision: "Required" }
    },
    { 
      id: 2, 
      name: "Burwood Middle School Open Day", 
      customer: "Artur", 
      size: "Medium", 
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      customerDetails: { firstName: "Sarah", lastName: "Johnson", email: "sarahj@example.com", contact: "123-456-7891" },
      billingDetails: { address: "456 School Ave", city: "Burwood", state: "VIC", postalCode: "3125", paymentMethod: "Cash", invoiceTo: "Artur", message: "" },
      eventDetails: { eventAddress: "456 School Auditorium", eventCity: "Burwood", eventStatus: "Pending", postalCode: "3125", date: "2024-10-15", startTime: "9:00 AM", endTime: "3:00 PM", crowdType: "Public", eventType: "School Open Day", golfType: "N/A", delivery: "No", supervision: "Not Required" }
    }
    // Add more events as necessary
  ]);

  const [hoveredRow, setHoveredRow] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null); // To handle dropdown details
  const [editMode, setEditMode] = useState(false); // To toggle edit mode
  const [currentEditingEvent, setCurrentEditingEvent] = useState(null); // Track which event is being edited

  const toggleDetails = (eventId) => {
    setExpandedRow(expandedRow === eventId ? null : eventId); // Toggle the dropdown for the clicked row
    setEditMode(false); // Exit edit mode when toggling
  };

  const handleEdit = (eventId) => {
    setEditMode(true); // Enable edit mode
    setCurrentEditingEvent(eventId); // Set the current event being edited
  };

  const handleInputChange = (eventId, field, value, category) => {
    const updatedEvents = events.map((event) => {
      if (event.id === eventId) {
        if (category === "customer") {
          return {
            ...event,
            customerDetails: { ...event.customerDetails, [field]: value }
          };
        } else if (category === "billing") {
          return {
            ...event,
            billingDetails: { ...event.billingDetails, [field]: value }
          };
        } else if (category === "event") {
          return {
            ...event,
            eventDetails: { ...event.eventDetails, [field]: value }
          };
        }
      }
      return event;
    });
    
    setEvents(updatedEvents); // Update the events state
  };

  return (
    <div className="w-full">
      <div className="max-w-full mx-auto">
        <h2 className="text-2xl font-bold mb-4">Enquiries</h2>
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
              <React.Fragment key={event.id}>
                <tr
                  className={`hover:bg-gray-100 cursor-pointer transition duration-200 ${hoveredRow === event.id ? "shadow-lg" : ""}`}
                  onMouseEnter={() => setHoveredRow(event.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                  onClick={() => toggleDetails(event.id)}
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
                        <button className="p-2 hover:bg-gray-200 rounded-full" onClick={() => handleEdit(event.id)}>
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
                      <span className={`py-1 px-3 rounded-full text-white ${event.size === "Large" ? "bg-green-500" : "bg-yellow-500"}`}>
                        {event.size}
                      </span>
                    )}
                  </td>
                </tr>
                {expandedRow === event.id && (
                  <tr className="bg-gray-100">
                    <td colSpan="4" className="p-4">
                      {/* Booking Details */}
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <h3 className="font-bold">Customer Details</h3>
                          {editMode && currentEditingEvent === event.id ? (
                            <div>
                              <input
                                type="text"
                                value={event.customerDetails.firstName}
                                onChange={(e) => handleInputChange(event.id, 'firstName', e.target.value, 'customer')}
                                className="block mb-2 border border-gray-300 rounded p-1"
                              />
                              <input
                                type="text"
                                value={event.customerDetails.lastName}
                                onChange={(e) => handleInputChange(event.id, 'lastName', e.target.value, 'customer')}
                                className="block mb-2 border border-gray-300 rounded p-1"
                              />
                              <input
                                type="email"
                                value={event.customerDetails.email}
                                onChange={(e) => handleInputChange(event.id, 'email', e.target.value, 'customer')}
                                className="block mb-2 border border-gray-300 rounded p-1"
                              />
                              <input
                                type="text"
                                value={event.customerDetails.contact}
                                onChange={(e) => handleInputChange(event.id, 'contact', e.target.value, 'customer')}
                                className="block mb-2 border border-gray-300 rounded p-1"
                              />
                            </div>
                          ) : (
                            <div>
                              <p>First Name: {event.customerDetails.firstName}</p>
                              <p>Last Name: {event.customerDetails.lastName}</p>
                              <p>Email: {event.customerDetails.email}</p>
                              <p>Contact: {event.customerDetails.contact}</p>
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold">Billing Details</h3>
                          {editMode && currentEditingEvent === event.id ? (
                            <div>
                              <input
                                type="text"
                                value={event.billingDetails.address}
                                onChange={(e) => handleInputChange(event.id, 'address', e.target.value, 'billing')}
                                className="block mb-2 border border-gray-300 rounded p-1"
                              />
                              <input
                                type="text"
                                value={event.billingDetails.city}
                                onChange={(e) => handleInputChange(event.id, 'city', e.target.value, 'billing')}
                                className="block mb-2 border border-gray-300 rounded p-1"
                              />
                              <input
                                type="text"
                                value={event.billingDetails.state}
                                onChange={(e) => handleInputChange(event.id, 'state', e.target.value, 'billing')}
                                className="block mb-2 border border-gray-300 rounded p-1"
                              />
                              <input
                                type="text"
                                value={event.billingDetails.postalCode}
                                onChange={(e) => handleInputChange(event.id, 'postalCode', e.target.value, 'billing')}
                                className="block mb-2 border border-gray-300 rounded p-1"
                              />
                            </div>
                          ) : (
                            <div>
                              <p>Address: {event.billingDetails.address}</p>
                              <p>City: {event.billingDetails.city}</p>
                              <p>State: {event.billingDetails.state}</p>
                              <p>Postal Code: {event.billingDetails.postalCode}</p>
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold">Event Details</h3>
                          {editMode && currentEditingEvent === event.id ? (
                            <div>
                              <input
                                type="text"
                                value={event.eventDetails.eventAddress}
                                onChange={(e) => handleInputChange(event.id, 'eventAddress', e.target.value, 'event')}
                                className="block mb-2 border border-gray-300 rounded p-1"
                              />
                              <input
                                type="text"
                                value={event.eventDetails.eventCity}
                                onChange={(e) => handleInputChange(event.id, 'eventCity', e.target.value, 'event')}
                                className="block mb-2 border border-gray-300 rounded p-1"
                              />
                              <input
                                type="text"
                                value={event.eventDetails.eventStatus}
                                onChange={(e) => handleInputChange(event.id, 'eventStatus', e.target.value, 'event')}
                                className="block mb-2 border border-gray-300 rounded p-1"
                              />
                              <input
                                type="date"
                                value={event.eventDetails.date}
                                onChange={(e) => handleInputChange(event.id, 'date', e.target.value, 'event')}
                                className="block mb-2 border border-gray-300 rounded p-1"
                              />
                              <input
                                type="time"
                                value={event.eventDetails.startTime}
                                onChange={(e) => handleInputChange(event.id, 'startTime', e.target.value, 'event')}
                                className="block mb-2 border border-gray-300 rounded p-1"
                              />
                              <input
                                type="time"
                                value={event.eventDetails.endTime}
                                onChange={(e) => handleInputChange(event.id, 'endTime', e.target.value, 'event')}
                                className="block mb-2 border border-gray-300 rounded p-1"
                              />
                            </div>
                          ) : (
                            <div>
                              <p>Event Address: {event.eventDetails.eventAddress}</p>
                              <p>Event City: {event.eventDetails.eventCity}</p>
                              <p>Status: {event.eventDetails.eventStatus}</p>
                              <p>Date: {event.eventDetails.date}</p>
                              <p>Start Time: {event.eventDetails.startTime}</p>
                              <p>End Time: {event.eventDetails.endTime}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      {editMode && currentEditingEvent === event.id && (
                        <button
                          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                          onClick={() => {
                            setEditMode(false); // Disable edit mode after saving
                            setCurrentEditingEvent(null); // Reset current editing event
                          }}
                        >
                          Save
                        </button>
                      )}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingEvents;
