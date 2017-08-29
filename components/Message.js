import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import styles from '../assets/styles';

class Message extends Component {
	_react = () => {//this binds to the class?
		console.log('Reaction!');
	}

	render(){
		if(this.props.show === true){

			return(
				<View style={styles.messageActionBox}>
					<TouchableHighlight 
						onPress={this._react}
						activeOpacity={0.5}
						underLayColor='white'
						style={{flex: 1, backgroundColor: '#EEEEEE', borderRightWidth: 1, alignItems: 'center'}}
					>
						<Text style={{margin: 5, fontSize: 18, fontWeight: 'bold'}}>React</Text>
					</TouchableHighlight>
					<TouchableHighlight 
						onPress={this._react} 
						activeOpacity={0.5} 
						underLayColor="#EEEEEE"
						style={{flex: 1, backgroundColor: "#111111", alignItems: 'center'}}
					>
						<Text style={{margin: 5, fontSize: 18, fontWeight: 'bold', color: '#FFF'}}>Comment</Text>
					</TouchableHighlight>
				</View>
			);
		} else {
			return null;
		}
	}
}

export default Message;