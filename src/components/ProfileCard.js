import React from "react";
import './ProfileCard.css';
import {FaMusic,FaPlane,FaFilm, FaFootballBall} from 'react-icons/fa';

const ProfileCard=()=>{
    return (
        <div className="profile-card">
            <div className="profile-image">
                <img src="./image/images/image4.jpg" alt="profile"></img>
            </div>

            <div className="profile-image">
                <h2 className="section-title">MY INTRO</h2>
                <h1>About Me</h1>
                <p className="bio">
                Hii! myself Pankaj Yadav, an aspiring Software Developer pursuing  B.Tech in Electrical and Electronics Engineering at NIT Andhra Pradesh. With a strong foundation in Data Structures, Algorithms, and Full-Stack Development, I am passionate about building efficient, scalable, and user-friendly applications.
                <br></br>

                I have hands-on experience with Java, Python, C++, and JavaScript, along with frameworks like React, Node.js, Spring Boot, and Express.js. My projects, including a Task Management System, Tic-Tac-Toe Game, and a Portfolio Builder, showcase my expertise in backend and frontend technologies.
                <br></br>
                Beyond coding, I am an active problem solver on platforms like LeetCode and Codeforces, constantly honing my skills. I am eager to contribute to innovative projects and collaborate with like-minded developers.
                </p>
                <div className="personal-info"></div>
                <div className="info-item">
                    <span className="label">Name:</span>
                    <span className="value">Pankaj Yadav</span>
                </div>
                <div className="info-item">
                    <span className="label">Date of birth:</span>
                    <span className="value">January 01, 2003</span>
                </div>
                <div className="info-item">
                    <span className="label">Address:</span>
                    <span className="value">Athdama ,Basti, Uttar Pradesh</span>
                </div>
                <div className="info-item">
                    <span className="label">Zip Code:</span>
                    <span className="value">272001</span>
                </div>
                <div className="info-item">
                    <span className="label">Phone:</span>
                    <span className="value">+91-8601551776</span>
                </div>
                <div className="interest">
                <div className="interest-item">
                    <FaMusic/>
                    <span>Music</span>
                </div>
                <div className="interest-item">
                    <FaFilm/>
                    <span>Movies</span>
                </div>
                <div className="interest-item">
                    <FaFootballBall/>
                    <span>Football</span>
                </div>
                <div className="interest-item">
                    <FaPlane/>
                    <span>Travel</span>
                </div>
            </div>
            </div>
            
        </div>
    );
};
export default ProfileCard;

