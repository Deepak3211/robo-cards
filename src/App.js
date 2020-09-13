import React, {Component} from 'react';
// import CardList from './components/CardList';
// import SearchBox from './components/SearchBox';
import { CardList, SearchBox } from './components';
import {robots} from './robo';


class App extends Component {
  constructor(){

    super()
    this.state = {
      robots,
      searchField: ''

    }
  }

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value});
    // console.log(e.target.value);
    
    

  }
render(){
  const filterRobo = this.state.robots.filter(robots =>{

    return robots.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
  });
return (
<div>
<SearchBox  searchChange = {this.onSearchChange}/>
<CardList  robots = {filterRobo}/>
</div>
);
}}
export default App;