import React, {Component} from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Button, CardSection, Header, Spinner } from './Components/common';
import LoginForm from './Components/LoginForm';

 

/*Firebase allows for user authentication. I have only set up email auth.*/

export default class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount (){
    firebase.initializeApp({
    apiKey: "AIzaSyD6Ng0HDAlAB9v28zWHnzMgAgNxRieo6Gk",
    authDomain: "rnapp2-178717.firebaseapp.com",
    databaseURL: "https://rnapp2-178717.firebaseio.com",
    projectId: "rnapp2-178717",
    storageBucket: "rnapp2-178717.appspot.com",
    messagingSenderId: "769892447276",
    serviceAccount: "./rnapp2-3bb262d2ed32.json"
  });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true }) 
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }


  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return (
          <CardSection>
          <Button onPress={() => firebase.auth().signOut()}> 
          Log Out 
          </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <CardSection><Spinner size="large" /></CardSection>;
    }
  }
};