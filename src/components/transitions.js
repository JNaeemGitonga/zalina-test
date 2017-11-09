import React from 'react';
import './maincomponent.css';
import pic1 from './pix/transitions1.JPG';
import pic2 from './pix/transitions2.JPG';
import pic3 from './pix/transitions3.JPG';
import pic4 from './pix/transitions4.JPG';
import pic5 from './pix/transitions5.JPG';
import pic6 from './pix/transitions6.JPG';
import pic7 from './pix/transitions7.JPG';
import pic8 from './pix/locrefreshen.jpg';

export default class Transitions extends React.Component {
    render() {
        return (
            <div id='transitions'>
                <div className='transition-sec one'>
                    <h3 className='transitions-question'>What are the benefits of going natural?</h3>
 
                    <p>Transitioning to natural hair is one of the most
                        liberating life decisions women today have made. 
                        No more abusing yourself on some many levels. When 
                        we embrace our hair, we embrace ourselves for who we are.
                        Natural hair is more versatile than chemically processed 
                        hair due to the fact that is has not been weakened or 
                        diluted by harsh chemicals.
                    </p>
                </div>
                <div className='transition-sec pic'>
                    <img className='transi-pix' src={pic1} alt='transitions pic' />
                </div>
                <div className='transition-sec pic'>
                    <img className='transi-pix' src={pic6} alt='transitions pic' />
                </div>
                
                
                <div className='transition-sec two'>
                    <h3 className='transitions-question'>Do I have to cut all my processed hair
                    to go natural? Are there other options?
                    </h3>
    
                    <p>No, chemically processed hair is still your hair. 
                        You can grow out of a relaxer, while maintaining
                        your length. As you transition there are many styles
                        you can wear. Cornrows, Twists, and Extensions are
                        just to name a few.
                    </p>
                </div>
                
                <div className='transition-sec three'>
                    <h3 className='transitions-question'>Will braids or cornrows cause breakage or damage to my hair?</h3>
            
                    <p>Braids have long had a reputation of breaking hair.
                        At Gabrielle Zalina, we have mastered the Art of 
                        Braiding to grow and maintain healthy hair. This is
                        the original purpose for braids. Our ancestors,
                        cornrowed and braided their hair to protect it from
                        the elements and allowed it to grow to lengths
                        unimaginable.
                    </p>
                </div>
                <div className='transition-sec pic'>
                    <img className='transi-pix' src={pic2} alt='transitions pic' />
                </div>
                <div className='transition-sec pic'>
                        <img className='transi-pix' src={pic4} alt='transitions pic' />
                </div>

                <div className='transition-sec four'>
                    <h3 className='transitions-question'>Will I be able to wear my 
                        hair straightened, once I am natural?
                    </h3>
            
                    <p>Yes, there are several different options to
                        straighten, natural hair. Depending on the curl 
                        pattern, different hair products will be used to
                        loose the curl, naturally.
                    </p>
                </div>
                
                <div className='transition-sec five'>
                    <h3 className='transitions-question'>How long will it take for
                        my hair to loc, once I start the process?
                    </h3>
            
                    <p>Normally, it takes no more than one calender year for
                        hair to fully intertwine. Looser curl patterns, may
                        take longer while tighter, kinkier curl patterns take
                        only a couple of months.
                    </p>
                </div>
                <div className='transition-sec pic'>
                    <img className='transi-pix' src={pic5} alt='transitions pic' />
                </div>
                <div className='transition-sec pic'>
                    <img className='transi-pix' src={pic3} alt='transitions pic' />
                </div>
                <div className='transition-sec six'>
                    <h3 className='transitions-question'>Are there alternatives to lengthen my locs?</h3>
            
                    <p>Yes, you can start your locs with Loc Extensions
                        which are made with 100% Human Kinky Hair. Loc
                        Extensions can also be added to established locs 
                        to add as much length as you'd like.
                    </p>
                </div>
                <div className='transition-sec eight'>
                    <h3 className='transitions-question'>Do I have to cut my locs off
                        to remove them?
                    </h3>
                    <p>Absolutely not, there is another way. Combing out your
                        locs is now a option. It is a rather lengthy process
                        but it can be done. If you would just like a different 
                        look, locs can be cut into styles such as asymmetrical
                        and layered cuts.
                    </p> 
                </div>
                
                <div className='transition-sec pic'>
                    <img className='transi-pix' src={pic8} alt='transitions pic' />
                </div>
                <div className='transition-sec pic'>
                    <img className='transi-pix' src={pic7} alt='transitions pic' />
                </div>
                <div className='transition-sec seven'>
                    <h3 className='transitions-question'> Are locs appropriate in Corporate America?</h3>
            
                    <p> Locs in Corporate America has become more accepted
                        in the recent decade. Locs can be styled and worn 
                        professionally, varying  from different lengths, styles,
                        and colors. Todays' doctors, lawyers, and executives
                        consist are wearing the own hair locked with style
                        and grace.
                        </p>
                </div>
            </div>
        )
    }
}