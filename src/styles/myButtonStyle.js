import { StyleSheet, Dimensions } from 'react-native'

const myButtonStyle = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 1.8,
        height: Dimensions.get('window').height / 16,
        backgroundColor: '#fb6a43',
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 5,
        marginTop: 10
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
    }
})

export default myButtonStyle