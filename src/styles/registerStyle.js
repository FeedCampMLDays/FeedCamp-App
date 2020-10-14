import { StyleSheet, Dimensions } from 'react-native'

const registerStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fb6a43'
    },
    container2: {
        flex: 1,
        backgroundColor: '#fb6a43'
    },
    animationCon: {
        flex: 8,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 30
    },
    headerText: {
        flex: 8,
        textAlignVertical: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 40,
        paddingLeft: 40
    },
    container3: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 15
    },
    signText: {
        fontWeight: 'bold',
        color: '#fb6a43'
    },
    lottie: {
        marginVertical: 30,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2.5,
        alignSelf: 'center'
    }
})

export default registerStyle