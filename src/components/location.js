import React from 'react';
import './maincomponent.css';

export default class Location extends React.Component {
    render() {
        return (
            <div id='map'>
                <div className='location-info parking'>
                    <p>Located in the San Jose Plaza just off I-295, 
                        between Scott Mill Ln and Claire Ln.
                         We are located in the same plaza as the Bonefish Grill.
                        Parking is complementary and plentiful in the San Jose Plaza.</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.1261932511625!2d-81.63127505008639!3d30.176388981745372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5c936e11b8113%3A0xdda23adf1e2c17fe!2sWillow+Organic+Salon+and+Day+Spa!5e0!3m2!1sen!2sus!4v1509629767578"
                   title='map'   frameBorder="0" style={{border:'0'}} allowFullScreen></iframe>
                <div >
                    <div className='location-info'>
                        <h3>Visit Us</h3>
                        <p>10950 San Jose Blvd #40,<br/>
                            Atlanta Georgia 32223</p>

                    </div>
                    <div className='location-info hours'>
                        <h3>Hours</h3>
                        <p>Tuesday- Friday    9am-8pm<br/>
                            Saturday                9am-5pm</p>
                    </div>
                </div>
            </div>
        )
    }
}