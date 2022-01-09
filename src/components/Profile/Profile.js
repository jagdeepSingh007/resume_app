import React from 'react'
import './Profile.css';
import profilePic from '../../assets/images/IMG_20211014_002623_011.jpg';
import { Typography } from "@material-ui/core";
import  CustomTimeline,{CustomTimelineSeparator} from "../Timeline/Timeline";
import resumeData from 'utils/resumeData';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { TimelineContent } from '@material-ui/lab';
import { TimelineItem } from '@material-ui/lab';
import CustomButton from "../Button/Button";
import GetAppIcon from '@material-ui/icons/GetApp';

const CustomTimelineItem=({title,text,link})=>(
    <TimelineItem>
<CustomTimelineSeparator />
<TimelineContent className='timeline_content'>
 {link ? (
      <Typography className='timelineitem_text'>
      <span>{title}:</span>{""} 
       <a href={link} target="_blank">
{text}
</a>
 </Typography>

 ): (
    <Typography className='timelineItem_text'>
    <span>{title}:</span>{text}
    </Typography>
    
 )}
 
</TimelineContent>

    </TimelineItem>
); 


const Profile = () => {
    return (
        <div className = "profile container_shadow ">
            <div className = "profile_name" >
                <Typography className="name">
                    {resumeData.name}
                </Typography>
                <Typography className="title">
                    {resumeData.title}
                </Typography>
            </div>

            <figure className = "profile_image">
                <img src = {profilePic} alt= "profile image" />
                
            </figure>

            <div className = "profile_information">
                <CustomTimeline  icon={<PersonOutlineOutlinedIcon/>}>

                    <CustomTimelineItem title="name" text={resumeData.name} />
                    <CustomTimelineItem title="title" text={resumeData.title} />
                    <CustomTimelineItem title="Email" text={resumeData.email} />
  

                    {Object.keys(resumeData.socials).map((key)=>(
                  < CustomTimelineItem title={key} text={resumeData.socials[key].text} link={ resumeData.socials[key].link} />

                  ))}

                </CustomTimeline>
                <div className='button_container'  style={{display:"flex"}}>
                < CustomButton  text={'download cv'} icon={< GetAppIcon />} />
                </div>
            </div>
             
        </div>
    );
};

export default Profile;
