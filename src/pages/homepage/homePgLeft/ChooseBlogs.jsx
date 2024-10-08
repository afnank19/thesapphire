import React from 'react'
import OwnCard from '../homePgRight/OwnCard'

export default function ChooseBlogs() {
    return ( 
        <div>
            <h2 className="text-lg font-bold">Student Blogs</h2>
            <div className="relative w-full flex items-center justify-between my-3">
                {/* Left Arrow */}
                <button className="left-arrow bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded-full absolute left-0 z-10">
                    &lt;
                </button>

                {/* Scrollable Categories */}
                <div className="categories-container overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide mx-10">
                    <div className="flex gap-4 items-center">
                        <p className="category-item px-4 py-2 cursor-pointer hover:bg-gray-300 rounded-full">Latest</p>
                        <p className="category-item px-4 py-2 cursor-pointer hover:bg-gray-300 rounded-full">Software</p>
                        <p className="category-item px-4 py-2 cursor-pointer hover:bg-gray-300 rounded-full">Programming</p>
                        <p className="category-item px-4 py-2 cursor-pointer hover:bg-gray-300 rounded-full">Arts</p>
                        <p className="category-item px-4 py-2 cursor-pointer hover:bg-gray-300 rounded-full">Design</p>
                    </div>
                </div>

                {/* Right Arrow */}
                <button className="right-arrow bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded-full absolute right-0 z-10">
                    &gt;
                </button>
            </div>
            <OwnCard />
            <OwnCard />
        </div>  
    ) 
}
