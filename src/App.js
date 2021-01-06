import React, { Component } from 'react';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components';
import Person from './Person/Person.js';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red':'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon':'lightgreen'};
    color: black;
  }
`

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

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

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if(this.state.persons.length <= 2)
    {
      classes.push('red');
    }
    if(this.state.persons.length <= 1)
    {
      classes.push('bold');
    }
    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi! This is a React App!!</h1>
          <p className={classes.join(' ')}>This is working!!</p>
          <StyledButton alt={this.state.showPersons} onClick = {this.togglePersonsHandler}
          /*style = {style}*/>
            Toggle Persons
          </StyledButton>
          {persons}
        </div>
      // </StyleRoot>
      
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does it work?"));
  }
}

// export default Radium(App);
export default App;