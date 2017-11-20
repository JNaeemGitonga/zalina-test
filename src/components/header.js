import React from 'react';
import {Link} from 'react-router-dom';
import logo from './pix/logo.png'
import './maincomponent.css';


export default class Header extends React.Component {
    
    render() {
        const openNav = () => {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            document.getElementById('hamburger-menu').style.display = 'none';
        }
        
        return (
            <div id='header'>
                
                <p onClick={() => openNav()} id='hamburger-menu' className='hamburger link'>&#9776;</p>
                <Link className='head-link' to='/'><img id='logo' src={logo} alt='GZ Logo'/></Link>
            </div>
        )
    }
}

 