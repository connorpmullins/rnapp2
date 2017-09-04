import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './Components/common';
import LoginForm from './Components/LoginForm';



/*Firebase allows for user authentication. I have only set up email auth.*/

export default class App extends React.Component {
  componentWillMount (){
    const config = {
    apiKey: "AIzaSyD6Ng0HDAlAB9v28zWHnzMgAgNxRieo6Gk",
    authDomain: "rnapp2-178717.firebaseapp.com",
    databaseURL: "https://rnapp2-178717.firebaseio.com",
    projectId: "rnapp2-178717",
    storageBucket: "rnapp2-178717.appspot.com",
    messagingSenderId: "769892447276",
    serviceAccount: "./rnapp2-3bb262d2ed32.json"
  };
  firebase.initializeApp(config);

  }
  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}