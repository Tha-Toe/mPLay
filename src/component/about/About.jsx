import React from "react";
import "./about.css";

export default function About () {
    return(
        <div className="abContainer">
            <div className="abHeader">About web</div>
            <span className="abH"><span className="abHi">Hi, </span>I'm Tha Toe,developer of this web.</span>
            <span className="abHistoryP">Web History</span>
            <p className="abHistoryC">This web used Spotify Api. 
                It took 10 days to create this web. 
                I was used HTML, Css, JavaScript, React, Nodejs, Express to create it.
                Some of the libraries included are React-Router-Dom, React-Redux-Toolkit, React-Intersection-Observer, 
                Framer-Motion, Font-awesome, Spotify-Web-Api-Node, Spotify-Web-playBack, axios.
            </p>
            <span className="abHistoryP">Why I can't play music?</span>
            <p className="abHistoryC">You can't play music because spotify need to buy premium package for song play.
                Premium package cost 9$ per month. 
                Developer was just created for personal web.
                Not business web.
                So I don't buy premium package and you can't play song.
            </p>
            <span className="abThank">Thank you for visit.</span>
        </div>
    )
}