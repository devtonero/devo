import React from 'react';
import './App.css';
import { SearchBox } from './components/search-box/search-box.components';
import { Cardlist } from './components/card-list/card-list.components';

class App extends React.Component {
 constructor(){
   super();

   this.state = {
     IconComputers: [],
     searchbox: ''
   };
 }

 componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({IconComputers: users}));
 }

 handleChange = (e) => {
   this.setState ({searchbox: e.target.value});
  }


  render (){
    const {IconComputers, searchbox} = this.state;
    const Filteredsearchbox = IconComputers.filter(IconComputers => 
      IconComputers.name.toLowerCase().includes(searchbox.toLowerCase() ) 
      );

  return (<div className="App">
    <h1>Icon Computers</h1>
     <SearchBox
        placeholder = 'Search Laptop' 
        handleChange = {this.handleChange}
      />
      < Cardlist IconComputers={Filteredsearchbox}/>
     
  </div>)
  }
}

export default App;
