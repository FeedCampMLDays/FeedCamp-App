import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import { MyButton, MyInput } from '../components';
import styles from '../styles/loginStyle'

const Login = (props) => {
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
                    onChangeText={null}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    multiline={false}
                />

                <MyInput
                    source={require('../assets/password_o.png')}
                    placeholder="Password"
                    autoCapitalize="none"
                    onChangeText={null}
                    keyboardType="default"
                    secureTextEntry={true}
                    multiline={false}
                />

                <MyButton
                    onPress={() => props.navigation.navigate("Register")}
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