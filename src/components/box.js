import React from 'react';
import './maincomponent.css';

export default class Box extends React.Component {
    
    render() {

        return (
            <div id='box-under-header'>
                <h3 className='header-info'>| <em>Organic Texture Tresses</em> | 
                <em>Natural Hair Care</em> | <em>Braid Professional Expert</em> | <em>Jacksonville, FL</em> |</h3>
            </div>
        )
    }
}