import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {

    const navigation = useNavigation();

    const handleCloseSession = () => {
        navigation.navigate('LoginForm');
    }

    return (
        <View style={styles.container}>
            <Text>Screen Home</Text>
            <Button title="Cerrar sesión" onPress={() => handleCloseSession()}/>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Home