import React from 'react';
import { AiOutlineEye, AiOutlineUser } from 'react-icons/ai'; // For icons

const StatsCard = () => {
  return (
    <div className=" gap-4 grid-cols-1 sm:grid-cols-2 w-full mx-auto flex flex-col">
      {/* Visitors Card */}
      <div className="p-6 bg-color3 text-black rounded-2xl shadow-md flex justify-between items-center">
        <div>
          <p className="text-sm pb-2">Visitors</p>
          <h2 className="text-4xl font-bold pb-2">92,680</h2>
          <p className="text-xs text-gray-900">+3,840 (26,80%)</p>
        </div>
        <div className="text-3xl">
          <AiOutlineUser />
        </div>
      </div>

      {/* Page Views Card */}
      <div className="p-6  bg-gray-900 text-lime-400 rounded-2xl shadow-md flex justify-between items-center">
        <div>
          <p className="text-sm pb-2">Page views</p>
          <h2 className="text-4xl font-bold pb-2">580.5K</h2>
          <p className="text-xs text-lime-300">+210K (16,20%)</p>
        </div>
        <div className="text-3xl">
          <AiOutlineEye />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
