import React, { useEffect } from 'react'
import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../styles/addStyle'

const Add = (props) => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.canGoBack(false)
    }, [])

    return (
        <SafeAreaView style={{ paddingTop: 60 }}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.qrCon}>
                    <Text style={styles.text}>Scan QR Code</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Picture')} style={styles.qrCon} >
                    <Text style={styles.text}>Take a Photo of Dog Food</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendCon}>
                    <Text style={styles.sendText}>SEND</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.qrCon}>
                    <Text style={styles.text}>Scan QR Code</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Picture')} style={styles.qrCon}>
                    <Text style={styles.text}>Take a Photo of Cat Food</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendCon}>
                    <Text style={styles.sendText}>SEND</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.qrCon}>
                    <Text style={styles.text}>Scan QR Code</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Picture')} style={styles.qrCon}>
                    <Text style={styles.text}>Take a Photo of Bird Food</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendCon}>
                    <Text style={styles.sendText}>SEND</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export { Add }