import React from 'react';
import './maincomponent.css'
import meetGabrielle from './pix/gab4.jpg'
import meetGiving from './pix/giv1.jpg';
 
export default class Stylist extends React.Component {

 
    render() {
        return (
            <div id='stylist'> 
                <div >
                    <div className='bio-box'>
                    <div id='gabrielle' className='meet-pic'> <img className='headshot' src={meetGabrielle} alt='Gabrielle Zalina' /></div>
                    <div className='bio'>
                       <h3>Gabrielle Zalina</h3> 
                        <p>
                            Gabrielle’s   immense   passion   for   waves, 
                            curls   and   coils   has   ushered   her  into   
                            a   committed   career   in   Cosmetology.   
                            Beginning   the   hair   journey   in  2006   
                            as   a   Licensed   Hair   Braider,   Gabrielle 
                            wouldn’t   stop   there   and   was  led   through   
                            Cosmetology   Training   at   the   Aveda   Institute  
                            in   2013.   As   an  Aveda   Alumni,   she   has  
                            extensively   trained   in   the   Master   levels  
                            of  Aveda   Cut   and   Color   Concepts   and   now 
                            shares   that   with   fellow   hair  professionals.
                        </p>
                        <p>
                            In   2017    Zalina   founded   Texture  
                            Masters,  offering   students   and   peers
                            full-spectrum, advanced  education of  textures,  
                            concentrating   on   braiding  and   texture   
                            styling   services.   From   the   tightest   
                            coils   to   perfectly  straight   tresses   
                            Gabrielle   is   a   hair   master,   highly  
                            fueled   by  continuing   to   deepen   her  
                            education   and   practice.  
                        </p>
                    </div>
                    </div>
                    
                    <div className='bio-box'>
                        <div className='meet-pic'><img className='headshot' src={meetGiving} alt='Giving Vega' /></div>
                        <div className='bio'>
                        <h3>Giving Vega</h3>
                            <p>
                                Hola! Thank you for taking the time to check me out!
                                I started my adventure in the beautifying world in 2009
                                and completed the Master Cosmetology program at Columbus Technical 
                                College in Columbus, GA in 2011. I worked as barber stylist where 
                                I advanced my knowledge of clipper cuts. I left the industry full time 
                                for a short period but quickly found my way back because it is 
                                what truly makes me happy. 
                            </p>
                            <p>
                                My husband and I moved to the Jacksonville area in 2016 and I took a leap 
                                of faith joining Gabrielle Zalina in 2017. I am now learning and honoring 
                                the Aveda mission in educating you on how to beautify yourself while 
                                maintaining the integrity of the world we live in. Among a variety of services, 
                                I specialize in Curl Training and Conditioning, teaching you to enjoy your curls 
                                while they reach their highest potential. I look forward to aiding you with 
                                wellness and styles for the best version of yourself.  
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


