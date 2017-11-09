import React from 'react';
import {connect} from 'react-redux';
import {getIGPost} from '../actions';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AboutUs from './aboutus';
import Box from './box';
import Dooz from './dooz';
import Education from './education';
import Header from './header';
import Location from './location';
import Main from './main';
import Menu from './menu';
import Stylist from './stylist';
import GZalinaIG from './gzalinaig';
import Transitions from './transitions';

export class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(getIGPost())
    }
    
    render() {
        let _scrollToTop = () => {
            console.log('working')
            document.getElementById('body').scrollTop
        }
        return (
            <Router >
                <div className='App'>
                    <Header />
                    <Box />
                    <Menu />
                    
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/aboutus' component={AboutUs} />
                    <Route exact path='/services' component={Dooz} />
                    <Route exact path='/location' component={Location} />
                    <Route exact path='/gZalinaIG' component={GZalinaIG} />
                    <Route exact path='/stylist' component={Stylist} />
                    <Route exact path='/transitions&styling' component={Transitions} />
                    <Route exact path='/education' component={Education} />
                      
                </div>
            </Router>
        )
        
    }
}


export default connect()(App)