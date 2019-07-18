import React from 'react';

import './PanelLinks.css';

import Close from '../Close/Close';

import { F7Link } from 'framework7-react';

const PanelLinks = () => {
    return ( 
        <div className="panel-links">
            <Close />
            <div className="panel-links-container">
                <F7Link text="Profil"/>
                <F7Link text="Statistiken"/>
                <F7Link text="Einstellungen"/>
                <F7Link text="Feedback"/>
            </div>
        </div>
        
     );
}
 
export default PanelLinks;