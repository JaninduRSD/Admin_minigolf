import React from 'react'
import Chart from '../../Components/Chart/Chart'
import EventChart from '../../Components/EventsChart/EventChart'
import Ratings from '../../Components/Ratings/Ratings'

export const Analitics = () => {
  return (
    <div>
      <div>
          <Chart/>
      </div>
      <div className='mt-5'>
          <EventChart/>
      </div>
      <div className='mt-5'>
        <Ratings/>
      </div>
    </div>
  )
}
export default Analitics;
