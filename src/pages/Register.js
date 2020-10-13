import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

const Register = (props) => {
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => props.navigation.navigate("MainTab")}>
                <Text>Register</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export { Register }