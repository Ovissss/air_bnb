import React from "react"
import image12 from "./images/image 12.png" 
import star from "./images/star.png" 

export default function Card(){
    return(
     <div className="card">
     <img className="image12" src={image12} alt="Katie"/>
        <div className="card--stats">
        <img className="star" src={star} alt="star"/>
        <span>5.0</span>
        <span>(6)</span>
        <span>USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p>From $136 / person</p>
     <h1></h1>
     </div>
    )
}