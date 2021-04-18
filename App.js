import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import axios from 'axios';

import Header from './src/components/Header';
import { BarCodeScanner } from 'expo-barcode-scanner';
import PromoList from './src/components/PromoList';



export default function App() {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
	const [data, setData] = useState({});
	const [didMount, setDidMount] = useState(false); 


	useEffect(() => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();

		fetchMyAPI();
		setDidMount(true);
   		return () => setDidMount(false);
	}, []);

	if(!didMount) {
		return null;
	};

	const handleBarCodeScanned = ({ data }) => {
		setScanned(true);
		(async () => await putQrCode(data))();
	};

	/**
	 * automatically called at launch. GET : request actived promotion list from api
	 */
	async function fetchMyAPI() {
		let response = await axios.get('http://51.254.205.197:8082/rest/promotions/actifs');
		setData(response);
	}

	/**
	 * Called when a QrCode is scanned. 
	 * PUT : request promotion activation, if succeed reload actived promotion list, else, handle error.
	 * @param {string} qrCode 
	 */
	function putQrCode(qrCode) {
		axios.put('http://51.254.205.197:8082/rest/promotions/activ/' + qrCode).then(
			response => {
				console.log(response);
				alert(`Vous avez une nouvelle promotion ! :)`);
				fetchMyAPI();
			},
			error => {
				if (error.response.status === 404) {
					alert(`Ce code n'est pas valide, désolé :(`);
				} else {
					alert(`Uho, il semblerait que notre serveur soit indisponible :(`);
				}
			}
		);
	}

	if (hasPermission === null) {
		return <Text>On a besoin de votre autorisation !</Text>;
	}
	if (hasPermission === false) {
		return <Text>Nous n'avons pas accès à la caméra :(</Text>;
	}

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.scanner}>
				<BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject} />
				{scanned && <Button title={'Appuyer pour scanner'} onPress={() => setScanned(false)} />}
			</View>
			<PromoList data={data}/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black'
	},
	scanner: {
		flex: 9,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
