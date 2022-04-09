import React, { useState } from "react";
import { useEffect } from "react";
import Album from "../album/Album";
import DefaultContainer from "../defaultContainer/DefaultContainer";
import DefaultContainer1 from "../defaultContainer/DefaultContainer1";
import DefaultContainer2 from "../defaultContainer/DefaultContainer2";
import DefaultContainer3 from "../defaultContainer/DefaultContainer3";

import Header from "../header/Header";
import Recommend from "../recommend/Recommend";
import SearchBar from "../searchBar/SearchBar";
import TopList from "../topList/TopList";
import "./home.css"
import { Routes,Route } from 'react-router-dom';
import useAuth from "../../useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import DefaultPage from "../defaultListPage/DefaultPage";
import { useSelector, useDispatch } from 'react-redux';
import PlayPage from "../playPage/PlayPage";
import Footer from "../footer/Footer";
import About from "../about/About";
import Contact from "../contact/Contact";



const spotifyApi = new SpotifyWebApi ({
    clientId : "2614e21fa9364cc690d8562664d222b3"
})

function Home ({code}) {
    const accessToken = useAuth(code);
    const searchData = useSelector((state) => state.data.searchResultRDX);
    const [getResult,setGetResult] = useState(false);
    const [songData,setSongData] = useState();
    const [showPlayPage,setShowPlayPage] = useState (false);

    const goResult = (e) => {
        setGetResult(true);
    }
    const backResult = (e) => {
        setGetResult(false);
    }
    const handleClick = (e) => {
        setSongData(e);
        setShowPlayPage(true);
    }
    const backClick = () => {
        setShowPlayPage(false);
        setSongData();
    }


    const [about,setAbout] = useState(false);
    const [contact,setContact] = useState(false);
    
    const homeClick = () => {
      setAbout(false);
      setContact(false);
    };
    const aboutClick = () => {
      setContact(false);
      setAbout(true);
    };
    const contactClick = () => {
      setAbout(false);
      setContact(true);
    };



    useEffect(() => {
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    },[accessToken])
    return(
        <>
        {getResult? 
        <DefaultPage spotifyApi = {spotifyApi} accessToken = {accessToken} backResult = {backResult}/>
        : 
        <div className="homeContainer">
            {!showPlayPage?

             <>{about ? 

             <About /> : 
             <>{contact? 

             <Contact /> : 
             <div className="homeLittleContainer"> 
             <Header />
             <SearchBar spotifyApi = {spotifyApi} accessToken = {accessToken} goResult = {goResult}/>
             <DefaultContainer accessToken={accessToken} spotifyApi = {spotifyApi} albumName = {"thriller"} handleClick = {handleClick}/>
             <DefaultContainer1 accessToken={accessToken} spotifyApi = {spotifyApi} albumName = {"Their Greatest Hits"} handleClick = {handleClick}/>
             <DefaultContainer2 accessToken={accessToken} spotifyApi = {spotifyApi} albumName = {"come on over"} handleClick = {handleClick}/>
             <DefaultContainer3 accessToken={accessToken} spotifyApi = {spotifyApi} albumName = {"tides"} handleClick = {handleClick}/>            
            </div>}</>}</>
            
            :<PlayPage songData={songData} backClick = {backClick}/>}
        </div>}
        {!showPlayPage && !getResult? <Footer homeClick = {homeClick} aboutClick ={aboutClick} about = {about} contactClick = {contactClick} contact = {contact}/> : ""}
        </>

        
    )
};

export default Home;