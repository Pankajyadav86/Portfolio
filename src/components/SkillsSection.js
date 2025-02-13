import React, {useState,useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import './SkillsSection.css';

const SkillCard =({skill,percentage,Lastweek,LastMonth})=>{

    const [progress,setProgress]=useState(0);
    const {ref,inView}=useInView({

        triggeerInce:true,
        threshold:0.1,
    });

    useEffect(()=>{
        if(inView){
            const timer= setInterval(()=>{
                if(progress<percentage){
                    setProgress(prevProgress => Math.min(prevProgress+1,percentage));

                }else{
                    clearInterval(timer);
                }
            },20);

            return ()=> clearInterval(timer);
        }
    }, [progress,percentage,inView]);

    return (
        <div ref={ref} className='skill-card'>
            <h3>{skill}</h3>
            <div className='progress-circle' style={{'--percentage':progress}}>

                <span className='percentage'>{progress}%</span>
            </div>
            <div className='skill-stats'>
                <div className='stat'>
                    <span className='stat-value'>{Lastweek}</span>
                    <span className='stat-label'>Last week</span>
                </div>
                <div className='stat'>
                    <span className='stat-value'>{LastMonth}</span>
                    <span className='stat-label'>Last Month</span>
                </div>
            </div>
        </div>
    )
};



const SkillsSection=()=>{
    const skills=[
        {skill :"Javascript", percentage:95,Lastweek:28,LastMonth:60},
        {skill :"CSS", percentage:98,Lastweek:28,LastMonth:60},
        {skill :"HTML", percentage:99,Lastweek:28,LastMonth:60},
        {skill :"React", percentage:85,Lastweek:28,LastMonth:60},
        {skill :"Java", percentage:95,Lastweek:28,LastMonth:60},
        {skill :"jquery", percentage:95,Lastweek:28,LastMonth:60},
        {skill :"Express", percentage:95,Lastweek:28,LastMonth:60},
    ];

    return (
        <div className='skills-section'>
            <h4 className='section-subtitle'>SKILLS</h4>
            <h2 className='section-title'>My Skills</h2>
            <p className='section-description'>
            I specialize in crafting dynamic and responsive web applications using a versatile tech stack. My expertise includes:
            <br></br>

            JavaScript – Proficient in writing clean, efficient, and scalable code for interactive web applications.
            React – Skilled in building modern, component-based UIs with React, ensuring seamless user experiences.
            <br></br>
            CSS & HTML – Strong grasp of styling and structuring web pages with CSS and HTML, creating visually appealing and responsive designs.
            jQuery – Experienced in using jQuery for DOM manipulation, animations, and enhancing user interactions.
            Express.js – Adept at developing robust backend applications and APIs with Express, ensuring smooth server-side operations.
            <br></br>
            Java – Knowledgeable in Java for backend development, object-oriented programming, and application logic.
            I am passionate about continuous learning and staying updated with the latest industry trends to deliver high-quality solutions. 🚀
            </p>

            <div className='skills-container'>
                {skills.map((skill,index)=>(
                    <SkillCard key={index} {...skill}/>
                ))}
            </div>
        </div>
    )
};


export default SkillsSection;
