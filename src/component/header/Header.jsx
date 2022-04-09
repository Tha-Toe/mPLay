import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return(
        <div className = "headerContainer">
            <div className="headerText">
                <FontAwesomeIcon icon={faCirclePlay} className="picn" /> 
                <span>your favourite music</span>
            </div>
        </div>
    )
}

export default Header;