import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import Produtor from './componentes/Produtor';
import Topo from './componentes/Topo';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Produtores({ melhoresProdutores }) {
    const lista = useProdutores(melhoresProdutores);
    const navigation = useNavigation();
    const route = useRoute();

    const { tituloProdutores, mensagemCompra } = useTextos();
    const nomeCompra = route.params?.compra.nome;
    const mensagemCompleta = mensagemCompra?.replace('$NOME', nomeCompra);

    const TopoLista = () => {
        return (
            <>
                <Topo melhoresProdutores={melhoresProdutores} />
                <Text style={estilos.compra}>{mensagemCompleta}</Text>
                <Text style={estilos.titulo}>{tituloProdutores}</Text>
            </>
        );
    };

    return (
        <FlatList
            data={lista}
            renderItem={({ item }) => (
                <Produtor
                    {...item}
                    aoPressionar={() => {
                        navigation.navigate('Produtor', item);
                    }}
                />
            )}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={TopoLista}
            style={estilos.lista}
        />
    );
}

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: '#EE9911BB',
    },
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    },
    compra: {
        position: 'absolute',
        top: 95,
        zIndex: 9,
        flexDirection: 'row',
        flex: 1,
        marginHorizontal: 18,
        padding: 18,
        fontSize: 20,
        lineHeight: 35,
        backgroundColor: '#EE9911',
    },
});
