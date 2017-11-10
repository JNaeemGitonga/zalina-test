import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './maincomponent.css';
import style8 from './pix/1394005744771.jpg';
import landpg2 from './pix/landpg2.jpg';
import braids from './pix/braids.jpg';

export class Main extends React.Component {
    
    render() {

        return(
            <div id='picTransitions' className='picTransitions'>
                    <div className='welcome-message'>
                        <h2>Welcome!</h2>
                        <span>I'm glad you found me! Whether you were referred or 
                        found me via a search, you found me for a reason. 

                        If you are looking to build a deeper relationship
                        with your hair, you are in the right place.</span>
                    </div>
                    
                    <div className='parent one'>
                        
                        <div className='children'>
                            <Link to='/services'><img className='landing-img' alt='other img'src={braids} /></Link>
                            
                            <h3>Organic Hair & Skin Care</h3>
                        </div>
                        <div className='children'>
                            <Link to='/stylist#gabrielle'><  img className='landing-img' alt='other img'src={landpg2} /></Link>
                            <h3>Meet Us</h3>
                        </div>
                        <div className='children'>
                            <Link to='/transitions&styling'><img className='landing-img' alt='other img'src={style8} /></Link>
                            <h3>Hair Therapy</h3>
                        </div> 
                         
                    </div>
                    
            </div>
        )
            
    }
    componentWillUnmount() {
        for (var i = 1; i < 99999; i++) {
            window.clearInterval(i);
        }
        
    }
}

export default connect()(Main)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////                                      ////////////////////////////////////////////
////////////////////////////   not going to use the logic below   / //////////////////////////////////////////
////////////////////////////   but it changes the pix using JS    //////////////////////////////////////////   
////////////////////////////   when placed inside render(){...}   ////////////////////////////////////////////

// OF COURSE THIS IS OUTSIDE THE RENDER
// constructor(props) {
//     super(props);
//     this.state = {
//         images:[style1,style2,style3,style4],
//         count:0
    
//     }
// }

// function myfunction(){
    
//                   setInterval(function(){change()},3500)
//             }
            
//             let change = (e) => {
//                 e.preventDefault()
                
//                 if (this.state.count > this.state.images.length) {
//                     this.setState({count:0})
//                 }
    
//                 this.setState({count:this.state.count + 1})
    
//             }
            
             
            
//              setTimeout(function(){myfunction(), 2000} )
    




// THE STUFF BELOW WILL DO SOMETHING...? 
        // let slideIndex = 1;
        // const plusDivs = n => {
        //     showDivs(slideIndex += n);
        //     console.log(slideIndex)
        // }
        
        // const showDivs = n => {
        //     let i;
        //     let x = document.getElementsByClassName("mySlides");
        //     if (n > x.length) {slideIndex = 1}    
        //     if (n < 1) {slideIndex = x.length}
        //     for (i = 0; i < x.length; i++) {
        //         x[i].style.display = "none";
        //         x[i].style.opacity = '0'  
        //     }
        //     x[slideIndex-1].style.display = "block"; 
        //     x[slideIndex-1].style.opacity = '';
            

        // }
        // setTimeout(function(){ showDivs(slideIndex); }, 3000);
        // setInterval(function(){ plusDivs(1); }, 6000);
        
        
        // <button onClick={()=>console.log(document.getElementsByClassName('mySlides'))}>click</button>
        //seing the above will reveal an  array of objects with a ton of information on them, good shit!

////////////////////////////                                      ////////////////////////////////////////////
////////////////////////////                                      // //////////////////////////////////////////
////////////////////////////                                      //////////////////////////////////////////   
////////////////////////////                                      ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////