import React from 'react';
import Navbar from '../components/Navbar';


export default function BlogPage() {
  return (
    <div className="text-[#F3F3F3]">
        <Navbar />

      <div className="border border-red-400 m-3">
        <div className="flex flex-col justify-center items-center border border-blue-400 max-w-4xl mx-auto"> 
          <div className="w-full px-4">
            <p className="text-center">P.Diddy</p>
            <p className="text-center">Dirty code VS Clean code</p>
            
            <div className="flex justify-center space-x-4">
              <p>5min read</p>
              <p>2 October 2024</p>
            </div>

            <div className="flex justify-center">
              <img
                src="https://cdn-0.generatormix.com/%2Fimages%2Fmountain%2Fjethi-bahurani.jpg"
                alt="Image"
                className=""
              />
            </div>

            <p className="text-center">Photo by blah</p>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minima non quas esse facere odit officia sit, voluptate dicta omnis, earum eius iusto assumenda in velit. Qui officia nobis velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora repellat et blanditiis quis architecto impedit molestiae sequi in ea odio alias eius accusantium, atque aspernatur veritatis nostrum magnam. Ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, id illum eius rem consequatur exercitationem quidem numquam, repudiandae odio, et ratione aspernatur. Ex aliquam dolores quam alias non numquam ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde excepturi impedit doloribus, animi adipisci aperiam, ea error molestiae quam pariatur quia laudantium modi iure deleniti magnam ratione commodi dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore libero odio ullam iure autem ipsum, atque quae minima soluta obcaecati commodi dolorem ex porro blanditiis nobis illo voluptates. Dolor!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
