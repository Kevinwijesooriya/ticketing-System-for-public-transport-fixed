/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const InspectorScreen = ({ navigation }) => {
	return (
		<>
			<View style={{ alignItems: 'center' }}>
				<Text style={styles.titleTextStyle}>SCAN QR CODES</Text>
			</View>
			<TouchableOpacity
				style={styles.buttonStyle}
				activeOpacity={0.5}
				onPress={() => navigation.navigate('QRScreen')}>
				<Text style={styles.buttonTextStyle}>Initial QR scan</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonStyle}
				activeOpacity={0.5}
				onPress={() => navigation.navigate('EndQRScreen')}>
				<Text style={styles.buttonTextStyle}>End QR scan</Text>
			</TouchableOpacity>
			<View style={{ alignItems: 'center' }}>
				<Text style={styles.titleTextStyle}>USING SMART ID NUMBER</Text>
			</View>
			<TouchableOpacity
				style={styles.buttonStyle}
				activeOpacity={0.5}
				onPress={() => navigation.navigate('InitialIDValidation')}>
				<Text style={styles.buttonTextStyle}>
					Initial ID Validation
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonStyle}
				activeOpacity={0.5}
				onPress={() => navigation.navigate('EndIDValidation')}>
				<Text style={styles.buttonTextStyle}>End ID Validation</Text>
			</TouchableOpacity>
		</>
	);
};
export default InspectorScreen;
const styles = StyleSheet.create({
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
});
