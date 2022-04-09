import React, { useEffect, useState } from "react";
import "./searchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {addAlbum, addSearchResult } from '../../redux/createSlice';


function SearchBar({spotifyApi,accessToken,goResult}) {
    const dispatch = useDispatch();
    const [searchKey,setSearchKey] = useState("");
    const [searchNow,setSearchNow] = useState(false);

    const searchName = (e) => {
        e.preventDefault();
        if(!searchKey) return;
        setSearchNow(true);
    }

    useEffect(() => {
        if(!searchKey) return 

        spotifyApi.searchTracks(searchKey).then(res => {
            dispatch(addSearchResult(res.body.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce(
                    (smallest, image) => {
                        if (image.height < smallest.height) return image;
                        return smallest
                    },track.album.images[0])

                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallestAlbumImage.url
                    }
            })))
        })
        goResult();
    },[searchNow,accessToken])

    return(
        <div className="searchContainer">
            <form className="seContainer" onSubmit={searchName}>
                <input type="text" placeholder="Enter song name..." className="searchBar" onChange={e => setSearchKey(e.target.value)} />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icn" />
            </form>
        </div>
    )
}

export default SearchBar;
