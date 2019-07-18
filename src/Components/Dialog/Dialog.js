import React, { Component } from 'react';

class Dialog extends Component {

    state = {  }

    openDialog = () => {
        this.$f7.dialog.create({
            title: this.props.dialogtitle,
            content: '<div class="dialog-input-field input"><input class="dialog-input" type="text" value=""></div>',
            buttons: [
                {text: 'Abbrechen'},
                {
                    text: 'Ok',
                    close: false,
                    onClick: this.props.okcallback
                }
                
            ]
        }).open()

    this.autoFocus();
    }

    // okCallback = () => {
    //     const workoutName = document.querySelector('.dialog-input').value;

    //     if (workoutName.trim()) {
    //         this.$f7.dialog.close();
    //         this.setState({workoutName: workoutName})
    //         this.$f7.popup.open('.add-workout');
    //     }
    // }

    autoFocus = () => {
        const input = document.querySelector('.dialog-input');
              input.select();
    }



    render() { 
        return ( 
            <div onClick={this.openDialog}>
                {this.props.children}
            </div>
         );
    }
}
 
export default Dialog;