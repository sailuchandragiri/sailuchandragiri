import React from "react";
import data from "../data.json";

export const Res = () => {
    return (
        <div className="res">
            {data.restorents.map((restorent) => (
                <div className="lay">
                    <div className="resto">
                   <div className="img">
                   <img src={restorent.image_url} alt="resto_image" height="100%" width="100%"></img>
                   </div>
                   <div className="main">
                       <div className="head">
                           <div className="red">{restorent.name}</div>
                           <div><button className="rat">{restorent.rating}</button></div>
                       </div>
                       <div className="head1">
                            <div>{restorent.sub_name}</div>
                            <div>{restorent.votes}</div>
                       </div>
                       <div className="cost">
                            <div>{restorent.cost}</div>
                            <div>{restorent.reviews}</div>
                       </div>
                       <div className="time">{restorent.time}</div>
                       <div className="mode">{restorent.mode}</div>
                   </div>
                   
                </div>
                <div className="btn"><button className="btn1">{restorent.order}</button></div>
                </div>
            ))};
        </div>
    );
}