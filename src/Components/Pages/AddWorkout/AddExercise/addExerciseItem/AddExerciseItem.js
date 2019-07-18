import React, { Component } from 'react';
import './AddExerciseItem.css';
import ExerciseItemInput from './ExerciseItemInput/ExerciseItemInput';
import { ListItem, AccordionContent, Block, SwipeoutActions, SwipeoutButton } from 'framework7-react';


class AddExerciseItem extends Component {

    state = {
        weight: '0',
        reps: '0',
        sets: '0'
    }

    inputValues = (e) => {
        if (e.target.name === 'gewicht') {
            this.setState({ weight: e.target.value })

        } else if (e.target.name === 'wiederholungen') {
            this.setState({ reps: e.target.value })

        } else if (e.target.name === 'sätze') {
            this.setState({ sets: e.target.value })

        }
        
    }

    componentDidMount() {
        const item = document.querySelectorAll('.accordion-item');
        this.$f7.accordion.open(item[0]);

        if(item[1]) {
            this.$f7.accordion.close(item[1]); 
        }
    }
  

    render() {
        return ( 
            <ListItem 
                accordionItem
                noChevron  
                title={ this.props.title} 
                after={`${this.state.weight} x ${this.state.reps} x ${this.state.sets}`}
                onAccordionOpen={() => { console.log('open')} }
                onAccordionClose={() => {console.log('closed')}}
                swipeout
            >

                <SwipeoutActions right>
                    <SwipeoutButton delete confirmText="Wirklich löschen?" confirmTitle=" " text="Löschen"/>
                </SwipeoutActions>

                <AccordionContent style={ { backgroundColor: '#252F51' } }>
                    <Block className="exerciseinput-container">
                        <ExerciseItemInput title="Gewicht" getvalue={this.inputValues} />
                        <ExerciseItemInput title="Wiederholungen" getvalue={this.inputValues}/>
                        <ExerciseItemInput title="Sätze" getvalue={this.inputValues}/>
                    </Block>
                </AccordionContent>
            </ListItem>
         );
    }

    
}
 
export default AddExerciseItem;