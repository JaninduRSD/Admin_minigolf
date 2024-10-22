import React from 'react';
import massage from '../assets/massages.png'

const messages = [
  { id: 1, name: 'Nicki Savannah', message: 'Hi there! I am Nicki and I needed to know which services do you offer.', count: 2, avatar: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Amanda Tyler', message: 'Hi there! I am Amanda and I needed to know which services do you offer.', count: 2, avatar: 'https://via.placeholder.com/50' }
];

const MessagesCard = () => {
  return (
    <div className="bg-color2 bg-opacity-45  pl-4 pr-4 pb-1 rounded-2xl shadow-md w-full ">
      <div className="flex justify-between mb-3 pt-2">
        <h2 className="text-3xl font-bold">Messages</h2>
        <button className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12M6 6h12M6 18h12" />
          </svg>
        </button>
      </div>
      <div className="space-y-4 ">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-white rounded-lg shadow p-1 pr-3 flex items-center justify-between">
            <div className="flex items-center">
              <img src={massage} alt='' className="w-11 h-11 rounded-full mr-3 ml-3" />
              <div className='pl-2 py-1 lg:pr-20'>
                <h4 className="font-semibold text-sm">{msg.name}</h4>
                <p className="text-gray-500 text-xs">{msg.message}</p>
              </div>
            </div>
            <span className="text-sm font-semibold text-gray-500">{msg.count}</span>
          </div>
        ))}
      </div>
      <div className="text-right mt-2">
        <button className="text-gray-600 hover:underline">See More..</button>
      </div>
    </div>
  );
};

export default MessagesCard;
