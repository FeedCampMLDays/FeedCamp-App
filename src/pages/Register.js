import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { MyButton, MyInput } from '../components';
import styles from '../styles/registerStyle'

const Register = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.headerText}>Register</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                duration={3000}
                style={styles.animationCon}
            >
                <MyInput
                    source={require('../assets/user_o.png')}
                    placeholder="Name"
                    autoCapitalize="words"
                    onChangeText={null}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    multiline={false}
                />

                <MyInput
                    source={require('../assets/user_o.png')}
                    placeholder="Surname"
                    autoCapitalize="words"
                    onChangeText={null}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    multiline={false}
                />

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

                <MyInput
                    source={require('../assets/password_o.png')}
                    placeholder="Confirm Password"
                    autoCapitalize="none"
                    onChangeText={null}
                    keyboardType="default"
                    secureTextEntry={true}
                    multiline={false}
                />

                <MyButton
                    onPress={() => props.navigation.navigate("MainTab")}
                    text="Sign Up"
                />

            </Animatable.View>
        </SafeAreaView>
    )
}

export { Register }