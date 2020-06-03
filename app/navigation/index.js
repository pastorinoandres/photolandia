//info: Apartado de configuración donde diseña la navegación de la app con React Navigation
import React from 'react'

//dependecies
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { Home, Preview } from '../screens';

//constants
import { HOME, PREVIEW } from './constants' ;

const Stack = createStackNavigator();

function ReactNavigationContainer() { 


  return (

    <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen name={HOME} component={Home} />
          <Stack.Screen name={PREVIEW} component={Preview} />
          
        </Stack.Navigator>      

    </NavigationContainer>

  );

}

export default ReactNavigationContainer
