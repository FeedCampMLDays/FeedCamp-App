import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';
import DropDownPicker from 'react-native-dropdown-picker';
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

                <DropDownPicker
                    defaultValue={null}
                    containerStyle={styles.pickerCon1}
                    placeholder="Gender"
                    onChangeItem={(value) => console.log(value)}
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
                    onChangeItem={(value) => console.log(value)}
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
                        onPress={() => props.navigation.navigate("MainTab")}
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