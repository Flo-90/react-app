import React, { Component } from 'react';
import './AddWorkout.css';
import AddExercise from './AddExercise/AddExercise';
import AddExerciseItem from './AddExercise/addExerciseItem/AddExerciseItem';
import ActionButton from '../../Buttons/ActionButton/ActionButton';

import { Popup, Page, Navbar, NavRight, Link, List } from 'framework7-react';

class AddWorkout extends Component {

  state = {
    exerciseName: [],
    workout: {
      _id: '',
      workoutName: '',
      exercises: []
    }
  }

  id = 0;

  openDialogHandler = () => {
      this.$f7.dialog.create({
          title: 'Gib der Übung einen Namen',
          content: '<div class="dialog-input-field input"><input class="dialog-input" type="text" value=""></div>',
          buttons: [
              {text: 'Abbrechen'},
              {
                  text: 'Ok',
                  close: false,
                  onClick: this.addAccordionItem
              }
              
          ]
      }).open()

  this.autoFocus()
  }


  submitHandler = (e) => {
    e.preventDefault()

    this.$f7.accordion.close('.accordion-item');
    // this.$f7.popup.close();

    this.setState({
      workout: {
        _id: Math.round(new Date().getTime() + (Math.random() * 100)).toString(),
        workoutName: this.props.workoutname,
        exercises: this.state.exerciseName
      }
    })
  }

  componentDidUpdate() {
    if (this.state.workout._id) {
      console.log(this.state.workout)
    }
  }

  autoFocus = () => {
    const input = document.querySelector('.dialog-input');
          input.select();
  }

  uniqueId() {
    Math.round(new Date().getTime() + (Math.random() * 100));
  };

  addAccordionItem = () => {
      const exerciseName = document.querySelector('.dialog-input').value;

      if (exerciseName.trim()) {
          this.$f7.dialog.close();
          this.setState( {
            exerciseName: [{value: exerciseName, id: this.id++}, ...this.state.exerciseName]
          } )
      }
  }

  


  render() {

   const exercises = this.state.exerciseName.map((name) => {
      return (
        <AddExerciseItem key={name.id} title={name.value} />
        
      )
   }) 

    return ( 
      <Popup className="add-workout" swipeToClose onPopupClose={() => {console.log('closed')}}>
        <Page>
          <Navbar title={this.props.workoutname}>
            <NavRight>
              <Link popupClose>Close</Link>
            </NavRight>
          </Navbar>
          <AddExercise opendialog={this.openDialogHandler} />

          <form method="POST">
            <List accordionList noHairlines={true}>
              <ul className="addexercise-itemlist">
                {exercises}
              </ul>
              
            </List>
            <ActionButton title="Workout Speichern" handler={this.submitHandler} />
          </form>

        </Page>
      </Popup>
   );
  }
    
}
 
export default AddWorkout;