import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

import pousada1 from '../../assets/amparo1.jpg';
import pousada2 from '../../assets/amparo2.jpg';

import hotel1 from '../../assets/hotel1.jpg';
import hotel2 from '../../assets/hotel2.jpg';

import maraberto1 from '../../assets/maraberto1.jpg';
import maraberto2 from '../../assets/maraberto2.jpg';

import estilo from './estilo';

export default function Restaurante (){
    return(

        <ScrollView>
        <View style={estilo.container}>

        <Text style={estilo.titulo}>Pousadas e Hoteis em Olinda</Text>
        <Text style={estilo.subtitulo}>Olinda conta com excelentes hoteis e pousadas cujos
        preços podem variar de R$200,00 à R$1500,00. Veja algumas abaixo.
        </Text>

        
        <View style={estilo.box}>
        <View style={estilo.card}>

            <ScrollView style={estilo.scroll} horizontal={true}>
            <Image source={pousada1} style={estilo.img}/>
            <Image source={pousada2} style={estilo.img}  />
            </ScrollView>

            <Text style={estilo.tituloBox}>Pousada do Amparo</Text>
            <Text style={estilo.subtituloBox}>Localização: R. do Amparo, 199 - Amparo, Olinda - PE</Text>
            <Text style={estilo.subtituloBox}>Valor Médio: R$ 277,00</Text>
        </View>

        <View style={estilo.card}>
        <ScrollView style={estilo.scroll} horizontal={true}>
        <Image source={hotel1} style={estilo.img} />
        <Image source={hotel2} style={estilo.img} /> 
        </ScrollView>
        <Text style={estilo.tituloBox}>Hotel Costeiro</Text>
        <Text style={estilo.subtituloBox}>Localização: Av. Min. Marcos Freire, 681 - Bairro Novo, Olinda - PE</Text>
        <Text style={estilo.subtituloBox}>Valor Médio: R$ 211,00</Text>

        </View>

        <View style={estilo.card}>
        <ScrollView style={estilo.scroll} horizontal={true}>
        <Image source={maraberto1} style={estilo.img} />
        <Image source={maraberto2} style={estilo.img} />
        </ScrollView>
        <Text style={estilo.tituloBox}>Hotel Mar Aberto Olinda</Text>
        <Text style={estilo.subtituloBox}>Localização: R. Manuel Borba, 228 - Varadouro, Olinda - PE </Text>
        <Text style={estilo.subtituloBox}>Valor Médio: R$ 327,00</Text>

        </View>

        </View>


        </View>

        </ScrollView>
    )

}