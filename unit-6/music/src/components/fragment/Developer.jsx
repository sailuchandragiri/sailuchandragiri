import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={"https://github.com/sailuchandragiri/sailuchandragiri/blob/main/profile3.png?raw=true"} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Sailu Chandragiri</h3>
                        <p>Full Stack developer</p>
                        
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Electronics and Communication Engineer, at Mother Theresa Institute of Engineering and Technology, Palamaner.</p>
                    <p>Graduating in 2021 and looking for a responsible position to gain practical knowledge</p>
                    <p>A full-stack web developer.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                 
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com/"} title={"sailu.kld"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com/home"}  title={"sailu_kld"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/sailu-chandragiri-b97aaa179/"}  title={"sailuchandragiri-"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/"}  title={"sailuchandragi07"}>
                            <Instagram/>
                        </IconButton>
                       
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;