import React from 'react';
import { View, Modal, TouchableHighlight, Alert, FlatList, Text } from 'react-native';

class PromoList extends React.Component {
	state = {
		modalVisible: false
	};

	onOpenModal = () => {
		this.setState({ modalVisible: true });
	};

	onCloseModal = () => {
		this.setState({ modalVisible: false });
	};

	render() {
		const data = this.props.data;
		return (
			<View style={styles.centeredView}>
				<Modal
					animationType="slide"
					transparent={true}
					visible={this.state.modalVisible}
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
										{item.qrCode}
									</Text>
								)}
								keyExtractor={item => item.qrcode}
							/>
							<TouchableHighlight style={{ ...styles.openButton, backgroundColor: '#2196F3' }} onPress={this.onCloseModal}>
								<Text style={styles.textStyle}>retour au scanner</Text>
							</TouchableHighlight>
						</View>
					</View>
				</Modal>

				<TouchableHighlight style={styles.openButton} onPress={this.onOpenModal} testID="openModalButton">
					<Text style={styles.textStyle}>Voir mes promotions</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = {
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
	}
};

export default PromoList;
