import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png'
import Home from '../assets/Shape.png'
import SettingsIcn from '../assets/Settings Icon.png'
import Enquiries from '../assets/Shape (2).png'
import Massages from '../assets/icon1.png'
import Settings1 from '../assets/icon3.png'
import Inventory from '../assets/icon2.png'
import Weather from '../Weather/Weather'

function Sidebar() {
  const location = useLocation();
  
  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-lightgreen rounded-2xl h-full w-[262px] flex flex-col justify-between p-4">
      {/* Header */}
      <div>
        <div className="flex items-center mb-6 ">
          <img
            src={Logo} 
            alt="Mini Golf Icon"
            className="w-full h-full"
          />
          {/* <div> */}
            {/* <h2 className="text-lg font-bold">Mini Golf Hire</h2> */}
            {/* <span className="text-sm text-gray-500">Admin Panel</span> */}
          {/* </div> */}
        </div>

        {/* New Event Button */}
        <button className="bg-darkgreen text-white w-full py-2 rounded-lg mb-6">
          New Event +
        </button>

        {/* Navigation Links */}
        <nav>
          <ul className="space-y-4">
            <li>
              <Link 
                to="/home" 
                className={`flex items-center text-sm space-x-2 py-2 px-4 rounded-lg font-medium ${isActive('/home') ? 'bg-green1 text-white' : 'text-gray-600'}`}
              >
                {/* <span className="material-icons">home</span> */}
                <img
                  src={Home} 
                  alt="Mini Golf Icon"
                  className="w-6 h-6"
                />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/enquiries" 
                className={`flex items-center text-sm space-x-2 py-2 px-4 rounded-lg font-medium ${isActive('/enquiries') ? 'bg-green1 text-white' : 'text-gray-600'}`}
              >
                {/* <span className="material-icons">description</span> */}
                  <img
                    src={Enquiries}
                    alt="Mini Golf Icon"
                    className="w-6 h-6"
                  />
                <span>Enquiries</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/analytics" 
                className={`flex items-center text-sm space-x-2 py-2 px-4 rounded-lg font-medium ${isActive('/analytics') ? 'bg-green1 text-white' : 'text-gray-600'}`}
              >
                {/* <span className="material-icons">bar_chart</span> */}
                <img
                  src={SettingsIcn}
                  alt="Mini Golf Icon"
                  className="w-6 h-6"
                />
                <span>Analytics</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/messages" 
                className={`flex items-center text-sm space-x-2 py-2 px-4 rounded-lg font-medium ${isActive('/messages') ? 'bg-green1 text-white' : 'text-gray-600'}`}
              >
                {/* <span className="material-icons">message</span> */}
                <img
                  src={Massages} 
                  alt="Mini Golf Icon"
                  className="w-6 h-6"
                />
                <span>Messages</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/inventory" 
                className={`flex items-center text-sm space-x-2 py-2 px-4 rounded-lg font-medium ${isActive('/inventory') ? 'bg-green1 text-white' : 'text-gray-600'}`}
              >
                {/* <span className="material-icons">inventory</span> */}
                <img
                  src={Inventory} 
                  alt="Mini Golf Icon"
                  className="w-6 h-6"
                />
                <span>Inventory</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/settings" 
                className={`flex items-center text-sm space-x-2 py-2 px-4 rounded-lg font-medium ${isActive('/settings') ? 'bg-green1 text-white' : 'text-gray-600'}`}
              >
                {/* <span className="material-icons">settings</span> */}
                <img
                  src={Settings1} 
                  alt="Mini Golf Icon"
                  className="w-6 h-6"
                />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer - Weather and Support */}
      <div className="space-y-4 mt-64">
        {/* Weather Widget */}
        <Weather/>
        

        {/* Support Button */}
        <button className="text-gray-600 w-full py-2">
          Support
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
