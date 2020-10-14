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
    },
    pickerCon1: {
        width: Dimensions.get('window').width / 1.3,
        height: Dimensions.get('window').height / 12.3,
        alignSelf: 'center',
    },
    pickerCon2: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: '#ffe6df',
        marginVertical: 8,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    pickerPlace: {
        color: 'rgba(0,0,0,0.4)',
        fontSize: 15
    },
    pickerDrop: {
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        borderColor: '#ffe6df'
    },
    pickerArrow: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    container4: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20
    },
    signText: {
        fontWeight: 'bold',
        color: '#fb6a43'
    },
    container5: {
        marginTop: 10,
        backgroundColor: 'rgba(0,0,0,0)'
    }
})

export default registerStyle