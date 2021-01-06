import React, { Component } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components';
import Person from '../components/Persons/Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { id: "beviwn", name: "Max", age: 28},
      { id: "sdadqw", name: "Manu", age: 29},
      { id: "iompik", name: "Stephanie", age: 26}
    ],
    otherstate: "Other value",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      // if(p.id===id)
      //   console.log("equal");
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;
    
    this.setState( {persons: persons} );
  }

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const btnClass = [classes.Button];

    let persons = null;
    if(this.state.showPersons)
    {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id}
              click={() => this.deletePersonsHandler(index)}
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2)
    {
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1)
    {
      assignedClasses.push(classes.bold);
    }

    return (
      // <StyleRoot>
        <div className={classes.App}>
          <h1>Hi! This is a React App!!</h1>
          <p className={assignedClasses.join(' ')}>This is working!!</p>
          <button className={btnClass.join(' ')} alt={this.state.showPersons} onClick = {this.togglePersonsHandler}
          /*style = {style}*/>
            Toggle Persons
          </button>
          {persons}
        </div>
      // </StyleRoot>
      
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does it work?"));
  }
}

// export default Radium(App);
export default App;