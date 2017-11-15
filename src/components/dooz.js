import React from 'react';
import './maincomponent.css';
import {styles} from './styles';

export default class Dooz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:1,
            display: 'none',
            visibility: 'hidden',
            showModal: () => this.setState({display:'block'}),
            showOtherModal: () => this.setState({visibility: 'visible'})
        }
    }

    componentDidMount() {
    }

    render() {
        let y = this.state;
        let nextImg = () => {
            this.setState({count:y.count + 1})
            if (y.count > styles.length - 1) {
                this.setState({count: 1})
            }
        }

        let prevImg = () => {
            
            if (y.count  === 1) {
               this.setState({count:styles.length})
            }
            else{this.setState({count:y.count - 1})}
            
        }

        const modalStyle = {
            display: `${this.state.display}`, /* Hidden by default */
            position: 'fixed', /* Stay in place */
            zIndex: '1', /* Sit on top */
            left: '0',
            top: '0',
            width: '100vw', /* Full width */
            height: '100vh', /* Full height */
             overflow: 'auto', /* Enable scroll if needed */
            // backgroundColor: 'rgb(0,0,0)', /* Fallback color */
            backgroundColor: 'rgba(0,0,0,1)', /* Black w/ opacity */
            textAlign:'center',
            paddingTop:'45px'
            
        }


        const modalContent = {
            margin: 'auto',
            display: 'block',
            color: '#f1f1f1',
            textAlign: 'center'
        }
        
        const closeStyle = {
            color: '#f1f1f1',
            fontWeight: 'bold',
            textDecoration:'underline',
            position:'relative',
            float:'right',
            top:'-62px', 
            right:'30px',
        }

        return (
            <div id='dooz-slideshow'>
                <div className="content  display-container">
                    <div  className='slides'  >
                        <img className='doo-img'
                       
                        alt={styles[y.count - 1].style} 
                        src={styles[y.count -1].pic} style={{width:"80%",
                         height:'auto',border:'5px solid black'}}/>
                            
                        <div className="overlay" onClick={() => this.setState({display:'block'})}  >
                            <div className='overlay-content'>
                                <div className='text'> <h3 className='style-name'>{styles[y.count - 1].style}</h3> <br/>
                                {styles[y.count-1].modalContent}<br/>
                                {styles[y.count-1].extra}
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                    <button className="w3-button w3-black w3-display-left animated-left bounce-left" onClick={(e) => {
                        e.preventDefault()
                        prevImg()
                        }}  >&#10094;</button>
                    <button className="w3-button w3-black w3-display-right animated bounce" onClick={(e) => {
                        e.preventDefault()
                        nextImg()
                        }} >&#10095;</button>
                </div>

                <div className='content'>
                    <h3 className='additional-service'>Consultations & Bookings</h3>
                    <h5  className='additional-service'> All   services   include   an 
                          Aveda   Wellness   with   yummy 
                          shampoo   cleansing  and   conditioning   treatments. </h5>
                    <ul>
                        <li>
                            Our Extension Styles require Salon or Virtual Consultations.
                            Extension are provided for all braid styles.
                            A hair fee will be added to your total service 
                            based on your particular style of choice.
                        </li>
                        
                        <li>
                            Example:   Mid   back   Two   Strand   Twist   Style   $225   
                            (Hair   Fee   $25)= Total   $250
                        </li>
                        <li>
                            Deposits   are   also   collected-   up   to   50%   of   your  
                             Service   due   at   booking.  Please   see   a   member   of 
                               The   Willow   Team   for   more   info. 
                        </li>
                    </ul>
                    <h3 className='additional-service'>Additional Services</h3>
                    <ul>
                        <li>Braid/Extension Removal | $60/hr</li>
                        <li>Botanical Treatment | Improve damaged and dry hair up to 86% | +$15</li>
                           <li>Glossing Treatment | Add amazing shine to dull looking hair | +$15</li>
                        <li>Eyebrow Shaping | $15</li>
                        <li>At-Home Care Lesson | Styling techniques at home
                            mastering products that bring you amazing results every time | $60/hr</li>
                        <li>Mommy Does my Hair Lesson | How to easily manage, detangle and style
                            your child's | $60/hr</li>
                    </ul>
                </div>

                <div className="modal" style={modalStyle}>
                    <div className='modal-content'>
                        <h1 className='close' style={closeStyle} onClick={() => this.setState({display:'none'})} > x </h1>
                        <h1 className="modal-content style-heading" style={modalContent}>{styles[y.count - 1].style}</h1>
                        <img className='modal-img' alt={styles[y.count - 1].style}  src={styles[y.count -1].pic} /> 
                        <h3 className='style-info'> {styles[y.count-1].modalContent} </h3>
                        <h3 className='style-info'>  {styles[y.count-1].extra}</h3>
                    </div>
                </div>    
            </div>
        )
    }
}
