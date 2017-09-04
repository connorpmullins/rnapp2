import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card , CardSection, Input } from './common';
import firebase from 'firebase';


class LoginForm extends Component {
	state = { email: '', password: '', error: ''};

	onButtonPress() {
		const { email, password } = this.state;
		//this.setState 'error' pops an error
		this.setState({ error: ''});

		firebase.auth().signInWithEmailAndPassword(email,password)
			.catch (() => {
				firebase.auth().createUserWithEmailAndPassword(email,password)
					.catch (() => {
						this.setState({ error: 'Authentication Failed. Boooo'});
					});
			});
			/*So firebase is how we log someone in.  .catch allows us to handle a failed login*/
			/*.catch is like 'else-if'*/





/*		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // ...
			});
*/

	}

	render () {
		return (
			<Card>
				<CardSection>
					<Input 
						label="Email:"
						placeholder="porkpieisahero@email.com"
						value={this.state.email}
						onChangeText={email => this.setState({ email })} 
						/>
				</CardSection>

				<CardSection> 
					<Input
						label="Password:"
						placeholder="password"
						secureTextEntry={true}
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Log in
					</Button>
				</CardSection>
			</Card>

		);
	}
}

const styles ={
	errorTextStyle: {
		fontSize: 16,
		alignSelf: 'center',
		color: 'red',
		paddingTop: 5
	}
};

export default LoginForm;