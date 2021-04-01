import React, { useState, useEffect } from 'react';
import { StyleSheet, Modal, TouchableHighlight, Text, View, Button,Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	const handleBarCodeScanned = ({ type, data }) => {
		//TODO send request with code from the QR to database via the service
		setScanned(true);
		alert(`Bar code with type ${type} and data ${data} has been scanned`);
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={styles.container}>
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
							<Text style={styles.modalText}>Ceci est la liste de promotion</Text>
							<Text style={styles.Text}>code n°1</Text>
							<Text style={styles.Text}>code n°2</Text>
							<Text style={styles.Text}>code n°3</Text>
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
					<Text style={styles.textStyle}>Afficher la liste des promotions</Text>
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
		textAlign: 'center'
	}
});
