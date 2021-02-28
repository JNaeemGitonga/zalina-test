import React from 'react';
import education1 from './pix/education1.jpg';
import education2 from './pix/education2.png';
import education3 from './pix/education3.png';
import education4 from './pix/education4.png';
import education5 from './pix/education5.png';
import education6 from './pix/education6.png';
import education7 from './pix/education7.png';

export default class Education extends React.Component {
    render() {
        return (
            <div id='education'>
                <h2>Advanced Hair Education & Certification</h2>
                <div className='edu-box parent'>
                    
                    <div className='main-ed-img-box children'>
                        <img className='main-ed-img' src={education1} alt='education 1'/>
                    </div>
                    <div className='edu-text children'>
                         <h4>Today women want options! </h4>
                        <p>    
                            Today, women want to get re familiarized with their
                            own texture of hair!<br/>
                         Today women want skilled practitioners educating them and guiding them to healthy,
                            easy to manage, flourishing hair! <br/>
                        </p>
                        <p>
                          If you are a <i>trained Stylist</i>, you can give it to them!!

                            I am making it my purpose to educate as many stylists as I
                            can on how I effectively create great relationships, 
                            have long tiIf you want to master more areas of hair, have
                            flawless systems that create success again and again,
                            request a course below!
                            me repeat, satisfied clients and maintain systems and 
                            processes that just work! 
                        </p>
                    </div>
                    <div className='edu-pix-box children'> 
                        <img className='ed-img' src={education2} alt='education 2' />
                        <a 
                         target='_blank' rel="noopener noreferrer">Apply Now</a>
                    </div>
                    <div className='edu-pix-box children'> 
                        <img className='ed-img' src={education3} alt='education 3' />
                        <a 
                         target='_blank' rel="noopener noreferrer">Apply Now</a>
                    </div>
                    <div className='edu-pix-box children'> 
                        <img className='ed-img' src={education4} alt='education 4' />
                        <a 
                         target='_blank' rel="noopener noreferrer">Apply Now</a>
                    </div>
                    <div className='edu-pix-box children'> 
                        <img className='ed-img' src={education5} alt='education 5' />
                        <a  
                        target='_blank' rel="noopener noreferrer">Apply Now</a>
                    </div>
                    <div className='edu-pix-box children'> 
                        <img className='ed-img' src={education6} alt='education 6' />
                        <a 
                         target='_blank' rel="noopener noreferrer">Apply Now</a>
                    </div>
                    <div className='edu-pix-box children'> 
                        <img className='ed-img' src={education7} alt='education 7' />
                        <a 
                         target='_blank' rel="noopener noreferrer">Apply Now</a>
                    </div>
                </div>    
            </div>
        )
    }
}