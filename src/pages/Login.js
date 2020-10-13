import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

const Login = (props) => {
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
                <Text>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export { Login }