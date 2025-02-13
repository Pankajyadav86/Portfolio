import React from 'react';
import './OurProject.css';

const projects =[
    {
        image:'/image/images/work-1.jpg',
        alt: 'project 1'

    },
    {
        image:'/image/images/work-2.jpg',
        alt: 'project 2'

    },
    {
        image:'/image/images/work-3.jpg',
        alt: 'project 3'

    },{
        image:'/image/images/work-4.jpg',
        alt: 'project 4'

    }
]

const OurProjects=()=>{

    return(
        <div className='OurProjects'>
            <h2>Our project</h2>
            <p>
                <h3>Task Managment app: </h3>
                <span>
                    <ul>
                        <li>Developed an interactive and resposive Task managment app for a dairy company
                        were company manage their employ data also keep the record of total good were produced and sold in the market.</li>
                        
                        <li>Frontend involve react.js and taiwind css which provide it smooth functions with full responsivness compatible with every devce screen size </li>
                        <li>Backend built on Express and java with socket.io and database involve jquery  </li>
                    </ul>   
                </span>
            </p>


            <div className='projects-grid'>
                {projects.map((project,index)=>(
                    <div key={index} className='project'>
                        <img src={project.image} alt={project.alt}/>
                    </div>
                ))}
            </div>

            
        </div>
    )
}

export default OurProjects;