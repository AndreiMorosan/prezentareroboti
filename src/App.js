import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends React.Component{

	constructor(){
		super();
		this.state = {
			robots: [],
	        searchfield: ''
		}
	}

	onSearchChange= (event)=>{
	     this.setState({searchfield: event.target.value})
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots: users}));
	}
	render(){

		const filteredRobots=this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})

		if(this.state.robots===0){
			return <h1>Loading...</h1>
		}else{
    return (
       <div className='tc'>
		<h1>Robofriends</h1>

		<SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
       <CardList  robots={filteredRobots}/>
       </Scroll>

       
       </div>
		);
    }
 }
}


export default App;