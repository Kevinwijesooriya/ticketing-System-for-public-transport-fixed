/* eslint-disable no-alert */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { apiSauce } from '../interceptors/APIClient';
// import { RNCamera } from 'react-native-camera';
const EndQRScreen = ({}) => {
	const navigation = useNavigation();
	const onSuccess = e => {
		console.log('🚀 ~ file: EndQRScreen.js ~ line 15 ~ onSuccess ~ e', e);
		verifyUser(e.data);
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
			<QRCodeScanner
				onRead={e => onSuccess(e)}
				// flashMode={RNCamera.Constants.FlashMode.torch}
				topContent={
					<Text style={styles.centerText}>
						Scan the QR code at the destination.
					</Text>
				}
				bottomContent={
					<TouchableOpacity style={styles.buttonTouchable}>
						<Text style={styles.buttonText}>QR</Text>
					</TouchableOpacity>
				}
			/>
			<Button
				title="Back To Home"
				onPress={() => navigation.navigate('Home')}
			/>
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
});
export default EndQRScreen;
