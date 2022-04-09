import React, { useEffect, useRef, useState } from "react";
import "./topList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

function TopList() {
    const [width,setWidth] = useState();
    const tlRef = useRef();

    useEffect(() => {
        const total = tlRef.current.scrollWidth - tlRef.current.offsetWidth;
        setWidth(total);
    },[])

    return(
        <div className="topListContainer">
            <div className="tlHead">
                <div>Top List</div>
                <FontAwesomeIcon icon={faAngleRight} className="ficn" />
            </div>
            <motion.div className="tlItemContainer"
                ref={tlRef}
                whileTap = {{cursor: "grabbing"}}
            >
                <motion.div className = "tlInnerItemContainer"
                    drag = "x"
                    dragConstraints = {{right: 0, left: -width}}
                >
                    <div className="tlItem"></div>
                    <div className="tlItem"></div>
                    <div className="tlItem"></div>
                    <div className="tlItem"></div>
                    <div className="tlItem"></div>
                    <div className="tlItem"></div>
                    <div className="tlItem"></div>
                    <div className="tlItem"></div>
                    <div className="tlItem"></div>
                    <div className="tlItem"></div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default TopList;