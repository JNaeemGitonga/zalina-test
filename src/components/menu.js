import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css';


export default class Menu extends React.Component {
    
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }
   
    render() { 

        document.getElementById('body').addEventListener('click', function(){
            if(document.getElementById('mySidenav').style.width ==='250px') {
                document.getElementById("mySidenav").style.width = "0";
                document.getElementById("main").style.marginLeft= "0";
            }
        })

        let x = this;
        return (
            <div id='mySidenav' className='sidenav'>
                <span onClick={() => x.closeNav()} className='closebtn link'>&times;</span>
                <Link to="/" onClick={() => x.closeNav()}>Home</Link>
                <Link to="/transitions&styling" onClick={() => x.closeNav()}>Transitional Styling Guide</Link>
                <Link to="/stylist" onClick={() => x.closeNav()}>Texture Masters Stylist</Link>
                <Link to="/gZalinaIG" 
                className='gZalinaIG' style={{paddingBottom:0}}
                onClick={() => x.closeNav()}>Visual Media<i className="fa fa-instagram  " aria-hidden="true"></i></Link>
                <Link to="/services" onClick={() => x.closeNav()}><em>Services</em></Link>
                
                <Link to="/education" onClick={() => x.closeNav()}>Education</Link>
                <Link to="/events" onClick={() => x.closeNav()}>Events</Link>
                
                <Link to="/aboutus" onClick={() => x.closeNav()} >About Us</Link>
                
                
                <Link to="/location" onClick={() => x.closeNav()}>Location</Link>
                
      </div>
        )
    }
}