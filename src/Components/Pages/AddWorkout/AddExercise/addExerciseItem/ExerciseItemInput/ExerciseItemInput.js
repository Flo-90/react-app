import React from 'react';
import './ExerciseItemInput.css';

const ExerciseItemInput = (props) => {
    return ( 
       
        <span>
            <p>{props.title}</p>
            <input 
                type="number" 
                name={props.title.toLowerCase()}
                placeholder="0" 
                className="addexercise-input"
                onChange={props.getvalue}
            />
        </span>
       
     );
}
 
export default ExerciseItemInput;