import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];

    const btnClass = [];
    
    if(props.showPersons) {
        btnClass.push(classes.Red);
    }
    if(props.persons.length <= 2)
    {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1)
    {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
          <h1>Hi! This is a React App!!</h1>
          <p className={assignedClasses.join(' ')}>This is working!!</p>
          <button className={btnClass.join(' ')} alt={props.showPersons} onClick = {props.clicked}
          /*style = {style}*/>
            Toggle Persons
          </button>
        </div>
    );
}

export default cockpit;