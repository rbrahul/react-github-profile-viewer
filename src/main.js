import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar.jsx';
import Profile from './components/profile.jsx';

class App extends Component{
	render(){
		return(
			<div>
				<NavBar/>
				<div className="container">
				<Profile/>
				</div>
			</div>


			);
	}
}

ReactDOM.render(<App/>,document.getElementById("app"));