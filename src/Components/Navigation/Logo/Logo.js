import React from 'react';

import './Logo.css';

import {  F7NavLeft } from 'framework7-react';

const Logo = () => {

    return ( 
        <F7NavLeft className="padding-left">
            <h1>Gym<span>Routine</span></h1>
        </F7NavLeft>
     );
}
 
export default Logo;