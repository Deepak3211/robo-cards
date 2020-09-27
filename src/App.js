import React, {Component} from 'react';
// import CardList from './components/CardList';
// import SearchBox from './components/SearchBox';
import { CardList, SearchBox } from './components';


class App extends Component {
constructor(){

super()
this.state = {
  robots:[],
  searchField: ''

}
}
componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(res =>{
return res.json();
})
.then(users =>{
this.setState({robots: users})

});
}
onSearchChange = (e) => {
this.setState({searchField: e.target.value});
// console.log(e.target.value);



}
render(){
const filterRobo = this.state.robots.filter(robots =>{

return robots.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
});
if(this.state.robots.length ===0){
  return <h1>{'Loading 🙃'}</h1>
}
else{


  return (
  <div>
  <SearchBox  searchChange = {this.onSearchChange}/>
  <CardList  robots = {filterRobo}/>
  </div>
  );
  }}

}
export default App;