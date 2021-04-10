import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Modal, TouchableHighlight, Text, View, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
//import axios from './config/config';
import axios from 'axios';

export default function App() {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [data, setData] = useState({});

	useEffect(() => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();

		fetchMyAPI();
	}, []);

	const handleBarCodeScanned = ({ data }) => {
		setScanned(true);
		(async () => await putQrCode(data))();
	};

	function putQrCode(qrCode) {
		axios.put('http://51.254.205.197:8082/rest/promotions/activ/' + qrCode).then(
			response => {
				console.log(response);
				alert(`Vous avez une nouvelle promotion !`);
				fetchMyAPI();
			},
			error => {
				console.log(error); //TODO traiter l'erreur et afficher si pb serveur ou si qrcode invalide
			}
		);
	}

	async function fetchMyAPI() {
		let response = await axios.get('http://51.254.205.197:8082/rest/promotions/actifs');
		setData(response);
	}

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Scanne un QR Code GoStyle pour obtenir une promotion !</Text>
			</View>
			<View style={styles.scanner}>
				<BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject} />
				{scanned && <Button title={'Appuyer pour scanner'} onPress={() => setScanned(false)} />}
			</View>
			<View style={styles.centeredView}>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.');
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>Mes promotions actives : </Text>
							<FlatList
								data={data.data}
								renderItem={({ item }) => (
									<Text style={styles.item}>
										{item.description} {item.montant > 0 ? item.montant + '%' : ''}
									</Text>
								)}
								keyExtractor={item => item.id}
							/>
							<TouchableHighlight
								style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
								onPress={() => {
									setModalVisible(!modalVisible);
								}}
							>
								<Text style={styles.textStyle}>retour au scanner</Text>
							</TouchableHighlight>
						</View>
					</View>
				</Modal>

				<TouchableHighlight
					style={styles.openButton}
					onPress={() => {
						setModalVisible(true);
					}}
				>
					<Text style={styles.textStyle}>Voir mes promotions</Text>
				</TouchableHighlight>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black'
	},
	buttonbar: {
		flex: 1,
		backgroundColor: '#000',
		padding: 10
	},
	scanner: {
		flex: 9,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonStyle: {
		marginTop: 20
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	openButton: {
		backgroundColor: '#4040ff',
		borderRadius: 20,
		padding: 10,
		elevation: 2
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	Text: {
		marginBottom: 15,
		textAlign: 'center'
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
		fontSize: 20
	},
	item: {
		color: '#333',
		borderColor: '#CCC',
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 2,
		padding: 10,
		fontSize: 16
	},
	title: {
		color: '#FFF',
		marginTop: 30,
		textAlign: 'center',
		fontSize: 18,
		fontWeight:'bold'
	}
});
