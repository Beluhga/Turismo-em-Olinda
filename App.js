import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Components/TelaInicial';
import Restaurante from './Components/Restaurante/restaurante';
import Passeio from './Components/Passeio/passeio';
import Hospedagem from './Components/Hospedagem/hospedagem';

import { Ionicons, FontAwesome5, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Tabs= createBottomTabNavigator();

export default function App (){
  return(
    <NavigationContainer>
      <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#080496",
        tabBarActiveBackgroundColor: "#f0e5dc",
        tabBarLabelStyle:{fontSize: 16},
        headerShown: false,
      }}>
        <Tabs.Screen name="Início" component={Home}
        options={{
          tabBarIcon:({color}) => (
            <FontAwesome name="home" size={24} color={color} />
          ), }} />

        <Tabs.Screen name="Restaurantes" component={Restaurante}
        options={{
          tabBarIcon:({color}) => (
            <Ionicons name="restaurant" size={24} color={color} />
          ), }} />

        <Tabs.Screen name="Passeios" component={Passeio}
        options={{
          tabBarIcon:({color}) => (
            <MaterialIcons name="tour" size={24} color={color} />
          ), }} />

        <Tabs.Screen name="Hospedagens" component={Hospedagem}
        options={{
          tabBarIcon:({color}) => (
            <FontAwesome5 name="hotel" size={24} color={color} />
          ), }} />
        

      </Tabs.Navigator>
    </NavigationContainer>
  )
}