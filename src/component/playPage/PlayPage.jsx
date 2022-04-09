import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft,faPlay,faPause,faForward,faBackward,faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import "./playPage.css"

function PlayPage ({songData,backClick}) {
    const [alert,setAlert] = useState(true);
    const alertFeature = () => {
        setAlert(true);
    }
    const cancleClick = () => {
        setAlert(false);
    }
    return (
        <div className="playerContainer">
            <div className="player">
                <div className="playHeaderButton"><FontAwesomeIcon onClick={backClick} icon={faAngleLeft} className="pBackIcn" /></div>
                <div className="playHeader">Player</div>
            </div>
            <div className="playCardContainer">
                <div className="songInfo">
                    <div className="songName">{songData.title}</div>
                    <div className="songArtic">{songData.artist}</div>
                </div>
                <div >
                    <img src={songData.albumUrl} className="songImage" />
                </div>
                <div className="progressBar">
                    <div className="currentProgressBar"></div>
                    <div className="currentProgressCircle"></div>
                </div>
                <div className="timeTag">
                    <div>2:34</div>
                    <div>4:26</div>
                </div>
                <div className="buttonContainer">
                    <FontAwesomeIcon icon={faBackward} className="pBackIcn" />
                    <FontAwesomeIcon icon={faPlay} className="pBackIcn" onClick={alertFeature} />
                    <FontAwesomeIcon icon={faForward} className="pBackIcn" />
                </div>
            </div>
            {alert? <div className="alertContainer">
                <div className="alertContainer1"><FontAwesomeIcon onClick={cancleClick} icon={faCircleXmark} className="alertDelete" /></div>
                <div className="alertContainer2">
                    <span className="alertText">
                        <div>Play feature is not aviliable now!</div>
                        <div className="alertText2">Cause developer don't have money to buy Spotify Premium version :(</div>
                    </span>
                    <img className="alertImage" src="/joke.jpg"/>
                </div>
            </div>
            : ""}

        </div>
    )
}

export default PlayPage;