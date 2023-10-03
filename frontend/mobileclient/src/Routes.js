import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegistrationScreen';
import InspectorScreen from './screens/InspectorScreen';
import QRScreen from './screens/QRScreen';
import GetQRScreen from './screens/GetQRScreen';
import ValidUserScreen from './screens/ValidUser';
import EndQRScreen from './screens/EndQRScreen';
import EndUserJourneyScreen from './screens/EndUserJourney';
import InitialIDValidationScreen from './screens/InitialIDValidation';
import EndIDValidationScreen from './screens/EndIDValidation';
import OvercrowdScreen from './screens/OvercrowedScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="LoginScreen"
					component={LoginScreen}
					options={{ title: 'Welcome' }}
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: 'Home' }}
				/>
				<Stack.Screen name="Profile" component={ProfileScreen} />
				<Stack.Screen
					name="RegisterScreen"
					component={RegisterScreen}
				/>
				<Stack.Screen
					name="InspectorScreen"
					component={InspectorScreen}
				/>
				<Stack.Screen name="QRScreen" component={QRScreen} />
				<Stack.Screen name="GetQRScreen" component={GetQRScreen} />
				<Stack.Screen name="ValidUser" component={ValidUserScreen} />
				<Stack.Screen name="EndQRScreen" component={EndQRScreen} />
				<Stack.Screen
					name="EndUserJourney"
					component={EndUserJourneyScreen}
				/>
				<Stack.Screen
					name="InitialIDValidation"
					component={InitialIDValidationScreen}
				/>
				<Stack.Screen
					name="EndIDValidation"
					component={EndIDValidationScreen}
				/>
				<Stack.Screen
					name="OvercrowdScreen"
					component={OvercrowdScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
