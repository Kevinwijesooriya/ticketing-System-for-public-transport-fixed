/* eslint-disable no-alert */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
	Keyboard,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { apiSauce } from '../interceptors/APIClient';
const OvercrowdScreen = ({}) => {
	const navigation = useNavigation();
	const [routeSchedule, setRouteSchedule] = useState([]);
	const [routeId, setRouteId] = useState('');
	const onOvercrowd = async () => {
		try {
			const response = await apiSauce.put(
				`/api/routeSchedule/overcrowd/${routeId}`,
			);
			if (response.status === 200) {
				navigation.navigate('Home');
			} else {
				alert('Route schedules not found');
			}
		} catch (err) {
			console.log('verifyRoute ~ err', err);
		}
	};
	const getRouteSchedules = async () => {
		try {
			const response = await apiSauce.get(
				'/api/routeSchedule/getNonCrowded',
			);
			if (response.status === 200) {
				setRouteSchedule(response.data.data);
				console.log(
					'🚀 ~ file: OvercrowedScreen.js ~ line 22 ~ getRouteSchedules ~ response.data',
					response.data,
				);
				// navigation.navigate('EndRouteJourney', { data: response.data });
			} else {
				alert('Route schedules not found');
			}
		} catch (err) {
			console.log('verifyRoute ~ err', err);
		}
	};
	useEffect(() => {
		getRouteSchedules();
	}, []);

	return (
		<>
			<View style={styles.centerStyle}>
				<Text style={styles.titleTextStyle}>
					Mark Overcrowded Routes
				</Text>
			</View>
			<Text style={styles.labelTextStyle}>
				Available non crowded routes
			</Text>
			<View style={styles.centerStyle}>
				{routeSchedule.length !== 0 &&
					routeSchedule.map(route => (
						<Text key={route._id} style={styles.routeTextStyle}>
							{route.routerId}
						</Text>
					))}
			</View>
			<Text style={styles.labelTextStyle}>Route ID</Text>
			<View style={styles.SectionStyle}>
				<TextInput
					style={styles.inputStyle}
					onChangeText={RouteId => setRouteId(RouteId)}
					underlineColorAndroid="#f000"
					placeholder="Enter Rout ID"
					placeholderTextColor="#8b9cb5"
					returnKeyType="next"
					onSubmitEditing={Keyboard.dismiss}
					blurOnSubmit={false}
				/>
			</View>
			<TouchableOpacity
				style={styles.buttonStyle}
				activeOpacity={0.5}
				onPress={onOvercrowd}>
				<Text style={styles.buttonTextStyle}>Overcrowd</Text>
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
		fontSize: 16,
	},
	routeTextStyle: {
		color: '#00264f',
		fontSize: 14,
	},
});
export default OvercrowdScreen;
