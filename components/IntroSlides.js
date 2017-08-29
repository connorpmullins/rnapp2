import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Animated } from 'react-native';
import { Button } from 'react-native-elements';

// const SCREEN_WIDTH = Dimensions.get('window').width;
// const SCREEN_HEIGHT = Dimensions.get('window').height;
const { width, height } = Dimensions.get('window');

class IntroSlides extends Component {
	_renderLastSlide(i) {
		if(i === this.props.data.length - 1) {
			return (
				<Button
					title="Onwards!"
					raised
					onPress={this.props.onComplete}
					buttonStyle={styles.button}
					color="#000"
				/>
			);
		}
	}

	_renderSlides() {
		return this.props.data.map((slide, i) => {
			return(
				<View key={slide.text} 
					style={[styles.slide, {backgroundColor: slide.color}]}
				>
					<Text style={styles.text}>{slide.text}</Text>
					{this._renderLastSlide(i)}
				</View>
			);
		});
	}

	scrollX = new Animated.Value(0);

	render() {
		let position = Animated.divide(this.scrollX, width);
		return(
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000' }}>
		        <View
		          // this will bound the size of the ScrollView to be a square because
		          // by default, it will expand regardless if it has a flex value or not
		          style={{ width: width, height: height }}
		          >
					<ScrollView
						horizontal
						style={{ flex:1 }}
						pagingEnabled
						showsHorizontalScrollIndicator={false}
						onScroll={Animated.event(
			              [{ nativeEvent: { contentOffset: { x: this.scrollX } } }]
			            )}
					>
						{this._renderSlides()}
					</ScrollView>
				</View>
				<View
		          style={{ flexDirection: 'row', position: 'absolute', bottom: 100}}
		          >
		          {this.props.data.map((_, i) => { // the _ just means we won't use that parameter
		            let opacity = position.interpolate({
		              inputRange: [i - 1, i, i + 1],
		              outputRange: [0.3, 1, 0.3],
		              extrapolate: 'clamp'
		            });
		            return (
		              <Animated.View // we will animate the opacity of the dots so use Animated.View instead of View here
		                key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
		                style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
		              />
		            );
		          })}
		        </View>
		    </View>
		);
	}
}

const styles = {
	slide: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: width
	},
	text: {
		fontSize: 30,
		color: "white",
		textAlign: 'center',
		marginBottom: 15
	},
	button: {
		backgroundColor: '#dfe5e9',
	}
}

export default IntroSlides;