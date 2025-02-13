import React from "react";
import './Header1.css';

const Header1=()=>{
    return (
        <header className="header-container">
            <div className="content"> 
                <h3>Hello! this is Pankaj Yadav</h3>
                <h1>Creative
                    <span>Full-Stack</span>Developer
                </h1>
                <div className="buttons">
                <button className="hire-me">Hire Me</button>
                <button className="download-cv">Download CV</button>
                </div>
            </div>
            <div className="image-container">
                <img src="./image/images/image4.jpg" alt="Designer"/>
            </div>
            

        </header>
    )
};
export default Header1;