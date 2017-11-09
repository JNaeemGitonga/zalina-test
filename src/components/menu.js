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
                <Link to="/aboutus" onClick={() => x.closeNav()} >About Us</Link>
                <Link to="/stylist" onClick={() => x.closeNav()}>Stylist</Link>
                <Link to="/transitions&styling" onClick={() => x.closeNav()}>Transitions and Styling</Link>
                <Link to="/gZalinaIG" onClick={() => x.closeNav()}>G. Zalina<i className="fa fa-instagram  " aria-hidden="true"></i></Link>
                <Link to="/services" onClick={() => x.closeNav()}><em>Services</em></Link>
                <Link to="/education" onClick={() => x.closeNav()}>Education</Link>
                <Link to="/location" onClick={() => x.closeNav()}>Location</Link>
                
            </div>
        )
    }
}