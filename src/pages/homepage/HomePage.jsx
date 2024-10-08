import React from 'react'
import HomePgLeft from './homePgLeft/homePgLeft';
import HomePgRight from './homePgRight/HomePgRight';
import NavbarH from '../../components/navbar/NavbarH';
import './homepage.css'


export default function HomePage() {
  return (
    <div className=''>
      <NavbarH />
      <div>
        <div className="body grid 
                grid-cols-1 
                sm:grid-cols-12 
                lg:grid-cols-8 
                pl-20 pr-20
                gap-5 
                bg-white dark:bg-gray-900 text-black dark:text-white">

            <div className="lhs 
                        bg-gray-200 dark:bg-gray-800 w-full 
                        sm:col-span-6 sm:col-start-1 
                        lg:col-span-3 lg:col-start-2 ">
                <HomePgLeft />
            </div>

            <div className="rhs 
                        bg-gray-200 dark:bg-gray-800 hidden 
                        sm:block max-h-[600px]
                        sm:col-span-6 sm:col-start-7 
                        lg:col-span-3 lg:col-start-5 ">
                <HomePgRight />
            </div>
        </div>
      </div>
    </div>
);
}
