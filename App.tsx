import 'react-native-gesture-handler';
import { Platform, NativeModules, SafeAreaView } from 'react-native';
const { StatusBarManager } = NativeModules;
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import Sidebar from './src/components/sidebar/Sidebar';
import Header from './src/components/header/Header';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/components/navigation/Navigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		async function loadFonts() {
			await Font.loadAsync({
				ArialMT: require('./assets/fonts/arialmt.ttf'),
				'ArialMT-Black': require('./assets/fonts/arialmtblack.ttf'),
				SegoeUI: require('./assets/fonts/SegoeUI.ttf'),
			});
			setFontsLoaded(true);
		}

		loadFonts();
	}, []);

	if (!fontsLoaded) {
		return null;
	}

	return (
		// <SafeAreaView

		// >
		// <StatusBar style="auto" />
		// </SafeAreaView>
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Navigator />
			</NavigationContainer>
		</>
	);
}
