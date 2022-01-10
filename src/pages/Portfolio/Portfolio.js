import React from 'react'
import './Portfolio.css';
import {Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid,Grow,Tab,Tabs, Typography} from "@material-ui/core";
import resumeData from 'utils/resumeData';
import { useState } from "react";

const Portfolio = () => {
  
  const [tabvalue, setTabValue] = useState("All");

 
 
 
 
 return (
        <Grid container className='section pb_45 '>
           {/*title */}
            <Grid item className='section_title mb_30'>
            <span></span>
            <h6 className='section_title_text'>Portfolio</h6>
            </Grid>


            {/* tabs*/}
            <Grid item xs={12}>
                <Tabs
                 value={tabvalue}
                 indicatorColor='white'
                 className='custom_tabs'
                 onChange={(event,newvalue)=> setTabValue(newvalue)}>
                  <Tab 
                  label="All"
                  value="All"
                  className={
                      tabvalue== "All"  ? "customTabs_item active" : "customTabs_item"
                      }
                      />
                
               {[...new Set(resumeData.projects.map((item)=> item.tag))].map(
                   (tag)=>(
                       <Tab
                       label={tag}
                       value={tag}
                       className={
                        tabvalue=="All" 
                        ? "customTabs_item active"
                         : "customTabs_item"
                       }
                       />
                   )
                )}
                </Tabs>
            </Grid>

            {/* projects*/}
            <Grid item xs={12}>
            <Grid container spacing={2}>
               {resumeData.projects.map((projects)=>(
                   <>
                   {tabvalue == projects.tag || tabvalue == "All" ? (
                   <Grid item xs={12} sm={6} md={4} lg={3}>
                       <Grow in timeout={1000}>
                        <Card className='customCard'>
                            <CardActionArea>
                                <CardMedia className='customCard_image' image={projects.Image} title={projects.title}   />
                                <CardContent>
                                    <Typography className='customCard_title'>{projects.title}</Typography>
                                    <Typography variant='body2' className='customCard_description'>{projects.caption}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </Grow> 
                   </Grid>
                   ) : null}
                   </>
               ))}

            </Grid>

            </Grid>
            

            
            
            </Grid>
       
        
     );
};

export default Portfolio;
