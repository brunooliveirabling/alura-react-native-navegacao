import React from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList, StyleSheet, View, Image, Text } from 'react-native';
import Cesta from './componentes/Cesta';
import Topo from '../../componentes/Topo';
import useTextos from '../../hooks/useTextos';
import topo from '../../assets/produtores/topo.png';

export default function Produtor() {
    const route = useRoute();
    const { tituloProdutor, tituloCestas } = useTextos();
    const { nome, imagem, distancia, estrelas, cestas } = route.params;

    function HeaderProdutor() {
        return (
            <>
                <Topo titulo={tituloProdutor} imagem={topo} altura={158} />
                <View style={estilos.conteudo}>
                    <View style={estilos.logo}>
                        <Image source={imagem} style={estilos.produtorImage} />
                        <View>
                            <Text style={estilos.produtor}>{nome}</Text>
                            <Text style={estilos.miniInfos}>
                                Distância {distancia}m Estrelas: {estrelas}
                            </Text>
                        </View>
                    </View>
                    <Text style={estilos.cestas}>{tituloCestas}</Text>
                </View>
            </>
        );
    }

    return (
        <FlatList
            data={cestas}
            renderItem={({ item }) => <Cesta {...item} produtor={{ nome, imagem }} />}
            style={estilos.lista}
            ListHeaderComponent={HeaderProdutor}
        />
    );
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
    miniInfos: {
        fontSize: 10,
        color: '#555555',
        marginLeft: 16,
    },
});
