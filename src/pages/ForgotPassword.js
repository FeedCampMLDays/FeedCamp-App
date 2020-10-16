import React, { useState } from 'react'
import { SafeAreaView, Text, View, Alert } from 'react-native'
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import auth from '@react-native-firebase/auth';
import { MyButton, MyInput } from '../components';
import styles from '../styles/forgotPasswordStyle';

const ForgotPassword = (props) => {
    const [userMail, setUserMail] = useState('')

    const resetMail = (text) => setUserMail(text)

    const resetPassword = () => {
        if (userMail.length != 0 && userMail != undefined) {
            auth()
                .sendPasswordResetEmail(userMail)
                .then(() => {
                    Alert.alert('Please check your email!')
                    props.navigation.navigate('Login')
                }).catch((error) => {
                    Alert.alert('Please enter a valid e-mail!')
                })
        }
        else {
            Alert.alert('Please fill in the fields!')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container2}>
                <LottieView
                    source={require('../lottie/cat.json')}
                    autoPlay
                    loop
                    style={styles.lottie}
                />
                <Text style={styles.headerText}>Reset Password</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                duration={3000}
                style={styles.animationCon}
            >
                <MyInput
                    source={require('../assets/mail_o.png')}
                    placeholder="E-mail"
                    autoCapitalize="none"
                    onChangeText={resetMail}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    multiline={false}
                />

                <MyButton
                    onPress={resetPassword}
                    text="Reset Your Password"
                />
            </Animatable.View>
        </SafeAreaView>
    )
}

export { ForgotPassword }