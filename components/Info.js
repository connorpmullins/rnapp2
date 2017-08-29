import React, { Component, Easing, TouchableOpacity} from 'react';
import FlipView from 'react-native-flip-view';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo, MaterialIcons, MaterialCommunityIcons, Foundation, Ionicons } from '@expo/vector-icons';
import styles from '../assets/styles';




class Info extends Component {


	render() {
		if (this.props.type === "Info") {
			return(
				<FlipView 	style={{flex:1, alignSelf: 'stretch'}}
							front={this._renderFront()}
							back={this._renderBack()}
							isFlipped={this.state.isFlipped}
							onFlipped={(val) => {console.log('Flipped: ' + val)}}
							flipAxis="y"
							flipEasing={Easing.out(Easing.ease)}
							flipDuration={500}
							perspective={1000}
							/>
					<View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'space-between'}}>
						<View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3498db'}}>
							<Entypo
					      		size={80}
					      		name="bucket"
					      		color="#FFFFFF"
					      	/>
					      	<Text style={styles.whiteT}>Bucket List</Text>
						</View>
						<View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e74c3c'}}>
							<MaterialIcons
								size={80}
								name="music-note"
								color="#FFFFFF"
							/>
							<Text style={styles.whiteT}>Songs</Text>
						</View>
					</View>
					<View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'space-between'}}>
						<View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1c40f'}}>
							<Foundation
					      		size={80}
					      		name="lightbulb"
					      		color="#FFFFFF"
					      	/>
							<Text style={styles.whiteT}>Dreams</Text>					      	
						</View>
						<View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7f8c8d'}}>
							<MaterialCommunityIcons
								size={80}
								name="weight"
								color="#FFFFFF"
							/>
							<Text style={styles.whiteT}>Struggles</Text>
						</View>
					</View>
					<View style={{flex: 0.5, flexDirection: 'row'}}>
						<View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d35400'}}>
							<Entypo
					      		size={80}
					      		name="book"
					      		color="#FFFFFF"
					      	/>
							<Text style={styles.whiteT}>Books</Text>					      	
						</View>
						<View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2ecc71'}}>
							<Entypo
								size={80}
								name="tree"
								color="#FFFFFF"
							/>
							<Text style={styles.whiteT}>Places</Text>
						</View>
					</View>
				</View>
			);
		} else if(this.props.type === "Interactions & Progress"){
			return(
				<View style={{flex:1, alignSelf: 'stretch'}}>
					<View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'space-between'}}>
						<View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111111'}}>
							<Entypo
					      		size={80}
					      		name="flow-tree"
					      		color="#FFFFFF"
					      	/>
						</View>
						<View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#555555'}}>
							<Ionicons
								size={80}
								name="md-bonfire"
								color="#FFFFFF"
							/>
						</View>
					</View>
					<View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'space-between'}}>
						<View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#555555'}}>
							<Entypo
					      		size={80}
					      		name="emoji-happy"
					      		color="#FFFFFF"
					      	/>
						</View>
						<View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111111'}}>
							<MaterialCommunityIcons
								size={80}
								name="earth"
								color="#FFFFFF"
							/>
						</View>
					</View>
					<View style={{flex: 0.5, flexDirection: 'row'}}>
						<View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111111'}}>
							<Entypo
					      		size={80}
					      		name="list"
					      		color="#FFFFFF"
					      	/>
						</View>
						<View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#555555'}}>
							<Ionicons
								size={80}
								name="md-analytics"
								color="#FFFFFF"
							/>
						</View>
					</View>
				</View>
			);
		}else if(this.props.type === "Circles"){
			return(
				<View style={{flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center'}}>
					<View style={{height: 300, width: 300, borderRadius: 150, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center'}}>
						<View style={{height: 240, width: 240, borderRadius: 120, backgroundColor: '#888888', justifyContent: 'center', alignItems: 'center'}}>
							<View style={{height: 160, width: 160, borderRadius: 80, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center'}}>
								<Text style={{textAlign: 'center', color: '#FFFFFF', fontSize: 24}}>{this.props.type}</Text>
							</View>
						</View>
					</View>
				</View>
			);
		}else if(this.props.type === "Origin Story"){
			return(
				<View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
					<Entypo
						size={200}
						name="open-book"
						color="#FFFFFF"
					/>
					<Text style={{fontSize: 32, color: '#FFFFFF'}}>Your Origin Story</Text>
				</View>
			);
		}else {
			return(
				<View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
					<Entypo
						size={200}
						name="open-book"
						color="#FFFFFF"
					/>
					<Text style={{fontSize: 32, color: '#FFFFFF'}}>Your Origin Story</Text>
				</View>
			);
		}

	}
}

export default Info;