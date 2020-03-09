import React from 'react';
import Form from './components/Form';
import './App.css';

const APP_ID = `3a8d5f7e`;
const APP_KEY = `4f9d16cc15ec1acf30530217c75ee197`;


class App extends React.Component{

  getRecipe = async (event) => {
    event.preventDefault();
    const search = event.target.elements.searchRecipe.value;
    event.target.elements.searchRecipe.value = "";

    const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`

    const response = await fetch(url);
    const data = await response.json();
    console.log(data.hits); 

  }

  render(){
    return (
      <div className="App">
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}

export default App;
