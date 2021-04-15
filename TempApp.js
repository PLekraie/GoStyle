//import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PromotionsService from './src/services/PromotionsService';

export default function App() {
	const [data, setData] = useState({});

	useEffect(() => {
		async function fetchMyAPI() {
			let response = getActivePromotion();
			console.log(response);
			setData(response);
		}

		fetchMyAPI();
	}, []);

	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<FlatList data={data.data} renderItem={({ item }) => <Text style={styles.item}>{item.description}</Text>} />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44
	}
});
