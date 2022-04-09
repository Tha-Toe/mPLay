import React from "react";
import Album from "../album/Album";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addAlbum1 } from '../../redux/createSlice';
import axios from "axios";


function DefaultContainer1 ({accessToken,spotifyApi,albumName,handleClick}) {

    const albumData = useSelector((state) => state.data.album1)
    const dispatch = useDispatch()



    useEffect(() => {
        if(!accessToken) return
        if(!spotifyApi) return
        setTimeout(() => {
            spotifyApi.searchTracks(albumName).then(res => {
                dispatch(addAlbum1(res.body.tracks.items.map(track => {
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
        },1000)
    },[accessToken,spotifyApi])


    return (
        <div style={{width: "100%"}} >
           <Album albumData={albumData} accessToken = {accessToken} handleClick = {handleClick}/>      
         </div>
    )
}
export default DefaultContainer1;