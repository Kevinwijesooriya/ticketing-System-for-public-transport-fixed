/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, createRef, useEffect } from 'react';
import {
	StyleSheet,
	TextInput,
	View,
	Text,
	Image,
	KeyboardAvoidingView,
	Keyboard,
	TouchableOpacity,
	ScrollView,
	Switch,
} from 'react-native';
import { apiSauce } from '../interceptors/APIClient';

const RegisterScreen = props => {
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userRole, setUserRole] = useState('user');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const [errortext, setErrortext] = useState('');
	const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
	const [isEnabled, setIsEnabled] = useState(false);

	const emailInputRef = createRef();
	const ageInputRef = createRef();
	const passwordInputRef = createRef();
	useEffect(() => {
		if (isEnabled) {
			setUserRole('inspector');
		} else {
			setUserRole('user');
		}
	}, [isEnabled]);

	const toggleSwitch = () => {
		setIsEnabled(!isEnabled);
	};

	const handleSubmitButton = () => {
		setErrortext('');
		if (!userName) {
			alert('Please fill Name');
			return;
		}
		if (!userEmail) {
			alert('Please fill Email');
			return;
		}
		if (!userPassword) {
			alert('Please fill Password');
			return;
		}
		if (userPassword !== confirmPassword) {
			alert('Password does not match');
			return;
		}
		console.log('Login payload', {
			email: userEmail,
			password: userPassword,
		});
		apiSauce
			.post('/api/user/register', {
				userName,
				role: userRole,
				email: userEmail,
				password: userPassword,
			})
			.then(response => {
				if (response.status !== 200) {
					alert(response.data.message);
					setIsRegistraionSuccess(false);
					return;
				}
				console.log('Registration', response);
				setIsRegistraionSuccess(true);
			})
			.catch(error => console.log('Registration error', error));
	};
	if (isRegistraionSuccess) {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: '#307ecc',
					justifyContent: 'center',
				}}>
				<Image
					source={require('../assets/images/TS_Logo.png')}
					style={{
						height: 150,
						resizeMode: 'contain',
						alignSelf: 'center',
					}}
				/>
				<Text style={styles.successTextStyle}>
					Registration Successful
				</Text>
				<TouchableOpacity
					style={styles.buttonStyle}
					activeOpacity={0.5}
					onPress={() => props.navigation.navigate('LoginScreen')}>
					<Text style={styles.buttonTextStyle}>Login Now</Text>
				</TouchableOpacity>
			</View>
		);
	}
	return (
		<View style={{ flex: 1 }}>
			<ScrollView
				keyboardShouldPersistTaps="handled"
				contentContainerStyle={{
					justifyContent: 'center',
					alignContent: 'center',
				}}>
				<View style={{ alignItems: 'center' }}>
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
				<KeyboardAvoidingView enabled>
					<Text style={styles.labelTextStyle}>Name</Text>
					<View style={styles.SectionStyle}>
						<TextInput
							style={styles.inputStyle}
							onChangeText={UserName => setUserName(UserName)}
							underlineColorAndroid="#f000"
							placeholder="Enter Name"
							placeholderTextColor="#8b9cb5"
							autoCapitalize="sentences"
							returnKeyType="next"
							onSubmitEditing={() =>
								emailInputRef.current &&
								emailInputRef.current.focus()
							}
							blurOnSubmit={false}
						/>
					</View>
					<Text style={styles.labelTextStyle}>Email</Text>
					<View style={styles.SectionStyle}>
						<TextInput
							style={styles.inputStyle}
							onChangeText={UserEmail => setUserEmail(UserEmail)}
							underlineColorAndroid="#f000"
							placeholder="Enter Email"
							placeholderTextColor="#8b9cb5"
							keyboardType="email-address"
							ref={emailInputRef}
							returnKeyType="next"
							onSubmitEditing={() =>
								passwordInputRef.current &&
								passwordInputRef.current.focus()
							}
							blurOnSubmit={false}
						/>
					</View>
					<Text style={styles.labelTextStyle}>
						Register as an Inspector
					</Text>
					<View style={styles.SectionStyle}>
						<Switch
							trackColor={{ false: '#767577', true: '#4472C4' }}
							thumbColor={isEnabled ? '#004a9c' : '#f4f3f4'}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch}
							value={isEnabled}
						/>
					</View>
					<Text style={styles.labelTextStyle}>Password</Text>
					<View style={styles.SectionStyle}>
						<TextInput
							style={styles.inputStyle}
							onChangeText={UserPassword =>
								setUserPassword(UserPassword)
							}
							underlineColorAndroid="#f000"
							placeholder="Enter Password"
							placeholderTextColor="#8b9cb5"
							ref={passwordInputRef}
							returnKeyType="next"
							secureTextEntry={true}
							onSubmitEditing={() =>
								ageInputRef.current &&
								ageInputRef.current.focus()
							}
							blurOnSubmit={false}
						/>
					</View>
					<Text style={styles.labelTextStyle}>Confirm Password</Text>
					<View style={styles.SectionStyle}>
						<TextInput
							style={styles.inputStyle}
							onChangeText={ConfirmPassword =>
								setConfirmPassword(ConfirmPassword)
							}
							underlineColorAndroid="#f000"
							placeholder="Enter Confirm Password"
							placeholderTextColor="#8b9cb5"
							ref={ageInputRef}
							returnKeyType="next"
							secureTextEntry={true}
							onSubmitEditing={Keyboard.dismiss}
							blurOnSubmit={false}
						/>
					</View>
					{errortext !== '' ? (
						<Text style={styles.errorTextStyle}>{errortext}</Text>
					) : null}
					<TouchableOpacity
						style={styles.buttonStyle}
						activeOpacity={0.5}
						onPress={handleSubmitButton}>
						<Text style={styles.buttonTextStyle}>REGISTER</Text>
					</TouchableOpacity>
				</KeyboardAvoidingView>
			</ScrollView>
		</View>
	);
};
export default RegisterScreen;

const styles = StyleSheet.create({
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
		color: '#FFFFFF',
		height: 40,
		alignItems: 'center',
		borderRadius: 30,
		marginLeft: 35,
		marginRight: 35,
		marginTop: 20,
		marginBottom: 20,
	},
	buttonTextStyle: {
		color: '#FFFFFF',
		paddingVertical: 10,
		fontSize: 16,
	},
	inputStyle: {
		flex: 1,
		color: '#004a9c',
		paddingLeft: 15,
		paddingRight: 15,
		borderWidth: 1,
		borderRadius: 30,
		borderColor: '#dadae8',
	},
	errorTextStyle: {
		color: 'red',
		textAlign: 'center',
		fontSize: 14,
	},
	successTextStyle: {
		color: 'white',
		textAlign: 'center',
		fontSize: 18,
		padding: 30,
	},
	labelTextStyle: {
		color: '#00264f',
		marginLeft: 35,
		fontSize: 14,
	},
});
