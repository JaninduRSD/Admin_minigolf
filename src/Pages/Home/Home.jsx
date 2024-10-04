import React from 'react'
import Chart from '../../Components/Chart/Chart'
import Rating from '../../Components/Ratings/Ratings'
import Message from '../../Components/Messages/Messages'
import Progressbar from '../../Components/Progressbar/Progressbar'
import Calendar from '../../Components/Calendar/Calendar'
import Upcomings from '../../Components/Upcomings/Upcomings'
import Shedule from '../../Components/Shedule/Shedule'

export const Home = () => {
  return (
    <div className='flex '>
        <div className='flex w-3/4 flex-col'>
            <div className='flex flex-row'>
                <div className='w-3/5 p-2'>
                    <Chart/>
                </div>
                <div className='w-2/5 p-2 pt-7'>
                    <Rating/>
                </div> 
            </div>
            <div className='flex flex-row'>
                <div className='w-5/12 p-2'>
                    <Progressbar/>
                </div>
                <div className='w-7/12 p-2 '> 
                    <Message/>
                </div> 
            </div>
            <div className='flex flex-row'>
                <div className='w-full p-2'>
                    <Upcomings/>
                </div>
                <div className='w-7/12 p-2 '> 
                    {/* <Message/> */}
                </div> 
            </div>   
        </div>
        <div className='w-1/4 flex-col'>
            {/* {clander} */}
            <div className='p-2'>
                <Calendar/>
            </div>
            <div className='p-2 mt-5 ml-4'>
                <Shedule/>
            </div>
        </div>
    </div>
  )
}
export default Home;