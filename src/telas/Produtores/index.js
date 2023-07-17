import React, { useState, useEffect } from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';

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
    const compra = route.params?.compra;
    const mensagemCompleta = mensagemCompra?.replace('$NOME', compra?.nome);
    const [mostraCompra, setMostraCompra] = useState(false);

    useEffect(() => {
        setMostraCompra(!!compra?.timeStamp);
        let timeout;
        if (compra?.timeStamp) {
            timeout = setTimeout(() => {
                setMostraCompra(false);
            }, 3000);
        }

        return () => clearTimeout(timeout);
    }, [compra?.timeStamp]);

    const TopoLista = () => {
        return (
            <>
                <Topo melhoresProdutores={melhoresProdutores} />
                {mostraCompra && (
                    <View style={estilos.cardCompra}>
                        <Text style={estilos.compra}>{mensagemCompleta}</Text>
                    </View>
                )}
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
    cardCompra: {
        marginTop: 16,
        marginHorizontal: 18,
        backgroundColor: '#00A86B',
        borderRadius: 6,
    },
    compra: {
        color: '#FFFFFF',
        padding: 18,
        fontSize: 18,
        lineHeight: 25,
        fontWeight: '700',
    },
});
