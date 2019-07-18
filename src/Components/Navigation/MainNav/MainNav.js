import React from 'react';

import './MainNav.css';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

import { F7Navbar, F7Toolbar, F7Link } from 'framework7-react';

const MainNav = () => {

    // F7 Classes
    const alignLeft = 'padding-left align-items-flex-start';

    return ( 
        <React.Fragment>
            <F7Navbar>
                <Logo />
                <Menu />
            </F7Navbar>

            <F7Toolbar tabbar top>
                <F7Link tabLink="#tab-1" text="Wochenplan" tabLinkActive className={alignLeft} />
                <F7Link tabLink="#tab-2" text="Workouts" className={alignLeft} />
            </F7Toolbar>
        </React.Fragment>
     );
}
 
export default MainNav;