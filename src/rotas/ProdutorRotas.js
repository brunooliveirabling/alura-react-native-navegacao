import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../telas/Home';
import Produtor from '../telas/Produtor';

const Stack = createNativeStackNavigator();

export default function ProdutorRotas({ component = Home }) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={component} />
            <Stack.Screen name="Produtor" component={Produtor} />
        </Stack.Navigator>
    );
}
