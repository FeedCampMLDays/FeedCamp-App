import React, { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, Alert } from 'react-native'
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import { MyButton, MyInput } from '../components';
import styles from '../styles/loginStyle'

const Login = (props) => {
    const [userMail, setUserMail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const loginMail = (text) => setUserMail(text)
    const loginPassword = (text) => setUserPassword(text)

    const loginUser = () => {
        if (userMail.length != 0 && userPassword.length != 0) {
            auth()
                .signInWithEmailAndPassword(userMail, userPassword)
                .then(() => {
                    props.navigation.navigate("MainTab")
                    AsyncStorage.setItem('@USER_ID', auth().currentUser.uid)
                }).catch((error) => {
                    if (error.code === 'auth/user-not-found') {
                        Alert.alert('That account is not found!');
                    }
                    if (error.code === 'auth/invalid-email') {
                        Alert.alert('That email address is invalid!');
                    }
                    else {
                        Alert.alert(error.message)
                    }
                })
        } else {
            Alert.alert('Please fill in the fields!')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container2}>
                <LottieView
                    source={require('../lottie/animal.json')}
                    autoPlay
                    loop
                    style={styles.lottie}
                />
                <Text style={styles.headerText}>Login</Text>
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
                    onChangeText={loginMail}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    multiline={false}
                />

                <MyInput
                    source={require('../assets/password_o.png')}
                    placeholder="Password"
                    autoCapitalize="none"
                    onChangeText={loginPassword}
                    keyboardType="default"
                    secureTextEntry={true}
                    multiline={false}
                />

                <View style={styles.forgotCon}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('ForgotPassword')}>
                        <Text>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <MyButton
                    onPress={loginUser}
                    text="Sign In"
                />

                <View style={styles.container3}>
                    <Text>Don't you have an account? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
                        <Text style={styles.signText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </SafeAreaView>
    )
}

export { Login }