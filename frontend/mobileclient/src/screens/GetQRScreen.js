import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const GetQRScreen = ({ navigation }) => {
	const [userData, setUserData] = useState({});
	const getAuth = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('auth');
			setUserData(JSON.parse(jsonValue));
			console.log('getAuth ~ jsonValue', JSON.parse(jsonValue));
		} catch (e) {
			console.log('getAuth ~ e', e);
		}
	};
	useEffect(() => {
		getAuth();
	}, []);

	console.log(
		'🚀 ~ file: GetQRScreen.js ~ line 16 ~ GetQRScreen ~ userData',
		userData,
	);
	return (
		<>
			<View style={styles.centerStyle}>
				<Text style={styles.titleTextStyle}>YOUR QR CODE</Text>
				<Text style={styles.labelTextStyle}>ID - {userData._id}</Text>
				<Text style={styles.labelTextStyle}>
					E-mail - {userData.email}
				</Text>
				<Text style={styles.labelTextStyle}>
					Username - {userData.userName}
				</Text>
				<View style={styles.imageStyle}>
					<QRCode value={userData._id} />
				</View>
			</View>
		</>
	);
};
export default GetQRScreen;
const styles = StyleSheet.create({
	labelTextStyle: {
		color: '#004a9c',
		fontSize: 14,
		marginTop: 20,
	},
	centerStyle: { alignItems: 'center' },
	imageStyle: {
		marginTop: 30,
	},
	titleTextStyle: {
		color: '#004a9c',
		paddingVertical: 10,
		fontSize: 30,
		fontWeight: 'bold',
	},
});
