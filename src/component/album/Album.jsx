import React, { useEffect, useRef, useState } from "react";
import "./album.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';
import DefaultCard from "../defaultCard/DefaultCard";
import SpotifyPlayer from 'react-spotify-web-playback';


function Album({albumData,accessToken,handleClick}) {

    const [width,setWidth] = useState();
    const alRef = useRef();


    useEffect(() => {
        const total = alRef.current.scrollWidth - alRef.current.offsetWidth;
        setWidth(total);
    },[albumData])


    return(
        <div className="albumContainer">
            <div className="alHead">
                <div>Album</div>
                <FontAwesomeIcon icon={faAngleRight} className="icn" />
            </div>
            <motion.div className="alItemContainer"
                ref={alRef}
                whileTap = {{cursor: "grabbing"}}
            >
                <motion.div 
                    className="alInnerItemContainer"
                    drag = "x"
                    dragConstraints = {{right: 0, left: -width}}
                >
                    {albumData? albumData.map((item,index) => <DefaultCard key={index} item = {item} handleClick={handleClick}/>) : ""}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Album;