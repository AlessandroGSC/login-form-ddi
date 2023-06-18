import React from 'react'
import { Text, View, StyleSheet, Dimensions, TextInput } from 'react-native'
import { SvgXml } from 'react-native-svg'
import ButtonLogin from '../components/ButtonLogin';
const { width, height } = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native';

export default function LoginForm(props) {

    const navigation = useNavigation();

    const handlePressLogin = () => {
        navigation.navigate('BottomNavigation');
    }

    const handlePressCreateUser = () => {
        navigation.navigate("CreateUser");
    }

    return (
      <View style={styles.mainContainer}>
            <View style={styles.containerSvg}>
                <SvgXml 
                    width={width}
                    height={height}
                    xml={fondoSvg}
                    style={styles.fondoLogin}
                />
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.titulo} >Hola de nuevo</Text>
                <Text style={styles.subtitulo} >Inicio de sesión</Text>
                <TextInput placeholder='aless@gmail.com' style={styles.inputText} />
                <TextInput placeholder='*********' style={styles.inputText} />
                <Text style={styles.textOC} >Olvidaste tu contraseña</Text>
                <ButtonLogin />
                <View style={styles.containerTextNTC}>
                  <Text style={styles.textNTC} >No tienes cuenta?</Text>
                  <Text style={{...styles.textNTC, color: '#642CC1'}} onPress={() => handlePressCreateUser()}> Crear</Text>
                </View>
            </View>
      </View>
    )
}

const fondoSvg = `<svg width="360" height="279" viewBox="0 0 360 279" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H360V279L333.383 236.244C327.057 226.082 313.282 223.715 303.927 231.183L275.986 253.486C267.814 260.01 255.995 259.137 248.87 251.483L208.458 208.073C201.834 200.958 191.054 199.636 182.908 204.939L128.123 240.604C121.382 244.992 112.669 244.915 106.006 240.409L59.1944 208.747C49.0807 201.907 35.2515 205.646 29.9629 216.651L0 279V0Z" fill="url(#paint0_linear_1_9)"/>
<defs>
<linearGradient id="paint0_linear_1_9" x1="301.5" y1="327.825" x2="24.11" y2="342.873" gradientUnits="userSpaceOnUse">
<stop offset="0.0502889" stop-color="#642CC1"/>
<stop offset="1" stop-color="#AC4BDA"/>
</linearGradient>
</defs>
</svg>
`;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#F4F4F4"
    },
    containerSvg: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.3
    },
    fondoLogin: {
        top: -10,
        flex: 1
    },
    containerForm: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.7
    },
    titulo: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#c9c9c9',
    },
    subtitulo: {
        fontSize: 20,
        color: '#c9c9c9',
    },
    inputText: {
        height: 60, 
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 15,
        marginTop: 15,
        paddingStart: 20
    },
    textOC: {
        fontSize: 15,
        color: '#c9c9c9',
        marginTop: 10,
        marginRight: -140
    },
    textNTC: {
        fontSize: 15,
        color: '#c9c9c9',
    },
    containerTextNTC: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 50
    }

})