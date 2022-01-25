import React from 'react';
import {Text, ImageBackground, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import cidade from '../../assets/Olinda.jpg';
import estilo from './estilo';

export default function Home (){
    return(
            <ImageBackground source={cidade} style={estilo.fundo}>
            <LinearGradient
            start= {{x:0, y:0}}
            end= {{x:1, y:0}}
            colors={['#DAA520', '#186dea', '#cf6ba2']}
            style={estilo.box}>
                <Text style={estilo.titulo}>Olinda</Text>
                <Text style={estilo.subtitulo}>Saiba o que visitar em Olinda</Text>
            </LinearGradient>


            </ImageBackground>
        

        
        
    )

}