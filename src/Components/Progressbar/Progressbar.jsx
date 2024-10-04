import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Progress from '../assets/progressbar.png'

const GolfSetupCard = () => {
  const percentage = 85;

  return (
    <div className="bg-color1 bg-opacity-45 p-4 rounded-lg shadow-md flex items-center justify-between  ">
      <div className='pt-4'>
        <p className="text-gray-600 text-sm pb-2 ">Golf Setups</p>
        <h2 className="text-2xl font-bold mb-2 pb-2">5 Remaining</h2>
        <div className="w-20 h-20 pb-2">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: '35px',
              pathColor: '#3b82f6', // Tailwind blue-500 color
              textColor: '#FFFFFF',
              trailColor: '#FFFFFF', // Tailwind gray-300
            })}
          />
        </div>
        <p className="text-gray-500 text-xs mt-2 pb-3 pt-2">As per 05/09/2024</p>
      </div>
      <img
        src={Progress}
        alt="Golf Setup"
        className="w-40 h-40 object-contain"
      />
    </div>
  );
};

export default GolfSetupCard;
