import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native';


interface Props {
    title: string,
    position?: 'br' | 'bl',
    onPress: () => void,
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {
    const android = () => {
        return (
            <View style={[styles.fabLocation,
            (position === 'bl') ? styles.left : styles.rigth]}>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('white', false, 30)}
                    onPress={onPress}>
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text></View>
                </TouchableNativeFeedback>
            </View>
        );
    }
    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.fabLocation,
                (position === 'bl') ? styles.left : styles.rigth]}
                onPress={onPress}>
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text></View>
            </TouchableOpacity>
        );
    }
    return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    rigth: {
        right: 25,
    },
    left: {
        left: 25,
    },
    fab: {
        backgroundColor: '#5856D6',
        borderRadius: 100,
        height: 60,
        justifyContent: 'center',
        width: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,

    },
    fabText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    }
})
