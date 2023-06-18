import React from 'react'
import { Text, View, StyleSheet, Dimensions, TextInput } from 'react-native'
import { SvgXml } from 'react-native-svg'
import ButtonLogin from './src/components/ButtonLogin';
const { width, height } = Dimensions.get('screen');
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

export default function App() {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    )
}
