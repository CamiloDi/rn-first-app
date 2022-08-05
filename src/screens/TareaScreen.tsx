import { StyleSheet, View } from 'react-native';
import React from 'react';
export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaAzul} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        // TAREA 2 justifyContent:'center',
        // TAREA 3 justifyContent:'center',
        // TAREA 4  justifyContent:'space-between',
        // TAREA 4 flexDirection:'row-reverse',
        // TAREA 5 flexDirection:'row',
        // TAREA 5 justifyContent:'space-between',
        // TAREA 7 justifyContent:'center',
        // TAREA 7 alignItems:'center',
        // TAREA 8 justifyContent:'center',
        // TAREA 8 alignItems:'center',
        // TAREA 9 justifyContent:'center',
        // TAREA 9 alignItems:'center',
        // TAREA 10 flexDirection: 'row',
        // TAREA 10 justifyContent: 'center',
        // TAREA 10 alignItems: 'center',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        // TAREA 3 alignSelf:'flex-end',
        // TAREA 5 sin height
        // TAREA 6 sin width,
        // TAREA 6 flex: 2.5,
        // TAREA 9 top:100,
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        // TAREA 1 flex:3,
        // TAREA 4 alignSelf:'center',
        // TAREA 5 sin height
        // TAREA 6 sin width
        // TAREA 6 flex: 2.5,
        // TAREA 8 left:100,
        // TAREA 9 left:100,
        // TAREA 10 top: 50,
    },
    cajaAzul: {
        // TAREA 2 sin width,
        // TAREA 3 alignSelf:'center',
        // TAREA 4 alignSelf:'flex-end',
        // TAREA 5 sin height,
        // TAREA 6 sin width,
        // TAREA 6 flex: 5,
        width: 100,
        height: 100,
        backgroundColor: '#28c4d9',
        borderWidth: 10,
        borderColor: 'white',
    },
});
