import { StyleSheet, Dimensions } from 'react-native'

const profileStyle = StyleSheet.create({
    topCon: {
        backgroundColor: '#fb6a43',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 4,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignSelf: 'center'
    },
    text: {
        fontSize: 20,
        color: '#ffffff',
        margin: 30,
        textAlign: 'center'
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        margin: 30
    },
    coinText: {
        color: '#ffffff',
        fontSize: 18,
        textAlignVertical: 'center'
    },
    coinCon: {
        alignSelf: 'center',
        flexDirection: 'row',
        // borderWidth: 1,
        width: Dimensions.get('window').width / 2,
        borderRadius: 20,
        // borderColor: ''
    },
    publicCon: {
        height: Dimensions.get('window').height / 15,
        width: Dimensions.get('window').width / 1.5,
        alignSelf: 'center',
        backgroundColor: '#ffe6df',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#ff6a43',
        marginTop: 30,
        justifyContent: 'center'
    },
    publicText: {
        color: '#ff6a43',
        textAlign: 'center',
        fontWeight: 'bold',
    }
})

export default profileStyle