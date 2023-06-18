import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screen/Home";
import FavoritosScreen from "../screen/FavoritosScreen";
import CreateUser from "../screen/CreateUser";
import LoginForm from "../screen/LoginForm";

const Navigation = () => {

    const BottomTab = createBottomTabNavigator();

    function NavigationTab(params) {
        return (
            <BottomTab.Navigator>
                <BottomTab.Screen 
                    name="Home" 
                    component={Home}
                    options={{headerShown: false}}
                />
                <BottomTab.Screen 
                    name="Favoritos" 
                    component={FavoritosScreen}
                    options={{headerShown: false}}
                />
            </BottomTab.Navigator>
        )
    }

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="LoginForm">
            <Stack.Screen 
                name="LoginForm" 
                component={LoginForm} 
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="CreateUser" 
                component={CreateUser}
                options={{
                    title: 'Crear usuario'
                }}
            />
            <Stack.Screen 
                name="BottomNavigation" 
                component={NavigationTab}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Navigation