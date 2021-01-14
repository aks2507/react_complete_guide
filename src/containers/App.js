import React, { Component } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components';
// import Person from '../components/Persons/Person/Person.js';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit.js';
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
    let persons = null;
    if(this.state.showPersons)
    {
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonsHandler}
        changed={this.nameChangedHandler} />
    }
    return (
      // <StyleRoot>
        <div className={classes.App}>
          <Cockpit showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
          {persons}
        </div>
      // </StyleRoot>
      
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does it work?"));
  }
}

// export default Radium(App);
export default App;