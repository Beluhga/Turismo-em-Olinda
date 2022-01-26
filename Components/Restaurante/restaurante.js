import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


import gosta1 from '../../assets/restaurante1.jpg';
import gosta2 from '../../assets/restaurante1-1.jpg';

import tonho1 from '../../assets/restaurante2.jpg';
import tonho2 from '../../assets/restaurante2-1.jpg';

import gamelera1 from '../../assets/restaurante3.jpg';
import gamelera2 from '../../assets/restaurante3-1.jpg';

import estilo from './estilo';

export default function Restaurante (){
    return(

        <ScrollView>
        
        <LinearGradient
        colors={['#d26fa4', '#073196' ]}
        style={estilo.container}>
        

        <Text style={estilo.titulo}>Bares e Restaurantes</Text>
        <Text style={estilo.subtitulo}>O prazer da boa comida você encontra em Olinda.
            Com inúmeras opções de restaurantes, a cidade oferece o melhor
            da culinária Regional, juntamente à saborosa cozinha.
            Confira alguns bares e restaurantes famosos.
        </Text>

        
        <View style={estilo.box}>
        <View style={estilo.card}>

            <ScrollView style={estilo.scroll} horizontal={true}>
            <Image source={gosta1} style={estilo.img}/>
            <Image source={gosta2} style={estilo.img}  />
            </ScrollView>

            <Text style={estilo.tituloBox}>Pra Quem Gosta</Text>
            <Text style={estilo.subtituloBox}>Localização: Tv. do Rosário, 111 - Monte, Olinda - PE</Text>
        </View>

        <View style={estilo.card}>
        <ScrollView style={estilo.scroll} horizontal={true}>
        <Image source={tonho1} style={estilo.img} />
        <Image source={tonho2} style={estilo.img} /> 
        </ScrollView>
        <Text style={estilo.tituloBox}>Casa de Tonho</Text>
        <Text style={estilo.subtituloBox}>Localização: R. Cel. Alberto Lundgren, 582 - Bairro Novo, Olinda - PE</Text>
        </View>

        <View style={estilo.card}>
        <ScrollView style={estilo.scroll} horizontal={true}>
        <Image source={gamelera1} style={estilo.img} />
        <Image source={gamelera2} style={estilo.img} />
        </ScrollView>
        <Text style={estilo.tituloBox}>Restaurante Gameleira Regional</Text>
        <Text style={estilo.subtituloBox}>Localização: Av. Min. Marcos Freire, 1747 - Bairro Novo, Olinda - PE </Text>
        </View>

        </View>
        </LinearGradient>
        
        </ScrollView>
    )

}