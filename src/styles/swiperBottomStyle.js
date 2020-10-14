import { StyleSheet } from 'react-native'

const swiperBottomStyle = StyleSheet.create({
    container: {
        flexDirection: 'row', marginTop: 50, alignSelf: 'center'
    },
    conSelect: {
        height: 15,
        width: 50,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#fb6a43',
        alignSelf: 'center',
        backgroundColor: '#ffe6df',
        margin: 5
    },
    con: {
        height: 15,
        width: 15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#fb6a43',
        alignSelf: 'center',
        backgroundColor: null,
        margin: 5
    }
})

export default swiperBottomStyle