import React from 'react'
import "./TopPicks.css"

const TopPicks = () => {
    return (
        <div className="top_picks_container">
            <img className="image" src="https://ik.imagekit.io/dunzo/web-assets/images/d4b.jpg?tr=w-488,h-326,cm-pad_resize" />
            <img className="image rest" src="https://ik.imagekit.io/dunzo/web-assets/images/grocery.jpg?tr=w-488,h-326,cm-pad_resize"/>
            <img className="image rest" src="https://ik.imagekit.io/dunzo/web-assets/images/restaurants.jpg?tr=w-488,h-326,cm-pad_resize"/>
            <img className="image rest" src="https://ik.imagekit.io/dunzo/web-assets/images/send-packages.jpg?tr=w-488,h-326,cm-pad_resize" />
        </div>
    )
}

export default TopPicks;