import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ButtonLogin(props) {

    const navigation = useNavigation();

    const handlePressLogin = () => {
        navigation.navigate('BottomNavigation');
    }
    
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => handlePressLogin()}
        >
            <Text style={styles.btnText}>Enviar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 225,
        height: 60,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#642CC1',
        marginTop: 10
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});