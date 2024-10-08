import React from 'react'

export default function PhotoBlogs() {
    return ( 
        <div>
            <h2 className="text-lg font-bold mb-1">
                Featured Photo of the Day
            </h2>
            <img 
                className="heroimage rounded-lg" 
                src="https://images.pexels.com/photos/11239157/pexels-photo-11239157.jpeg" 
                alt="Scenic landscape" width={400}
            />
            <p className="italic text-sm my-2">Photo from Pexels</p>
        </div>  
    );
    
}
