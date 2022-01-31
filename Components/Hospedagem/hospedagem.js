import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import estilo from './estilo';

export default function Restaurante (){
    return(

        <ScrollView>
        <LinearGradient
        colors={['#3e6852', '#073196'  ]}
        style={estilo.container}>

        <Text style={estilo.titulo}>Pousadas e Hoteis em Olinda</Text>
        <Text style={estilo.subtitulo}>Olinda conta com excelentes hoteis e pousadas cujos
        preços podem variar de R$200,00 à R$1500,00. Veja algumas abaixo.
        </Text>

        
        <View style={estilo.box}>
        <View style={estilo.card}>

            <ScrollView style={estilo.scroll} horizontal={true}>
            <Image source={require('../../assets/amparo1.jpg')} style={estilo.img}/>
            <Image source={require('../../assets/amparo2.jpg')} style={estilo.img}  />
            </ScrollView>

            <Text style={estilo.tituloBox}>Pousada do Amparo</Text>
            <Text style={estilo.subtituloBox}>Localização: R. do Amparo, 199 - Amparo, Olinda - PE</Text>
            <Text style={estilo.subtituloBox}>Valor Médio: R$ 277,00</Text>
        </View>

        <View style={estilo.card}>

        <ScrollView style={estilo.scroll} horizontal={true}>
        <Image source={require('../../assets/hotel1.jpg')} style={estilo.img} />
        <Image source={require('../../assets/hotel2.jpg')} style={estilo.img} /> 
        </ScrollView>

        <Text style={estilo.tituloBox}>Hotel Costeiro</Text>
        <Text style={estilo.subtituloBox}>Localização: Av. Min. Marcos Freire, 681 - Bairro Novo, Olinda - PE</Text>
        <Text style={estilo.subtituloBox}>Valor Médio: R$ 211,00</Text>
        </View>

        <View style={estilo.card}>

        <ScrollView style={estilo.scroll} horizontal={true}>
        <Image source={require('../../assets/maraberto1.jpg')} style={estilo.img} />
        <Image source={require('../../assets/maraberto2.jpg')} style={estilo.img} />
        </ScrollView>

        <Text style={estilo.tituloBox}>Hotel Mar Aberto Olinda</Text>
        <Text style={estilo.subtituloBox}>Localização: R. Manuel Borba, 228 - Varadouro, Olinda - PE </Text>
        <Text style={estilo.subtituloBox}>Valor Médio: R$ 327,00</Text>

        </View>

        </View>


        </LinearGradient>

        </ScrollView>
    )

}