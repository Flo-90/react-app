import React from 'react';

import './AddWorkoutButton.css';
import './Dialog.css';

import Add from './add.svg';



const AddWorkoutButton = (props) => {
    
        return ( 
            <div className="add-workout-btn-container">
                <div className="add-workout-btn" onClick={ props.opendialog }>
                    <img src={ Add } alt="Workout hinzufügen"/>
                </div>
            </div>
         ); 

}
 
export default AddWorkoutButton;