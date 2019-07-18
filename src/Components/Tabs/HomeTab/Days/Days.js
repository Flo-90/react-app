import React, { Component } from 'react';

import './Days.css';

import Day from './Day/Day';

class Days extends Component {
    state = { 
        activeWorkout: {
            backgroundColor: '#252F51',
            borderBottom: 'solid 1px #1DE3AE',
            color: 'rgba(255, 255, 255, 1)'
        },
        inactiveWorkout: {
            backgroundColor: '#252F51',
            color: 'rgba(255, 255, 255, 0.5)'
        },
        activeFree: {
            color: 'rgba(255, 255, 255, 0.5)'
        },
        inactiveFree: {
            color: 'rgba(255, 255, 255, 0.25)'
        }
     }

    render() { 

        return ( 
            <div className="days">
                <Day day="Mo"/>
                <Day day="Di" style={this.state.activeWorkout} />
                <Day day="Mi"/>
                <Day day="Do" style={this.state.inactiveWorkout}/>
                <Day day="Fr"/>
                <Day day="Sa" style={this.state.inactiveWorkout}/>
                <Day day="So"/>
            </div>
         );
    }
}
 
export default Days;