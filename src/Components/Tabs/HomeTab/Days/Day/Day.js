import React from 'react';

import './Day.css';

import { F7Row, F7Col } from 'framework7-react';

const Day = (props) => {
    return ( 
        <F7Row className="no-gap">
            <F7Col width="20">{props.day}</F7Col>
            <F7Col width="80" style={props.style}>
                <select>
                    <option>Frei</option>
                    <option>Ganzkörperplan</option>
                    <option>Leg Day</option>
                </select>
            </F7Col>
        </F7Row>
     );
}
 
export default Day;
