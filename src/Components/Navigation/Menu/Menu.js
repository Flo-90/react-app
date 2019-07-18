import React from 'react';

import menuIcon from '../../../menu-icon.svg';

import { F7NavRight, F7Link } from 'framework7-react';

const Menu = () => {
    return ( 
        <F7NavRight>
            <F7Link panelOpen="right">
                <img src={menuIcon} alt="menu" />
            </F7Link>
        </F7NavRight>
     );
}
 
export default Menu;