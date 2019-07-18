import React, { Component } from 'react';

import './WorkoutTab.css';

import AddWorkoutButton from './AddWorkoutButton/AddWorkoutButton';
import AddWorkout from '../../Pages/AddWorkout/AddWorkout';

import { F7Tab, F7Block } from 'framework7-react';

class WorkoutTab extends Component {

    state = {
        workoutName: ''
    }

    openDialog = () => {
        this.$f7.dialog.create({
            title: 'Gib dem Workout einen Namen',
            content: '<div class="dialog-input-field input"><input class="dialog-input" type="text" value=""></div>',
            buttons: [
                {text: 'Abbrechen'},
                {
                    text: 'Ok',
                    close: false,
                    onClick: this.openAddWorkoutPage
                }
                
            ]
        }).open()

    this.autoFocus()
    }

    openAddWorkoutPage = () => {
        const workoutName = document.querySelector('.dialog-input').value;

        if (workoutName.trim()) {
            this.$f7.dialog.close();
            this.setState({workoutName: workoutName})
            this.$f7.popup.open('.add-workout');
        }
    }

    autoFocus = () => {
        const input = document.querySelector('.dialog-input');
              input.select();
    }

    render() {
        return ( 
            <F7Tab id="tab-2" className="page-content">
                <F7Block>
                    Workout Tab
                </F7Block>
                <AddWorkoutButton opendialog={this.openDialog} />
                <AddWorkout workoutname={this.state.workoutName} opendialog={this.openDialog} />
            </F7Tab>
         );
    }
    
}
 
export default WorkoutTab;