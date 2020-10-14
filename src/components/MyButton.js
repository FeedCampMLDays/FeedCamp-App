import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from '../styles/myButtonStyle'

const MyButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export { MyButton }