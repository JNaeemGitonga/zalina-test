import React from 'react';
import './maincomponent.css';
import style1 from './pix/style1.jpg';
import style2 from './pix/style2.jpg';
import style3 from './pix/style3.jpg';
import style4 from './pix/style4.jpg';

export default class AboutUs extends React.Component {
    render() {
        return ( 
            <div id='about-us'>
                <div className='about-us'>
                    <div id='changes'>
                            <img className='mySlides' src={style1} alt='style1' />
                            <img className='mySlides' src={style2} alt='style2' />
                            <img className='mySlides' src={style3} alt='style3' />
                            <img className='mySlides' src={style4} alt='style4' />
                    </div>
                </div>
                <div className='about-us-info'>
                    <h3>About Us</h3>
                    <span> For 11 years now,
                    demo site has been working with women near and far to 
                    develop a deep understanding of their hair whether they
                    are relaxed or natural or transitioning from chemical hair
                        treatments/severely damaged or balding hair.</span><br/>

                    <p>Please look around....
                    If you are in the Northeast Georgia/Southeast Georgia area,
                    you are welcome to setup a consultation/appointment to come 
                    in for an In-Depth Hair Analysis to build a Holistic Hair at 
                    home Solutions guide, made just for you! If you are anywhere 
                    else on the globe, please visit our Distant Consultations
                    page and setup a consult. You will learn a great deal and 
                    make your life easier, managing your hair.</p><br/>


                    <h3>What is Holistic Hair Care?</h3>

                    <p>Holistic Hair Care is taking the whole body system into
                    consideration when nurturing and styling your hair.<br/> 

                    No persons hair is separate from their body systems.
                    At demo site Holistic Hair Care we address your
                    hair with science and in-depth understanding of how hair
                    works and how the environment effects it.<br/> 

                    We offer a full-range of services with a holistic
                    approach that include Blow-outs, braids, loc care,
                    extensions, permanent hair straightening, cuts and
                    color. </p>
                </div>
            </div>
        )
    }
}