import { StyleSheet, Dimensions } from 'react-native'

const blogStyle = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        color: '#fb6a43',
        marginTop: 30
    },
    container: {
        marginTop: 20,
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width / 1.3,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        borderRadius: 20
    },
    image: {
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width / 1.3,
        resizeMode: 'contain',
        borderRadius: 20
    },
    text: {
        padding: 20,
        position: 'absolute',
        color: '#ffffff',
        justifyContent: 'flex-end'
    }
})

export default blogStyle