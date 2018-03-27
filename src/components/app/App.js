import React, { Component } from 'react';
import axios from 'axios';
import CurrentNewStar from '../CurrentNewStar/CurrentNewStar';
import StarList from '../StarList/StarList';
import StarForm from '../StarForm/StarForm';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starList: [
      {
        name: 'Fomalhaut',
        diameter: 123
      },
      {
        name: 'Gacrux',
        diameter: 342
      },
      {
        name: 'Hadar',
        diameter: 2
      },
      {
        name: 'Elnath',
        diameter: 46
      }],
      newStar: {
        name: '',
        diameter: ''
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({ newStar: { 
      ...this.state.newStar, 
      [propertyName]: event.target.value } 
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.newStar);
    this.setState({ 
      starList:[ ...this.state.starList, this.state.newStar ],
      newStar: { name: '', diameter: '' }
    })
  }

  getPlanets() {
    axios.get('https://swapi.co/api/planets/?format=json')
      .then(response => {
        console.log('response: ', response);
        const planets = response.data.results;
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidMount() {
    console.log('Component has mounted');
    this.getPlanets();
  }

  render() {

    return (
      <div>
        <CurrentNewStar star={this.state.newStar}/>
        <StarForm newStar={this.state.newStar} 
        handleChangeFor={this.handleChangeFor} 
        handleSubmit={this.handleSubmit}/>
        <StarList starList={this.state.starList}/>
      </div>
    );
  }
}

export default App;
