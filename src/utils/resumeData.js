import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { AssignmentOutlined, WebOutlined } from '@material-ui/icons';
import Instagram from '@material-ui/icons/Instagram';
import GitHub from '@material-ui/icons/GitHub';
import Facebook from '@material-ui/icons/Facebook';




export default{
     name:'JD RAJPUT',
     title:'Full Stack Developer',

     Birthday:'6th may 1998',
     email:"jdofficial876@gmail.com",
     phone :9876756577,
     address:"456/5 model town mohali",


     socials:{
        Facebook: {
            link: "https://www.facebook.com/",
            text: " Jd_rajput ",
            icon: <FacebookIcon/>
        },
        Instagram: {
            link: "https://www.instagram.com/",
            text: " Coding_master ",
            icon: <InstagramIcon/>
        },
        LinkedIn: {
            link: "https://www.linkedin.com/signup",
            text: " Pure_coder45 " ,
            icon: <LinkedInIcon/>
        },
        GitHub: {
            link: "https://github.com/",
            text: " jagdeeo007 ",
            icon: <GitHubIcon/>
        }
     },
     about:["This is a good approach because the LinkedIn profile will allow any non-engineering hiring managers to get a sense of her broader skills and career history, while the GitHub profile will showcase her technical expertise and any past projects or repositories she has worked on.Since Data Analysis is a highly technical job, be sure to include technical skills, and consider a more general skills section. Do you have any of the skills below?And if you do, which ones are most relevant for the job you’re applying for?Most people list their responsibilities and duties here or even look up old job ads to copy and paste the information. Don’t do that. Instead, flip the work experience section on its head and write about what you’ve achieved – using specific outcomes and results."],

     experience:[
         {
             title:"work1",
             date:"2022-present",
             description:"f you are an HR head at a small business or a founder at a startup – you would frequently be asked for a job experience."
         },
         {
            title:"work1",
            date:"2016-2022",
            description:"f you are an HR head at a small business or a founder at a startup – you would frequently be asked for a job experience."
        },
        {
            title:"work1",
            date:"2001-2015",
            description:"f you are an HR head at a small business or a founder at a startup – you would frequently be asked for a job experience."
        }
     ],
     education:[
        {
            title:"education1",
            date:"2022-present",
            description:"f you are an HR head at a small business or a founder at a startup – you would frequently be asked for a job experience."
        },
        {
           title:"education 2",
           date:"2022-present",
           description:"f you are an HR head at a small business or a founder at a startup – you would frequently be asked for a job experience."
       },
       {
           title:" education 3",
           date:"2022-present",
           description:"f you are an HR head at a small business or a founder at a startup – you would frequently be asked for a job experience."
       }
    ],
    services:[
        {
            title:"web dev",
            description:"  i am developer from past 23 years and lest go",
            icon:<WebOutlined/>
        },
        {
            title:"Branding identity",
            description:"  i am developer from past 23 years and lest go",
            icon:<AssignmentOutlined/>
        },
        {
            title:"code like me",
            description:"  i am developer from past 23 years and lest go",
            icon:<WebOutlined/>
        },
        {
            title:"code like me",
            description:"  i am developer from past 23 years and lest go",
            icon:<WebOutlined/>
        }
       
    ],
skills:[
    {
        title:"Back-end",
        description:["react-js","javascript","typescript","java","bootstrap"]
    },
    {
        title:"front-end",
        description:["react-js","javascript","typescript","java","bootstrap"]
    },
    {
        title:"Database",
        description:["react-js","javascript","typescript","java","bootstrap"]
    },
    {
        title:"source-control",
        description:["react-js","javascript","typescript","java","bootstrap"]
    }



],

 projects: [
     {
      tag:" react",
      Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fWD1KpkdUHKr8NP32OGB2ClXHeEvaZ48qA&usqp=CAU",
      title:"react project1",
      description:"this is my project description.you wanna see it",
      caption:"hello everybosy its jd rajput this sise ",
      links:[
          {link:"http://www.google.com", icon:< Facebook />},
          {link:"http://www.google.com", icon:< Instagram />},
          {link:"http://www.google.com", icon:< GitHub />},
      ]

     },
     {
        tag:" react",
        Image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        title:"react project2",
        description:"this is my project description.you wanna see it",
        caption:"hello everybosy its jd rajput this sise ",
        links:[
            {link:"http://www.google.com", icon:< Facebook />},
            {link:"http://www.google.com", icon:< Instagram />},
            {link:"http://www.google.com", icon:< GitHub />},
        ]
  
       },
       {
        tag:" java",
        Image:"https://www.udacity.com/blog/wp-content/uploads/2021/01/Become-a-full-stack-web-developer_Blog-scaled.jpeg",
        title:"java project1",
        description:"this is my project description.you wanna see it",
        caption:"hello everybosy its jd rajput this sise ",
        links:[
            {link:"http://www.google.com", icon:< Facebook />},
            {link:"http://www.google.com", icon:< Instagram />},
            {link:"http://www.google.com", icon:< GitHub />},
        ]
  
       },
       {
        tag:" java",
        Image:"data:image/jpeg;base64,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",
        title:"php project1",
        description:"this is my project description.you wanna see it",
        caption:"hello everybosy its jd rajput this sise ",
        links:[
            {link:"http://www.google.com", icon:< Facebook />},
            {link:"http://www.google.com", icon:< Instagram />},
            {link:"http://www.google.com", icon:< GitHub />},
        ]
  
       },
       {
        tag:" php-project",
        Image:"https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ=",
        title:"php project1",
        description:"this is my project description.you wanna see it",
        caption:"hello everybosy its jd rajput this sise ",
        links:[
            {link:"http://www.google.com", icon:< Facebook />},
            {link:"http://www.google.com", icon:< Instagram />},
            {link:"http://www.google.com", icon:< GitHub />},
        ]
  
       },
       {
        tag:" php-project",
        Image:"https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/6/2020_6$largeimg_2106819729.jpg",
        title:"php project1",
        description:"this is my project description.you wanna see it",
        caption:"hello everybosy its jd rajput this sise ",
        links:[
            {link:"http://www.google.com", icon:< Facebook />},
            {link:"http://www.google.com", icon:< Instagram />},
            {link:"http://www.google.com", icon:< GitHub />},
        ]
  
       },
 ]
}