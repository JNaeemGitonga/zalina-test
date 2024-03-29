import React from 'react';
import {Link} from 'react-router-dom';
import logo from './pix/logo.png'
import './maincomponent.css';


export default class Header extends React.Component {
    
    render() {
        const openNav = (e) => {
            e.stopPropagation();
        e.preventDefault();
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            document.getElementById('hamburger-menu').style.display = 'none';
        }
        
        return (
            <div id='header'>
                
                <div id='hamburger-menu' className='link' onClick={(e) => {console.log('AFAESAEF');openNav(e)}}><p   className='hamburger link'>&#8801;</p></div>
                <Link className='head-link' to='/'><img id='logo' src={logo} alt='GZ Logo'/></Link>
            </div>
        )
    }
}

 