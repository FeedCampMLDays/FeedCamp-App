import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

const Slider = (props) => {
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                <Text>Slider</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export { Slider }