import {StyleSheet} from 'react-native';

const estilo= StyleSheet.create ({
    container:{
        flex: 1,
        paddingTop: 70,

        
    },

    titulo:{
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#f6fcf9',
    },

    subtitulo:{
        textAlign: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20,
        color: '#f6fcf9',
    },

    box:{
        paddingHorizontal: 40,
        justifyContent: 'center',
        
    },

    card:{
        backgroundColor: '#FFFAF0',
        paddingVertical: 5,
        marginBottom: 6,
        borderRadius: 5,
        
        alignItems: 'center'
    },

    tituloBox:{
        fontWeight: 'bold',
        textAlign: 'center'
        
    },

    subtituloBox:{
        padding: 1,
        textAlign: 'center',
    },

    img:{
        width: 250,
        height: 80,
        marginHorizontal: 5,
        borderWidth: 2,
        borderColor: "black"

    },

    scroll:{
        flexDirection: 'row',
    },

   

})

export default estilo;