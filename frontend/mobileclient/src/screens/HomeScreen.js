import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
const HomeScreen = ({ navigation }) => {
	return (
		<>
			<TouchableOpacity
				style={styles.buttonStyle}
				activeOpacity={0.5}
				onPress={() => navigation.navigate('InspectorScreen')}>
				<Text style={styles.buttonTextStyle}>INSPECTOR</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonStyle}
				activeOpacity={0.5}
				onPress={() => navigation.navigate('GetQRScreen')}>
				<Text style={styles.buttonTextStyle}>GET QR</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonStyle}
				activeOpacity={0.5}
				onPress={() => navigation.navigate('OvercrowdScreen')}>
				<Text style={styles.buttonTextStyle}>Populate Route</Text>
			</TouchableOpacity>
		</>
	);
};
export default HomeScreen;
const styles = StyleSheet.create({
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
		color: '#FFFFFF',
		paddingVertical: 14,
		fontSize: 24,
	},
});
