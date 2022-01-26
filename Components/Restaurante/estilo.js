import {StyleSheet} from 'react-native';

const estilo= StyleSheet.create ({
    container:{
        flex: 1,
        paddingTop: 70,
    },

    titulo:{
        paddingTop: 0,
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
        paddingHorizontal: 30,
        
    },

    card:{
        backgroundColor: '#FFFAF0',
        paddingVertical: 5,
        marginBottom: 6,
        borderRadius: 5
    },

    tituloBox:{
        fontWeight: 'bold',
        marginLeft: 10,
        
    },

    subtituloBox:{
        padding: 1,
        marginLeft: 10,
    },

    img:{
        width: 300,
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