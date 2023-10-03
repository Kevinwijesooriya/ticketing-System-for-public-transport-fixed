import React from 'react';
import Routes from './Routes';
import { SafeAreaView, StatusBar } from 'react-native';
import COLORS from './styles/colors';

const App = () => {
	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: COLORS.primary }}
			forceInset={{ bottom: 'always', top: 'always' }}>
			<StatusBar
				backgroundColor={COLORS.primary}
				barStyle="dark-content"
			/>
			<Routes />
		</SafeAreaView>
	);
};

export default App;
