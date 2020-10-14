import React from 'react'
import { View } from 'react-native'

import styles from '../styles/swiperBottomStyle'

const SwiperBottom = props => {
    const { indexNumber } = props

    return (
        <View style={styles.container}>
            <View style={indexNumber == 0 ? styles.conSelect : styles.con} />
            <View style={indexNumber == 1 ? styles.conSelect : styles.con} />
            <View style={indexNumber == 2 ? styles.conSelect : styles.con} />
        </View>
    )
}

export { SwiperBottom }