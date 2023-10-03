/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, { useState, createRef } from 'react';
import {
	StyleSheet,
	TextInput,
	View,
	Text,
	ScrollView,
	Image,
	Keyboard,
	TouchableOpacity,
	KeyboardAvoidingView,
} from 'react-native';
import { apiSauce } from '../interceptors/APIClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');

	const passwordInputRef = createRef();
	const storeData = async value => {
		try {
			await AsyncStorage.setItem('auth', value);
		} catch (e) {
			console.log('storeData ~ e', e);
		}
	};

	const handleSubmitPress = async () => {
		if (!userEmail) {
			alert('Please fill Email');
			return;
		}
		if (!userPassword) {
			alert('Please fill Password');
			return;
		}
		console.log('Login payload', {
			email: userEmail,
			password: userPassword,
		});
		try {
			const response = await apiSauce.post('/api/user/login', {
				email: userEmail,
				password: userPassword,
			});
			if (response.status !== 200) {
				alert(response.data.msg);
				return;
			}
			console.log('Login', response);
			const auth = response.data;
			if (auth) {
				const jsonValue = JSON.stringify(auth);
				storeData(jsonValue);
				navigation.navigate('Home');
			} else {
				alert('Please fill Password');
			}
		} catch (error) {
			console.log('Login error', error);
		}
	};

	return (
		<View style={styles.mainBody}>
			<ScrollView
				keyboardShouldPersistTaps="handled"
				contentContainerStyle={{
					flex: 1,
					justifyContent: 'center',
					alignContent: 'center',
				}}>
				<View>
					<KeyboardAvoidingView enabled>
						<View style={{ alignItems: 'center' }}>
							<Text style={styles.titleTextStyle}>
								ONLINE TICKETING SYSTEM
							</Text>
							<Image
								source={require('../assets/images/TS_Logo.png')}
								style={{
									width: '50%',
									height: 100,
									resizeMode: 'contain',
									margin: 30,
								}}
							/>
						</View>
						<View style={styles.SectionStyle}>
							<TextInput
								style={styles.inputStyle}
								onChangeText={UserEmail =>
									setUserEmail(UserEmail)
								}
								placeholder="Enter Email" //dummy@abc.com
								placeholderTextColor="#1a5ca6"
								autoCapitalize="none"
								keyboardType="email-address"
								returnKeyType="next"
								onSubmitEditing={() =>
									passwordInputRef.current &&
									passwordInputRef.current.focus()
								}
								// underlineColorAndroid="#f000"
								blurOnSubmit={false}
							/>
						</View>
						<View style={styles.SectionStyle}>
							<TextInput
								style={styles.inputStyle}
								onChangeText={UserPassword =>
									setUserPassword(UserPassword)
								}
								placeholder="Enter Password" //12345
								placeholderTextColor="#1a5ca6"
								keyboardType="default"
								ref={passwordInputRef}
								onSubmitEditing={Keyboard.dismiss}
								blurOnSubmit={false}
								secureTextEntry={true}
								// underlineColorAndroid="#f000"
								returnKeyType="next"
							/>
						</View>
						<TouchableOpacity
							style={styles.buttonStyle}
							activeOpacity={0.5}
							onPress={handleSubmitPress}>
							<Text style={styles.buttonTextStyle}>LOGIN</Text>
						</TouchableOpacity>
						<Text
							style={styles.registerTextStyle}
							onPress={() =>
								navigation.navigate('RegisterScreen')
							}>
							Don't have an account? Sign Up
						</Text>
					</KeyboardAvoidingView>
				</View>
			</ScrollView>
		</View>
	);
};
export default LoginScreen;

const styles = StyleSheet.create({
	mainBody: {
		flex: 1,
		justifyContent: 'center',
		// backgroundColor: '#307ecc',
		alignContent: 'center',
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
		// color: '#FFFFFF',
		// borderColor: '#7DE24E',
		height: 40,
		alignItems: 'center',
		borderRadius: 30,
		marginLeft: 35,
		marginRight: 35,
		marginTop: 20,
		marginBottom: 25,
	},
	buttonTextStyle: {
		color: '#FFFFFF',
		paddingVertical: 10,
		fontSize: 16,
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
	registerTextStyle: {
		color: '#004a9c',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 14,
		alignSelf: 'center',
		padding: 10,
	},
	errorTextStyle: {
		color: 'red',
		textAlign: 'center',
		fontSize: 14,
	},
});
