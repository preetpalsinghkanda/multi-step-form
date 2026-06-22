import React from 'react'
import AllPlans from './AllPlans'

const FullPlan = () => {
  return (
    <div className='border flex flex-col gap-8'>
        <AllPlans/>

        <div className='border'>
            <p>Monthly</p>
            <span></span>
            <p>Yearly</p>

        </div>
    </div>
  )
}

export default FullPlan