import { StyleSheet, Dimensions } from 'react-native'

const addStyle = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 1.3,
        borderWidth: 1,
        height: Dimensions.get('window').height / 5,
        borderColor: '#fb6a43',
        borderRadius: 20,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30
    },
    qrCon: {
        backgroundColor: '#fb6a43',
        height: Dimensions.get('window').height / 24,
        width: Dimensions.get('window').width / 2,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#ffffff',
    },
    sendCon: {
        borderWidth: 2,
        borderRadius: 20,
        height: Dimensions.get('window').height / 30,
        width: Dimensions.get('window').width / 3,
        borderColor: '#fb6a43',
        margin: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sendText: {
        color: '#fb6a43'
    }
})

export default addStyle