import React, {useState , useEffect} from 'react';
import {FaBars,FaTimes} from "react-icons/fa";
import './Navbar.css';

const Navbar = ()=>{
    const[isOpen,setIsOpen]=useState(false);
    const[scrolled,setScrolled]=useState(false);

    const toggleMenu=()=>{
        setIsOpen(!isOpen);
    };

    const handleScroll=()=>{
        if(window.scrollY>50){
            setScrolled(true)
        }
        else{
            setScrolled(false);
        }
    }; 

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);

        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        };
    },[]);

    return(
        <nav className={`navbar ${scrolled ? 'scrolled':''}`}>

            <div className='navbar-logo'>CLYDE.</div>
            <div className={`navbar-menu ${isOpen ? 'active':''}`}>
                <a href='#home'>Home</a>
                <a href='#About'>About</a>
                <a href='#Projects'>Projects</a>
                <a href='#Service'>Service</a>
                <a href='#contact' className='contact-link'>Contact</a>
                <a href='#skills'>Skills</a>
            </div>

            <div className='hamburger' onClick={toggleMenu}>
                {isOpen ? <FaTimes/>:<FaBars/>}
            </div>

        </nav>
    );
};

export default Navbar;