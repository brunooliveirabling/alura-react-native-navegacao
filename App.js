import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import AppRotas from './src/rotas/AppRotas';

export default function App() {
    return (
        <SafeAreaView style={style.safeAreaView}>
            <StatusBar />
            <AppRotas />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#EE9911BB',
    },
});
