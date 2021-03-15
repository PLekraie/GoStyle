import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {//TODO send request with code from the QR to database via the service
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned`);
    };

    const showList = () => {//TODO afficher modal avec la liste des promotions récupérées
      alert(`Hello`)
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.scanner}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && (
                    <Button title={"Appuyer pour scanner"} onPress={() => setScanned(false)} />
                )}
            </View>
            <View style={styles.buttonbar}>
                <Button
                    title={"Liste des promotions"}
                    style={styles.buttonStyle}
                    onPress={showList}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
    },
    buttonbar: {
        flex: 1,
        backgroundColor: "#000",
        padding: 10,
    },
    scanner: {
        flex: 9,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonStyle: {
        marginTop: 20,
    },
});
