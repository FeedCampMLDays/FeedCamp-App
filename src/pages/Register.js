import React, { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, Image, Alert } from 'react-native'
import * as Animatable from 'react-native-animatable';
import DropDownPicker from 'react-native-dropdown-picker';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { MyButton, MyInput } from '../components';
import styles from '../styles/registerStyle'

const Register = (props) => {
    const [userName, setUserName] = useState('')
    const [userSurname, setUserSurname] = useState('')
    const [userMail, setUserMail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userConPassword, setUserConPassword] = useState('')
    const [userGender, setUserGender] = useState('')
    const [userPet, setUserPet] = useState('')

    const saveName = (text) => setUserName(text)
    const saveSurname = (text) => setUserSurname(text)
    const saveMail = (text) => setUserMail(text)
    const savePassword = (text) => setUserPassword(text)
    const saveConPassword = (text) => setUserConPassword(text)
    const saveGender = (itemValue, itemIndex) => setUserGender(itemValue)
    const savePet = (itemValue, itemIndex) => setUserPet(itemValue)

    const saveUser = () => {
        if (
            userName.length != 0 &&
            userSurname != 0 &&
            userMail != 0 &&
            userPassword != 0 &&
            userConPassword != 0 &&
            userGender != 0 &&
            userPet != 0
        ) {
            if (userPassword === userConPassword) {
                auth()
                    .createUserWithEmailAndPassword(userMail, userPassword)
                    .then((res) => {
                        database().ref(`Users/${res.user.uid}`).push({
                            userName: userName,
                            userSurname: userSurname,
                            userGender: userGender.valueOf(),
                            userPet: userPet.valueOf()
                        });
                        Alert.alert('User account created!')
                        props.navigation.navigate('Login')
                    }).catch((error) => {
                        if (error.code === 'auth/email-already-in-use') {
                            Alert.alert('That email address is already in use!');
                        }
                        if (error.code === 'auth/invalid-email') {
                            Alert.alert('That email address is invalid!');
                        }
                        else {
                            Alert.alert(error.message)
                        }
                    });
            } else {
                Alert.alert('Passwords do not match!')
            }
        }
        else {
            Alert.alert('Please fill in the fields!')
        }
    }

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
                    onChangeText={saveName}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    multiline={false}
                />

                <MyInput
                    source={require('../assets/user_o.png')}
                    placeholder="Surname"
                    autoCapitalize="words"
                    onChangeText={saveSurname}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    multiline={false}
                />

                <MyInput
                    source={require('../assets/mail_o.png')}
                    placeholder="E-mail"
                    autoCapitalize="none"
                    onChangeText={saveMail}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    multiline={false}
                />

                <MyInput
                    source={require('../assets/password_o.png')}
                    placeholder="Password"
                    autoCapitalize="none"
                    onChangeText={savePassword}
                    keyboardType="default"
                    secureTextEntry={true}
                    multiline={false}
                />

                <MyInput
                    source={require('../assets/password_o.png')}
                    placeholder="Confirm Password"
                    autoCapitalize="none"
                    onChangeText={saveConPassword}
                    keyboardType="default"
                    secureTextEntry={true}
                    multiline={false}
                />

                <DropDownPicker
                    defaultValue={null}
                    containerStyle={styles.pickerCon1}
                    placeholder="Gender"
                    onChangeItem={saveGender}
                    style={styles.pickerCon2}
                    placeholderStyle={styles.pickerPlace}
                    dropDownStyle={styles.pickerDrop}
                    labelStyle={{ color: '#000000' }}
                    customArrowDown={() => <Image source={require('../assets/down_o.png')} style={styles.pickerArrow} />}
                    customArrowUp={() => <Image source={require('../assets/up_o.png')} style={styles.pickerArrow} />}
                    items={[
                        { label: "Female", value: "0" },
                        { label: "Male", value: "1" },
                        { label: "Other", value: "2" },
                    ]}
                />

                <DropDownPicker
                    defaultValue={null}
                    containerStyle={styles.pickerCon1}
                    placeholder="Do you have a pet?"
                    onChangeItem={savePet}
                    style={styles.pickerCon2}
                    placeholderStyle={styles.pickerPlace}
                    dropDownStyle={styles.pickerDrop}
                    labelStyle={{ color: '#000000' }}
                    customArrowDown={() => <Image source={require('../assets/down_o.png')} style={styles.pickerArrow} />}
                    customArrowUp={() => <Image source={require('../assets/up_o.png')} style={styles.pickerArrow} />}
                    items={[
                        { label: "Yes", value: "0" },
                        { label: "No", value: "1" },
                    ]}
                />

                <View style={styles.container5}>
                    <MyButton
                        onPress={saveUser}
                        text="Sign Up"
                    />
                </View>

                <View style={styles.container4}>
                    <Text>Do you have an account? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                        <Text style={styles.signText}>Sign In</Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </SafeAreaView>
    )
}

export { Register }