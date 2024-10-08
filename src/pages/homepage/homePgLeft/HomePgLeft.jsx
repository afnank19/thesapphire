import React from 'react'
import ChooseBlogs from './ChooseBlogs'
import PhotoBlogs from './PhotoBlogs'

export default function HomePgLeft() {
  return (
    <div className="bodyLHS">
        <div className="pictureArea">
            <PhotoBlogs />
        </div>
        <div className="blogsArea">
            <ChooseBlogs />
        </div>
    </div>
)
}
