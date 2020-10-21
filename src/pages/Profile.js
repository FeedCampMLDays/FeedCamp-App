import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { View } from 'react-native-animatable'
import styles from '../styles/profileStyle'

const Profile = (props) => {
    const navigation = useNavigation()
    const [user, setUser] = useState([])
    const userID = auth().currentUser.uid

    useEffect(() => {
        navigation.canGoBack(false)
        getName()
    }, [])

    const getName = async () => {
        let res = await database()
            .ref(`/Users/${userID}`)
            .once('value')
            .then((snap) => {
                if (snap != null) {
                    let resList = Object.values(snap.val())
                    setUser(resList[0])
                }
            })
    }

    return (
        <SafeAreaView>
            <View style={styles.topCon}>
                <Text style={styles.text}>{user.length != 0 ? user.userName + " " + user.userSurname : ""}</Text>
                <View style={styles.coinCon}>
                    <Image source={require('../assets/coin.png')} style={styles.image} />
                    <Text style={styles.coinText}>100</Text>
                </View>
            </View>
            <TouchableOpacity onPress={null} style={styles.publicCon}>
                <Text style={styles.publicText}>Add Public Transport Card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={null} style={styles.publicCon}>
                <Text style={styles.publicText}>Donate Pet Food</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export { Profile }