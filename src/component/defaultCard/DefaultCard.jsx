import React from "react";
import "./defaultCard.css";

function DefaultCard ({item,handleClick}){


    
 return (
     <div className="dcardContainer" onDoubleClick={() => handleClick(item)}>
         <img src ={item.albumUrl} alt="" className="dcardImg"/>
         <div className="dcardName">{item.title}</div>
         <div className="dcardArtist">{item.artist}</div>
     </div>
 )
}

export default DefaultCard;