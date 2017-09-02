import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './Components/common';
import LoginForm from './Components/LoginForm';

/*Firebase allows for user authentication. I have only set up email auth.*/

export default class App extends React.Component {
  componentWillMount (){
    const config = {
    apiKey: 'AIzaSyB5iE58xyWkLG_mQ_OmyRotUSSL3h9snIc',
    authDomain: 'rnapp2-78419.firebaseapp.com',
    databaseURL: 'https://rnapp2-78419.firebaseio.com',
    projectId: 'rnapp2-78419',
    storageBucket: 'rnapp2-78419.appspot.com',
    messagingSenderId: "168033884666"
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