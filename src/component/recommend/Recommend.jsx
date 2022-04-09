import React, { useState,useRef, useEffect } from "react";
import "./recommend.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

function Recommend() {
    const [width,setWidth] = useState(0);
    const recommendRef = useRef();

    useEffect(() => {
        const total = recommendRef.current.scrollWidth - recommendRef.current.offsetWidth;
        setWidth(total);
    },[])

    return(
        <div className="recommendContainer">
            <div className="rcHead">
                <div>Recommend</div>
                <FontAwesomeIcon icon={faAngleRight} className="ficn" />
            </div>
            <motion.div className="rcItemContainer"
             ref={recommendRef}
             whileTap = {{cursor: "grabbing"}}>
                <motion.div 
                    className="rcItemInnerContainer"
                    drag = "x"
                    dragConstraints = {{right: 0, left: -width}}>
                    <div className="items"></div>
                    <div className="items"></div>
                    <div className="items"></div>
                    <div className="items"></div>
                    <div className="items"></div>
                    <div className="items"></div>
                    <div className="items"></div>
                    <div className="items"></div>
                    <div className="items"></div>
                    <div className="items"></div>
                    <div className="items"></div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Recommend;