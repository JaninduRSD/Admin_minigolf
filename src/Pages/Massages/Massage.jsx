import React, { useState } from 'react';
import massage from '../../Components/assets/massages.png'; // Assuming this is the correct icon you want to use

const messages = [
  { id: 1, name: 'Nicki Savannah', message: 'Hi there! I am Nicki and I needed to know which services do you offer.', count: 2, avatar: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Amanda Tyler', message: 'Hi there! I am Amanda and I needed to know which services do you offer.', count: 2, avatar: 'https://via.placeholder.com/50' }
];

const MessagesCard = () => {
  const [openMessageId, setOpenMessageId] = useState(null);

  const toggleMessage = (id) => {
    setOpenMessageId(openMessageId === id ? null : id);
  };

  return (
    <div className="bg-color2 bg-opacity-45 pl-4 pr-4 pb-3 rounded-2xl shadow-md w-full">
      <div className="flex justify-between mb-3 pt-2 pb-3">
        <h2 className="text-3xl font-bold">Messages</h2>
        <button className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12M6 6h12M6 18h12" />
          </svg>
        </button>
      </div>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="bg-yellow-100 rounded-lg shadow p-1 pr-3 flex flex-col cursor-pointer"
            onClick={() => toggleMessage(msg.id)}
          >
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <img src={massage} alt='Message icon' className="w-11 h-11 rounded-full mr-3 ml-3" />
                <div className='pl-2 py-1'>
                  <h4 className="font-semibold text-lg">{msg.name}</h4>
                  <p className="text-gray-500 text-sm">
                    {openMessageId === msg.id ? msg.message : msg.message.slice(0, 50) + '...'}
                  </p>
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-500">{msg.count}</span>
            </div>
            {openMessageId === msg.id && (
              <div className="mt-4 pl-3 pr-3 mb-3  text-lg font-poppins text-black">
                <p>{msg.message}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesCard;
