import React from 'react';

import './ActionButton.css'

const ActionButton = (props) => {
    return ( 
        <button className="action-button" onClick={props.handler} type="submit">
            {props.title}
        </button>
            
        
     );
}
 
export default ActionButton;