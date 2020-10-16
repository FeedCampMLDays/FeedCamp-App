import { StyleSheet, Dimensions } from 'react-native'

const forgotPasswordStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fb6a43'
    },
    container2: {
        flex: 3,
        backgroundColor: '#fb6a43'
    },
    animationCon: {
        flex: 2,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 30
    },
    headerText: {
        marginTop: 10,
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 40,
        paddingLeft: 40
    },
    lottie: {
        marginVertical: 30,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2.5,
        alignSelf: 'center'
    }
})

export default forgotPasswordStyle