import React from 'react';
import {connect} from 'react-redux';
import {getIGPost} from '../actions';

import './gzalinaig.css';

export class GZalinaIG extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display:'none',
            profilePic:"",
            altProPic:'',
            name:'',
            caption:``,
            likes:``,
            link:''

        }
    }
    componentDidMount(){
        this.props.dispatch(getIGPost())
    
    }
   
    render() {
        const modalStyle = {
            display: `${this.state.display}`, /* Hidden by default */
            position: 'fixed', /* Stay in place */
            zIndex: '1', /* Sit on top */
            paddingTop: '80px', /* Location of the box */
            left: '0',
            top: '0',
            width: '100vw', /* Full width */
            height: '100vh', /* Full height */
             overflow: 'auto', /* Enable scroll if needed */
            // backgroundColor: 'rgb(0,0,0)', /* Fallback color */
            backgroundColor: 'rgba(0,0,0,.3)', /* Black w/ opacity */
            textAlign:'center',
            
        }

        const modalContent = {
            margin: 'auto',
            fontSize:'10px',
          
        }
        
        const closeStyle = {
            position: 'absolute',
            top: '-11px',
            right: '28px',
            fontWeight: 'bold',
            float:'right',
            color: '#f1f1f1',
            fontSize: '40px',
            
        }
        let igObject;
        let y = this.state
        if(this.props.feed) {
            igObject = this.props.feed.map((obj, i) => {
                let text;
                
                
                if (obj.caption.text.split(' ').length >= 15) {
                    text = `${obj.caption.text.split(' ').slice(0,15).join(' ')}...`
                }
                else{text = obj.caption.text}
            return  (
                    <div key={i} className="ig-content   ">
                           <img className='ig-pic ' src={obj.images.standard_resolution.url} 
                           alt={obj.caption.text.split(' ').slice(0,3).join(' ')}/> 
                                
                            <div className="ig-overlay" onClick={() => {
                                let pickedImage = this.props.feed[i]
                                console.log(pickedImage)
                                this.setState({
                                    display:'block',
                                    profilePic:`${pickedImage.user.profile_picture}`,
                                    altProPic:`${pickedImage.caption.text.split(' ').slice(0,3).join(' ') }`,
                                    name:`${pickedImage.user.username}`,
                                    caption:`${pickedImage.caption.text}`,
                                    likes:`${pickedImage.likes.count}`,
                                    bigPic:`${pickedImage.images.standard_resolution.url}`,
                                    link:`${pickedImage.link}`
                                })
                                document.getElementById('body').style.overflow = 'hidden';
                            }}  >
                                <div className='ig-overlay-content'>
                                    <div className='ig-text'> 
                                        <span> <em>{text}</em></span>
                                    </div>
                                        
                                </div>
                            </div>
                    </div>
            )
        })
        }
       

        return (
            <div id='ig-feed' className='center-div'>
                <div className=' ig-parent'>
                    {igObject === undefined ? 'IG feed loading ...' : igObject}
                </div>
                <div className="ig-modal" style={modalStyle}>
                
                    <div id='modalContent2' className='modal-content2'>
                        
                        <div className='modal-pic modal-inside-1'>
                            <img className='ig-modal-img' alt='big pic'  src={y.bigPic} /> 
                        </div>
                        <div className='modal-inside-2' >
                        <h4 className='close' style={closeStyle} onClick={() => {
                            this.setState({display:'none'})
                            document.getElementById('body').style.overflow = '';
                            }} > x </h4>
                            <div className='name-box'> 
                                <img className='ig-profile-pic' src={y.profilePic} alt='profile-pic' />
                                <strong><p className="name" >{y.name }</p> </strong>
                            </div>
                            <hr/>
                            <div className='caption-box'>
                                <span style={modalContent}>{y.caption}</span>
                            </div>
                            <i className="fa fa-heart " aria-hidden="true"></i> 
                            <span style={modalContent}>{y.likes} Likes<a href={y.link} target='_blank' ><i className="fa fa-instagram fa-2x" ></i></a></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        feed:state.igPost

    }
}
export default connect(mapStateToProps)(GZalinaIG)