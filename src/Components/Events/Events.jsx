import React, { useState } from "react";
import CommentIcon from '../../Components/assets/Comment Icon.png'; // Example path
import EditIcon from '../../Components/assets/Edit Icon.png'; // Example path
import DownIcon from '../../Components/assets/down-arrow.png'; // Path to the down arrow icon
import UpIcon from '../../Components/assets/upload.png';

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
      name: "Nick & Margot Wedding", 
      customer: "Artur", 
      size: "Medium", 
      image: "https://randomuser.me/api/portraits/men/1.jpg", 
      customerDetails: { firstName: "Nick", lastName: "Margot", email: "nickmargot@example.com", contact: "123-456-7890" },
      billingDetails: { address: "123 Wedding St", city: "Melbourne", state: "VIC", postalCode: "3000", paymentMethod: "Credit Card", invoiceTo: "Artur", message: "Congratulations!" },
      eventDetails: { eventAddress: "123 Celebration Hall", eventCity: "Melbourne", eventStatus: "Confirmed", postalCode: "3000", date: "2024-10-10", startTime: "4:00 PM", endTime: "10:00 PM", crowdType: "Family", eventType: "Wedding", golfType: "N/A", delivery: "Yes", supervision: "Required" }
    }
  ]);

  const [expandedRow, setExpandedRow] = useState(null);   

  const toggleDetails = (eventId) => {
    setExpandedRow(expandedRow === eventId ? null : eventId);
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
                  className="hover:bg-gray-100 cursor-pointer transition duration-200"
                  onClick={() => toggleDetails(event.id)}
                >
                  <td className="py-3 px-4 flex items-center">
                    {index + 1}
                    <img
                      src={expandedRow === event.id ? UpIcon : DownIcon}
                      alt="Toggle Details"
                      className="ml-2 w-3 h-3"
                    />
                  </td>
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4 flex items-center">{event.name}</td>
                  <td className="py-3 px-4">{event.customer}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="p-2 hover:bg-gray-200 rounded-full">
                        <img src={EditIcon} alt="Edit" className="w-5 h-5 rounded-full" />
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded-full">
                        <img src={CommentIcon} alt="Comment" className="w-5 h-5 rounded-full" />
                      </button>
                    </div>
                  </td>
                </tr>
                {expandedRow === event.id && (
                  <tr className="bg-gray-100">
                    <td colSpan="4" className="p-4">
                      {/* Customer Details Section */}
                      <h3 className="text-lg font-bold mb-2">Customer Details</h3>
                      <div className="space-y-4 bg-gray-200 p-4 rounded-md shadow-lg">
                        <div className="flex space-x-4">
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">First Name:</label>
                            <input
                              type="text"
                              value={event.customerDetails.firstName}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Last Name:</label>
                            <input
                              type="text"
                              value={event.customerDetails.lastName}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Email:</label>
                            <input
                              type="text"
                              value={event.customerDetails.email}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Contact:</label>
                            <input
                              type="text"
                              value={event.customerDetails.contact}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Billing Details Section */}
                      <h3 className="text-lg font-bold mt-4 mb-2">Billing Details</h3>
                      <div className="space-y-4 bg-gray-200 p-4 rounded-md shadow-lg">
                        <div className="flex space-x-4">
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Address:</label>
                            <input
                              type="text"
                              value={event.billingDetails.address}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">City:</label>
                            <input
                              type="text"
                              value={event.billingDetails.city}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">State:</label>
                            <input
                              type="text"
                              value={event.billingDetails.state}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Postal Code:</label>
                            <input
                              type="text"
                              value={event.billingDetails.postalCode}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Payment Method:</label>
                            <input
                              type="text"
                              value={event.billingDetails.paymentMethod}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Invoice To:</label>
                            <input
                              type="text"
                              value={event.billingDetails.invoiceTo}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Message:</label>
                            <input
                              type="text"
                              value={event.billingDetails.message}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Event Details Section */}
                      <h3 className="text-lg font-bold mt-4 mb-2">Event Details</h3>
                      <div className="space-y-4 bg-gray-200 p-4 rounded-md shadow-lg">
                        <div className="flex space-x-4">
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Event Address:</label>
                            <input
                              type="text"
                              value={event.eventDetails.eventAddress}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Event City:</label>
                            <input
                              type="text"
                              value={event.eventDetails.eventCity}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Event Status:</label>
                            <input
                              type="text"
                              value={event.eventDetails.eventStatus}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Postal Code:</label>
                            <input
                              type="text"
                              value={event.eventDetails.postalCode}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Date:</label>
                            <input
                              type="text"
                              value={event.eventDetails.date}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Start Time:</label>
                            <input
                              type="text"
                              value={event.eventDetails.startTime}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">End Time:</label>
                            <input
                              type="text"
                              value={event.eventDetails.endTime}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Crowd Type:</label>
                            <input
                              type="text"
                              value={event.eventDetails.crowdType}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Event Type:</label>
                            <input
                              type="text"
                              value={event.eventDetails.eventType}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Delivery:</label>
                            <input
                              type="text"
                              value={event.eventDetails.delivery}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <div className="flex items-center w-1/2">
                            <label className="text-gray-700 font-bold w-1/3">Supervision:</label>
                            <input
                              type="text"
                              value={event.eventDetails.supervision}
                              readOnly
                              className="border border-gray-300 rounded px-2 py-1 w-2/3"
                            />
                          </div>
                        </div>
                      </div>

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
