import React from 'react';
import './AddExercise.css'
import AddBtn from './add-btn.svg'
import { Block } from 'framework7-react';

const AddExercise = (props) => {
        return ( 
            <Block>
                <div className="add-exercise" onClick={props.opendialog}>
                    <img src={AddBtn} alt="Uebung hinzufuegen"/>
                    <div>Übung hinzufügen</div>
                </div>
            </Block>
            
         );
}
 
export default AddExercise;