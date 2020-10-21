import { Dimensions, StyleSheet } from 'react-native'

const sliderStyle = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF' },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    header: {
        marginTop: 40,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fb6a43',
        textAlign: 'center'
    },
    text: {
        marginHorizontal: 30,
        marginTop: 50,
        textAlign: 'center'
    },
    buttonCon: {
        marginTop: 80,
        borderRadius: 20,
        backgroundColor: '#fb6a43',
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').height / 20,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20
    }
})

export default sliderStyle