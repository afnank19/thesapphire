import React from 'react'
import OwnCard from './OwnCard'

export default function HomePgRight() {
    return (
        <div className="bodyRHSc">
            <h2 className="RHShdg">
                World at a Glance
            </h2>
            <div className="RHScards 
                         bg-gray-300 dark:bg-gray-900 text-black dark:text-white">
                <OwnCard />
                <OwnCard />
            </div>
            <div className="RHSinspiration">
                <h2 className="inspirationHdg">
                    Today's Inspiration
                </h2>
                <p className="inspirationQuote">"I'll not walk backward in life"</p>
                <p className="inspirationAuthor">~The Great Nainu</p>
            </div>
        </div>
    )
}
