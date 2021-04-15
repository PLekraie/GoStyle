import React from 'react';
import { View, Text } from 'react-native';

class Header extends React.Component {
    render(){
        return(
            <View>
				<Text style={styles.title}>Scanne un QR Code GoStyle pour obtenir une promotion !</Text>
			</View>
        );
    }
}

const styles = {
	title: {
		color: '#FFF',
		marginTop: 30,
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold'
	}
};

export default Header;




