import React from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import Cesta from './componentes/Cesta';

export default function Produtor() {
    const route = useRoute();
    const { nome, imagem, distancia, estrelas, cestas } = route.params;

    function HeaderProdutor() {
        return (
            <>
                <Text>Olá! Eu sou o {nome}</Text>
                <Image source={imagem} />
                <Text>Estou a {distancia}m</Text>
                <Text>E tenho {estrelas} estrelas</Text>
            </>
        );
    }

    return <FlatList data={cestas} renderItem={({ item }) => <Cesta {...item} produtor={{ nome, imagem }} />} />;
}

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    },
});
