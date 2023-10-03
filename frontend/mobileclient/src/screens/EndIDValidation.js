/* eslint-disable no-alert */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
	Keyboard,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { apiSauce } from '../interceptors/APIClient';
const EndIDValidationScreen = ({}) => {
	const navigation = useNavigation();
	const [userId, setUserId] = useState('');
	const onValidate = () => {
		if (userId === '') {
			alert('Empty ID');
			return;
		}
		verifyUser(userId);
	};
	const verifyUser = async id => {
		try {
			const response = await apiSauce.get(`/api/journey/get/${id}`);
			if (response.status === 200) {
				navigation.navigate('EndUserJourney', { data: response.data });
			} else {
				alert('User is not in onGoing state');
			}
		} catch (err) {
			console.log('verifyUser ~ err', err);
		}
	};

	return (
		<>
			<View style={styles.centerStyle}>
				<Text style={styles.titleTextStyle}>
					END SMART ID VALIDATION
				</Text>
			</View>
			<Text style={styles.labelTextStyle}>SMART ID</Text>
			<View style={styles.SectionStyle}>
				<TextInput
					style={styles.inputStyle}
					onChangeText={UserId => setUserId(UserId)}
					underlineColorAndroid="#f000"
					placeholder="Enter Smart ID"
					placeholderTextColor="#8b9cb5"
					returnKeyType="next"
					onSubmitEditing={Keyboard.dismiss}
					blurOnSubmit={false}
				/>
			</View>
			<TouchableOpacity
				style={styles.buttonStyle}
				activeOpacity={0.5}
				onPress={onValidate}>
				<Text style={styles.buttonTextStyle}>Validate</Text>
			</TouchableOpacity>
		</>
	);
};
const styles = StyleSheet.create({
	centerText: {
		flex: 1,
		fontSize: 18,
		padding: 32,
		color: '#777',
	},
	textBold: {
		fontWeight: '500',
		color: '#000',
	},
	buttonText: {
		fontSize: 21,
		color: '#004a9c',
	},
	buttonTouchable: {
		padding: 16,
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
	centerStyle: { alignItems: 'center' },
	titleTextStyle: {
		color: '#004a9c',
		paddingVertical: 10,
		fontSize: 30,
		fontWeight: 'bold',
	},
	labelTextStyle: {
		color: '#00264f',
		marginLeft: 35,
		fontSize: 14,
	},
});
export default EndIDValidationScreen;
