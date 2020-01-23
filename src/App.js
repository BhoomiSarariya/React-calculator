import React from 'react';
import Form from './Form.js';
import './App.css';
class App extends React.Component {
	state = {
		user: {
			name: 'aa',
			email: '',
			password: '',
			collage: '',
			branch: ''
		},
		submitted: false
	}
	handleChnage = event => this.setState({
		user: {
			...this.state.user,
			[event.target.name]: event.target.value
		}
	})
	handleLogin = e => {
		e.preventDefault()
		this.setState({
			submitted: true
		})
	}
	render() {
		const { submitted } = this.state
		return (
			<div className="main">
				<form >
					<table>
						<tbody>
							<tr>
								<td><label>Name</label></td>
								<td><input type="text" place-holder="Plz enter ur Name" name="name" onChange={this.handleChnage}></input><br /></td>
							</tr>
							<tr>
								<td><label>Email</label></td>
								<td><input type="email" place-holder="Plz enter ur Email" name="email" onChange={this.handleChnage}></input><br /></td>
							</tr>
							<tr>
								<td><label>Password</label></td>
								<td><input type="password" place-holder="Plz enter ur password" name="password" onChange={this.handleChnage}></input><br /></td>
							</tr>
							<tr>
								<td><label>College</label></td>
								<td><input type="text" place-holder="Plz enter ur Collage" name="collage" onChange={this.handleChnage}></input><br /></td>
							</tr>
							<tr>
								<td><label>Branch</label></td>
								<td><input type="text" place-holder="Plz enter ur Branch" name="branch" onChange={this.handleChnage}></input><br /></td>
							</tr>
							<tr>
								<td><center><input type="submit" value="Submit" onClick={(e) => this.handleLogin(e)} /></center></td>
							</tr>
						</tbody>
					</table>
				</form>
				{submitted && <Form
					handleLogin={() => this.handleLogin} user={this.state.user}
				/>}
			</div>
		);
	}
}
export default App;
