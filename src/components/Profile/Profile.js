import React from 'react'
import './Profile.css';
import profilePic from '../../assets/images/download.jpeg';
import { Typography } from "@material-ui/core";
import  CustomTimeline  from "../Timeline/Timeline";
const Profile = () => {
    return (
        <div className = "profile container_shadow ">
            <div className = "profile_name" >
                <Typography className="name">
                    Ravin
                </Typography>
                <Typography className="title">
                    Title
                </Typography>
            </div>

            <figure className = "profile_image">
                <img src = {profilePic} alt= "profile image" />
                
            </figure>

            <div className = "profile_information">
                <CustomTimeline />
                <br />
                <button>My button</button>
            </div>
             
        </div>
    )
}

export default Profile
