import React from "react";
import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse,faUserGroup,faQuestion} from "@fortawesome/free-solid-svg-icons";

function Footer ({homeClick,aboutClick,contactClick,about,contact}) {
    return (
        <div className="footerContainer">
            <div className="footerCt">
                <div className="footericnContainer"><FontAwesomeIcon icon={faHouse} className = {`${"footericn"} ${about || contact? "": "blue" }`} onClick={homeClick}/></div>
                <div className="footericnContainer"><FontAwesomeIcon icon={faQuestion} className = {`${"footericn"} ${about? "blue": ""}`} onClick={aboutClick}/></div>
                <div className="footericnContainer"><FontAwesomeIcon icon={faUserGroup} className = {`${"footericn"} ${contact? "blue": ""}`} onClick={contactClick}/></div>
            </div>

        </div>
    )
}

export default Footer;