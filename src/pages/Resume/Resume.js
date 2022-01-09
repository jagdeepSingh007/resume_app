import React from 'react'
import { Grid, Icon, Paper, TextField, Typography } from '@material-ui/core'
import './Resume.css';
import resumeData from 'utils/resumeData';
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import WorkIcon from "@material-ui/icons/Work"
import { TimelineContent, TimelineDot, TimelineItem } from '@material-ui/lab';
import SchoolIcon from '@material-ui/icons/School';
import CustomButton from 'components/Button/Button';




const Resume = () => {
    return (
          <>
 {/* about me*/}
<Grid container className='section pb_45 pt_45'>
    <Grid item className='section_title mb_30'>
        <span></span>
        <h6  className='section_title_text'> About Me</h6>
    </Grid>
    <Grid item xs={12} >
        <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
        </Grid> 
</Grid>
{/* education and exepriance */}
<Grid container className="section">
<Grid item className='section_title mb_30'>
        <span></span>
        <h6  className='section_title_text'> Resume</h6>
    </Grid>
    <Grid item xs={12}>
    <Grid container className='resume_timeline'>
        <Grid item sm={12} md={6}>
            < CustomTimeline title='Work Experience' icon={<WorkIcon/>}>
                {resumeData.experience.map((experience)=>(
                    <TimelineItem>
                        <CustomTimelineSeparator />
                        <TimelineContent className='timeline_content'>
                            <Typography className='timeline_title'>
                                {experience.title}
                            </Typography>
                            <Typography  variant='caption' className='timeline_date'>
                                {experience.date}
                            </Typography>
                            <Typography variant="body2" className='timeline_description'>
                                {experience.description}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                )
                )}

            </CustomTimeline>
        </Grid>
        <Grid item sm={12} md={6}>
            < CustomTimeline title='Education' icon={<SchoolIcon/>}>
                {resumeData.education.map((Education)=>(
                    <TimelineItem>
                        <CustomTimelineSeparator />
                        <TimelineContent className='timeline_content'>
                            <Typography className='timeline_title'>
                                {Education.title}
                            </Typography>
                            <Typography  variant='caption' className='timeline_date'>
                                {Education.date}
                            </Typography>
                            <Typography variant="body2" className='timeline_description'>
                                {Education.description}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                )
                )}

            </CustomTimeline>
        </Grid>

    </Grid>


    </Grid>



</Grid>
{/* services*/}
<Grid container className='section'>
    <Grid item className='section_title mb_30'>
        <span></span>
        <h6  className='section_title_text' >My Services</h6>
    </Grid>
    <Grid item xs={12}>
        <Grid container justify='space-around' spacing={3}>

            {resumeData.services.map(service=>(
                <Grid item  xs={12} sm={6} md={3}>
                    <div className='service'>
                        <Icon className='service_icon'>{service.icon}</Icon>
                        <Typography className='service_title' variant='h6'>{service.title}</Typography>
                        <Typography className='service_description' >{service.description}</Typography>

                        </div> 
                
            
        </Grid>
            ))}
            </Grid>
    </Grid>

</Grid>
{/*skiils*/}
<Grid container className='section graybg pb_45 p_50 '>
    <Grid item xs={12}>
        
        <Grid container justify='space-between'spacing={3}>
        {resumeData.skills.map((skill)=>(
        <Grid item  xs={12} sm={6} md={3}>
            <Paper elevation={0} className="skill">
                <Typography variant='h6' className='skill_title' >
                    {skill.title}
                </Typography>
                {skill.description.map((element)=>(
                    <Typography variant='body2' className='skill_description'>
                        <TimelineDot className="timeline_dot" />
                        {element}
                    </Typography>
                ))}
            </Paper>
            </Grid>
    ))}
        
            </Grid> 
    </Grid>
    </Grid>
{/* contact*/}

<Grid container className='section pt_45 pb_45'>
    {/* contact form*/}
    <Grid item xs={12} lg={7}>
        <Grid container>
            <Grid item className='section_title mb_30'>
                <span></span>
                <h6 className='section_title_text'>Contact Form</h6>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item  xs={12} sm={6}>
                        <TextField fullWidth  name='name' label="Name"/>
                    </Grid>
                    <Grid item  xs={12} sm={6}>
                        <TextField fullWidth  name='e-mail' label="E-Mail"/>
                    </Grid>
                    <Grid item  xs={12} sm={6}>
                        <TextField fullWidth  name='phone' label="Phone" multiline rows={1}/>
                    </Grid>
                    <Grid item  xs={12} sm={6}>
                        <TextField fullWidth  name='Address' label="Address" multiline rows={1}/>
                    </Grid>
                    <Grid item  xs={12} >
                        <TextField fullWidth  name='message' label="Message" multiline rows={3}/>
                    </Grid>
                    <Grid item  xs={12}>
                        <CustomButton text={'submit'} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
</Grid>


</>
);
};

export default Resume;
