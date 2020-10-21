import { StyleSheet, Dimensions } from 'react-native'

const pictureStyle = StyleSheet.create({
    container: {

    },
    addCon: {
        width: Dimensions.get('window').width / 1.3,
        height: Dimensions.get('window').height / 3,
        borderColor: '#fb6a43',
        borderRadius: 30,
        borderWidth: 3,
        alignSelf: 'center',
        marginTop: 30,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        height: 100,
        width: 100,
        alignSelf: 'center'
    },
    preview: {
        height: Dimensions.get('window').height,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    imageBackground: {
        width: '100%',
        height: '100%'
    },
    okButtonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    buttonContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 50,
        right: 0,
        left: 0,
        alignItems: 'center'
    },
    camera: {
        marginBottom: 20,
        height: 70,
        width: 70,
        resizeMode: 'contain'
    },
    imageCon: {
        height: Dimensions.get('window').height
    }
})

export default pictureStyle