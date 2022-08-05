import { StyleSheet, View } from 'react-native';
import React from 'react';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaVerde} />
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28c4d9',
        // justifyContent: 'center',
        // alignItems: 'center',
        // width: 400,
        // height: 400,
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 10,
        right: 10,
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    cajaVerde: {
        backgroundColor: 'green',
        // width: 100,
        // height: 100,
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        // bottom: 10,
        // left: 10,
        ...StyleSheet.absoluteFillObject,
    },
});
