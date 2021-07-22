import React from 'react'
import { Link } from 'react-router-dom'

const Naviagtion = () => {
    return (
        <>
        <div className='container 
        border-8 border-green-300 border-opacity-30 shadow-lg
        mx-auto flex justify-between mt-2'>
            <img
            className='w-20 border-2 rounded-2xl'
            src='https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt=''
            />
            <ul className='flex justify-center'>
              <li className='text-lg px-2'><Link to='/'>Home</Link></li>
              <li className='text-lg'><Link to='/about'>About</Link></li>
            </ul>
        </div>
        </>
    )
}

export default Naviagtion
