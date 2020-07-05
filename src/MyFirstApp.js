import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
class MyFirstApp extends Component{
  constructor(){
    super();
    this.state={monsters:[],
      searchField:''
        }
  }

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json())
      .then ( users => this.setState({monsters: users}))  
  }

  handleChange = (e) => {
     this.setState({searchField:e.target.value});
  }

  render()
  {
    const {monsters,searchField}=this.state;
    const filtered_monsters = monsters.filter(
                                    monster=>monster.name.toLowerCase()
                                              .includes(searchField.toLowerCase()))  ;
    
    return(

      <div className="App">
        <h1>Monsters</h1>
        <SearchBox 
          placeholder= 'search monsters' 
          handleChange = {this.handleChange}>
        </SearchBox>

        <CardList 
          monsters = {filtered_monsters}>
        </CardList>

      </div>
  );
  }
}

export default MyFirstApp;
