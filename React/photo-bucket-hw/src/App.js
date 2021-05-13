import React from 'react';
import './App.css';
import Greeting from '../../photo-bucket-hw/src/components/Greeting';
import Header from '../../photo-bucket-hw/src/components/Header';
import Card from '../../photo-bucket-hw/src/components/Card';
import { randomPhoto, carList } from './unsplashRequest';
import { ourData } from './fakeApi';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      info: null,
      selected: 'cars',
      cars: ourData.cars,
      boats: ourData.boats
    }
  }

  handleClick = (text) => {
    if(text == 'cars'){
      this.getCars()
    }
    if(text == 'boats'){
      this.getBoats()
    }
    this.setState({ selected: text.toLowerCase() });
  }

  createCards() {
    const selected = this.state.selected;
    return this.state[selected].map((info, idx) => (
      <Card 
        imgSrc={info} 
        key={idx} 
      />
    ));
  }

  makeRequest = async () => {
    const res = await randomPhoto();
    this.setState({ 
      info: res.description || res.alt_description, 
      randomImg: res.urls.small
    });
  }

  getCars = async () => {
    const res = await carList();
    this.setState({ 
      cars: res
    });
  }

  getBoats = async () => {
    const res = await boatList();
    const boatArray = res.map(boat => boat.urls.small)
    this.setState({
      boats: boatArray
    });
  }
  
  render(){
    return (
      <div className="App">
        <Greeting />
        <button onClick={this.getCars}>Testing Request</button>
        <div>
          <h3>Random Photo Description</h3>
          <div>
            {this.state.info}
            <img src={this.state.randomImg} />
          </div>
        </div>
        <Header handleClick={this.handleClick} />
        <section className="photos-container">
          {this.createCards()}
        </section>
      </div>
    );
  }
}

export default App;
