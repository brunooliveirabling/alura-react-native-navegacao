import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';

import Coracao from '../assets/coracao.svg';
import Home from '../assets/home.svg';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color }) => {
                        let Icon = Home;

                        if (route.name === 'Melhores Produtores') {
                            Icon = Coracao;
                        }
                        return <Icon color={color} width={18} height={18} />;
                    },
                    tabBarActiveTintColor: '#111111',
                    tabBarInactiveTintColor: '#55555599',
                    tabBarLabelStyle: { fontSize: 15, lineHeight: 15, paddingBottom: 12 },
                    tabBarStyle: { backgroundColor: '#EE9911', height: '10%', paddingVertical: 12 },
                })}>
                <Tab.Screen name="Home" component={ProdutorRotas} />
                <Tab.Screen name="Melhores Produtores" component={MelhoresProdutoresRotas} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
