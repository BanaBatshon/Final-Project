import React, { Component } from 'react';
import Background from '../../images/hero_bg_6.jpg';

const style = {backgroundImage: (`url(${Background})`)}

class LoginBanner extends Component {
    
    render() {
        return (
            <div className="unit-5 overlay hero-container" style={style}>
                <div className="container text-center">
                    <h2 className="mb-0">Login</h2>
                </div>
            </div>
        );
    }
}

export default LoginBanner;