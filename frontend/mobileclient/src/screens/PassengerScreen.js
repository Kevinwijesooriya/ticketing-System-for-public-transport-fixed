import React from 'react';
import { Button } from 'react-native';
const PassengerScreen = ({ navigation }) => {
	return (
		<>
			<Button
				title="View QR Code"
				onPress={() => navigation.navigate('PassengerQRScreen')}
			/>
		</>
	);
};
export default PassengerScreen;
