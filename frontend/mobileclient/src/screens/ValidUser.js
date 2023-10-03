import React, { useState } from 'react';
import {
	Image,
	Keyboard,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { apiSauce } from '../interceptors/APIClient';
const ValidUserScreen = ({ navigation, route }) => {
	const data = route.params.data.data;
	console.log('ValidUserScreen ~ data', data);
	const [startDestination, setStartDestination] = useState('');
	const saveJourney = async () => {
		try {
			const response = apiSauce.post('/api/journey/create', {
				userId: data._id,
				startDestination,
				status: 'onGoing',
				endDestination: '',
				amount: '',
			});
			console.log('~ response', response);
			navigation.navigate('InspectorScreen');
		} catch (error) {
			console.log('~ error', error);
		}
	};
	return (
		<>
			<View style={styles.centerStyle}>
				<Text style={styles.titleTextStyle}>VALID USER</Text>
				<Image
					source={require('../assets/images/ValidUser.png')}
					style={styles.imageStyle}
				/>
			</View>
			<View style={styles.centerStyle}>
				<Text style={styles.labelGreenTextStyle}>Valid User</Text>
				<Text style={styles.labelGreenTextStyle}>{data.userName}</Text>
			</View>
			<Text style={styles.labelTextStyle}>Starting Location</Text>
			<View style={styles.SectionStyle}>
				<TextInput
					style={styles.inputStyle}
					onChangeText={StartDestination =>
						setStartDestination(StartDestination)
					}
					underlineColorAndroid="#f000"
					placeholder="Enter Starting Location"
					placeholderTextColor="#8b9cb5"
					returnKeyType="next"
					onSubmitEditing={Keyboard.dismiss}
					blurOnSubmit={false}
				/>
			</View>
			<TouchableOpacity
				style={styles.buttonStyle}
				activeOpacity={0.5}
				onPress={saveJourney}>
				<Text style={styles.buttonTextStyle}>Initialize Journey</Text>
			</TouchableOpacity>
		</>
	);
};
export default ValidUserScreen;
const styles = StyleSheet.create({
	centerStyle: { alignItems: 'center' },
	imageStyle: {
		width: '50%',
		height: 100,
		resizeMode: 'contain',
		margin: 30,
	},
	titleTextStyle: {
		color: '#004a9c',
		paddingVertical: 10,
		fontSize: 30,
		fontWeight: 'bold',
	},
	inputStyle: {
		flex: 1,
		color: '#336eb0',
		paddingLeft: 15,
		paddingRight: 15,
		borderWidth: 1,
		borderRadius: 30,
		borderColor: '#336eb0',
	},
	buttonStyle: {
		backgroundColor: '#004a9c',
		borderWidth: 0,
		height: 60,
		alignItems: 'center',
		borderRadius: 30,
		marginLeft: 35,
		marginRight: 35,
		marginTop: 20,
		marginBottom: 25,
	},
	buttonTextStyle: {
		color: 'white',
		paddingVertical: 14,
		fontSize: 24,
	},
	SectionStyle: {
		flexDirection: 'row',
		height: 40,
		marginTop: 20,
		marginLeft: 35,
		marginRight: 35,
		margin: 10,
	},
	labelTextStyle: {
		color: '#00264f',
		marginLeft: 35,
		fontSize: 14,
	},
	labelGreenTextStyle: {
		color: '#13a704',
		marginBottom: 20,
		fontSize: 14,
	},
});
