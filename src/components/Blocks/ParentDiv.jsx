import React from 'react'
import Calendar from '../otherElements/Calendar'
import Clock from '../otherElements/Clock'
import MoodTracker from '../otherElements/MoodTracker'


const ParentDiv = () => {
    return (
        <>
            <div className="h-135 flex flex-row justify-center items-center w-4/5">
                <div className='h-135 gap-y-5 flex flex-col justify-center items-center w-1/3'>
                <Clock/>
                <Calendar/>
                 <div></div>
                </div>
                <div className='h-135 flex flex-col justify-center items-center w-1/3 bg-pink-500'>1</div>
                <div className='h-135 flex flex-col justify-center items-center w-1/3 bg-gray-500'>
                <MoodTracker/>
                </div>
            </div>
        </>
    )
}

export default ParentDiv