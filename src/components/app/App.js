import React, { Component } from 'react';

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
        name: 'Star Name',
        diameter: 'Star Diameter'
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
    this.setState({ starList:[...this.state.starList, this.state.newStar]})
    this.setState({ newStar: {
        name: '',
        diameter: ''
      }
    })
  }


  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newStar.name} onChange={this.handleChangeFor('name')}/>
          <input value={this.state.newStar.diameter} onChange={this.handleChangeFor('diameter')}/>
          <input type="submit" value="Submit"/>
          {this.state.newStar.name} is {this.state.newStar.diameter} million km in diameter.
        </form>
        <ul>
          {this.state.starList.map(star => (<li key={star.name}>
          The star {star.name} is {star.diameter} million km in diameter.</li>))}
        </ul>
      </div>
    );
  }
}

export default App;
