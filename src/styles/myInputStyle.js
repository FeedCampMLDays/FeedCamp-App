import { StyleSheet, Dimensions } from 'react-native'

const myInputStyle = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 1.3,
        height: Dimensions.get('window').height / 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ffe6df',
        marginVertical: 8,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    image: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default myInputStyle