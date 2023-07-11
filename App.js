import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/telas/Home';
import MelhoresProdutores from './src/telas/MelhoresProdutores';
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="MelhoresProdutores" component={MelhoresProdutores} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
