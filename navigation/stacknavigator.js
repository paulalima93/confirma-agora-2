import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/cadastro";
import HomeScreen from "../screens/home";
import CalendarioScreen from "../screens/calendario";


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={RegisterScreen} />
      <Stack.Screen name="Menu" component={HomeScreen} />
      <Stack.Screen name="Calendario" component={CalendarioScreen} />
    </Stack.Navigator>
  );
}
export default MyStack