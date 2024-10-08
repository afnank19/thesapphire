import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { FaPencilAlt } from "react-icons/fa";


export default function Navbar() {
  return (
    <div className='border-b-2 border-[#21548D] border-opacity-40 flex justify-between p-4 flex-wrap'>
        <form className='relative w-full md:w-64 sm:order-3 md:order-1'>
          <input
            type='text'
            placeholder='Search'
            className='py-2 pl-10 w-full bg-[#191919] rounded-lg text-gray-300'
          />
          <button
            type='submit'
            className='absolute left-2 md:top-1/2 sm:top-0 transform md:-translate-y-1/2 text-gray-400 sm: translate-y-1/2'
          >
            <AiOutlineSearch className='text-xl' />
          </button>
        </form>

        <p className='md:text-2xl text-2xl md:my-auto sm:my-4 font-bold sm:order-1 md:order-2'>The Nust Sapphire</p>

        <div className='flex items-center sm:order-2 md:order-3'>
          <button className='pl-4'>
            <FaPencilAlt />
          </button>
          <p className='pl-2'>Write</p>
          <p className='px-6'>Profile</p>
        </div>
      </div>
  )
}
