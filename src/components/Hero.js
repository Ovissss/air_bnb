import React from "react";
import group from "../images/group.png";

export default function Hero (){
    return(

        <div className="main">
            <img className="group" src={group}  alt="images of people"/>
            
            <p> 
                <h1> Online Experiences </h1>
            
            Join unique interactive activities led by one-of-a-kind hosts—all 
            without leaving home.


            </p>
            
        </div>
    )
}