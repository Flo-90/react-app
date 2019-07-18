import React, { Component } from 'react';

import './Close.css';

import menuIcon from './close.svg';


class Close extends Component {
    render() { 
        return ( 
            <div className="close-btn">
                <img alt="close" src={menuIcon} onClick={() => {
                    this.$f7.panel.close();
                }}/>
            </div>
         );
    }
}
 
export default Close;