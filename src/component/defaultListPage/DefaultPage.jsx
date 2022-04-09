import React, { useEffect, useState } from "react";
import "./defaultPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import { useSelector,useDispatch } from 'react-redux';
import {useSearchParams} from "react-router-dom";
import DefaultItem from "./DefaultItem";
import PlayPage from "../playPage/PlayPage";




function DefaultPage ({spotifyApi,accessToken,backResult}) {
    const searchData = useSelector((state) => state.data.searchResultRDX);
    const [click,setClick] = useState(false);
    const [trackPhoto,setTrackPhoto] = useState();
    const [trackTitle,setTrackTitle] = useState();
    const [artist,setArtist] = useState();
    const [songData,setSongData] = useState();
    const playClick = async(e) => {
        setSongData(e);
        setClick(true);
    }
    const backClick = () => {
        setClick(false);
        setSongData();
    }


    return (
        <div className="dMainContainer">
            {!click ? <div className="dmainsmallcontainer">
                    <div className="dHeader">
                        <div className="dHeaderButton" onClick={backResult}><FontAwesomeIcon icon={faAngleLeft} className="ficn" /></div>
                        <div className="dHeaderName">Result</div>
                    </div>
                    <div className="dNote">
                        <div className="dNoteNumber">{searchData.length? searchData.length: "Not Result Found"}</div>
                        <div className="dNoteText">
                            <div className="dNoteTextOne">Lyrics Series</div>
                            <div className="dNoteTextTwo">{searchData.length? searchData.length + " songs for you": "loading"}</div>
                        </div>
                    </div>
                    <div className="dListContainer">
                        <div className="dListPlayAll"><span>Play All</span></div>
                        <div className="dList">
                            {searchData? searchData.map((item,index) => <DefaultItem index={index +1} key={index} item = {item} playClick = {playClick}/>) : ""}
                        </div>
                    </div>
                </div>
             : <PlayPage songData = {songData} backClick = {backClick}/> }
        </div>
    )
}

export default DefaultPage;