import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import milagre from '../../assets/milagres.jpg';

import artesanato from '../../assets/artesanato.jpg';

import mirante from '../../assets/mirante.png';



import estilo from './estilo';

export default function Restaurante (){
    return(

        
        <View style={estilo.container}>
        <ScrollView>

        <Text style={estilo.titulo}>Passeios em Olinda</Text>
        <Text style={estilo.subtitulo}>Patrimônio Histórico e Cultural da Humanidade da Unesco desde 1982,
        Olinda é muito mais que um destino de Carnaval ou um bate e volta a partir de Recife.
        </Text>

        <View style={estilo.box}>

        <View style={estilo.card}>
        <Text style={estilo.tituloBox}>Mirante do Alto da Sé</Text>
        <Text style={estilo.subtituloBox}>Localização:R. Bpo. Coutinho - Carmo, Olinda - PE</Text>
        <Image source={mirante} style={estilo.img}/>
        </View> 

        <View style={estilo.card}>
        <Text style={estilo.tituloBox}>Praia dos Milagres</Text>
        <Text style={estilo.subtituloBox}>Localização: R. Manuel Borba, S/N - Varadouro, Olinda - PE</Text>
        <Image source={milagre} style={estilo.img} />
        </View>

        <View style={estilo.card}>
        <Text style={estilo.tituloBox}>Mercado de Artesanato Silva Pontual</Text>
        <Text style={estilo.subtituloBox}>Localização: R. Bpo. Coutinho, 669 - Carmo, Olinda - PE </Text>
        <Image source={artesanato} style={estilo.img} />
        </View>

        </View>
        
        </ScrollView>
        </View>

       
    )

}