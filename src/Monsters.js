import React, { Component } from 'react';
import './App.css';
class Monsters extends Component{
  constructor(){
    super();
    
    this.state={
        monsters: [
            {
                name:'Frank',
                id:'1'
            },
            {
                name:'Krank',
                id:'2'
            },
            {
                name:'Prank',
                id:'3'
            },
        ]
  };
}
  render()
  {
    return(
    <div className="Monsters">
      {/*this.state.monsters.map(monster => (<h1 key={monster.id}>{monster.name}</h1>))*/}
      {this.state.monsters.map(m => (<p key={m.id}>{m.name}</p>))}

    </div>
  );
  }
}

export default Monsters;
