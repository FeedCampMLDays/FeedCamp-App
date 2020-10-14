import React from 'react'
import { TextInput, Image, View } from 'react-native'
import styles from '../styles/myInputStyle'

const MyInput = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.source} style={styles.image} />
            <TextInput
                placeholder={props.placeholder}
                autoCapitalize={props.autoCapitalize}
                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
                multiline={props.multiline}
            />
        </View>
    )
}

export { MyInput }