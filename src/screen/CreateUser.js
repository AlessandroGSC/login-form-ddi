import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CreateUser = (props) => {
    const { navigation } = props;

    const handlePressCreateUser = () => {
        navigation.navigate('LoginForm');
    }
    return (
        <View style={styles.container}>
            <Text>Crear usuario</Text>
            <Button title="Enviar" onPress={() => handlePressCreateUser()}/>
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

export default CreateUser