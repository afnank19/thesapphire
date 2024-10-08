import React from 'react'

export default function NavbarH() {
    return (
        <div className="
            w-full  /* Ensure full width */
            bg-gray-100 
            text-black 
            dark:bg-gray-900 dark:text-white
            py-2 px-4

            grid 
            grid-cols-1 
            sm:grid-cols-3 
            gap-2 
            items-center 
            sm:justify-between
            content-center">
            
            <div className="
                logo 
                font-bold font-serif text-xl
                text-center sm:text-left sm:col-span-1">
                The Nust Sapphire
            </div>

            <div className="
                profileContainer 
                flex flex-wrap gap-2 sm:gap-2 items-center sm:justify-end sm:col-span-2 justify-center">
                
                <div className="relative w-full sm:w-52">
                    <img 
                        src="./Images/search.png" 
                        alt="Search Icon" 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5" 
                    />
                    <input 
                        className="
                            search 
                            w-full bg-slate-200 rounded-2xl pl-10 py-1
                            placeholder:text-gray-500
                            " 
                        placeholder="search" 
                    />
                </div>
                
                <div className="flex gap-2 sm:gap-3 sm:justify-end justify-center">
                    <div className="write flex gap-1">
                        <img src="./Images/pencil.png" alt="Write Icon"/>
                        <p className="content-center">Write</p>
                    </div>
                    <p className="content-center">Profile</p>
                    <button
                        className="flex items-center justify-between w-24 h-8 p-1 rounded-full transition-all duration-300 relative">
                        {/* Toggle Circle */}
                        <span className="block w-6 h-6 rounded-full transition-transform duration-300" />
                        {/* Dynamic Text */}
                        <span className="text-xs text-gray-700 dark:text-gray-200 transition-all duration-300" />
                    </button>
                </div>

            </div>
        </div>
    );
}
