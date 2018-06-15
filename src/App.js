import React, { Component } from "react";

import StorySettings from "./StorySettings";
import WizardList from "./WizardList";
import "./App.css";

class App extends Component {
  //Start your coding here!
  //Don't be afraid to add props into the provided components
  state = {
    selectedHouse: "",
    wizards: []
  }

  componentDidMount(){
    fetch('http://hp-api.herokuapp.com/api/characters/students')
    .then(res => res.json())
    .then(data => this.setState({ wizards: [...data]}))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newWizard = {
      name: event.target.newWizard.value,
      house: event.target.newWizardHouse.value
    }
    console.log(newWizard)
    // newWizard.name = 
    // newWizard.house = 
    this.setState({wizards: [newWizard, ...this.state.wizards]})
  }

  handleHouseSelect = (event) => {
    const selectedHouse = event.target.value
    this.setState({ selectedHouse })
  }

  render() {
    console.log('App state', this.state);
    return (
      <div className="App">
        <h2>Harry Potter Fan Fiction Story Creator</h2>
        <StorySettings handleHouseSelect={this.handleHouseSelect} handleSubmit={this.handleSubmit} />
        <WizardList filterBy={this.state.selectedHouse} wizards={this.state.wizards} />
      </div>
    );
  }
}

export default App;
