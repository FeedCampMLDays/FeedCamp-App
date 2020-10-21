import React from 'react'
import { SafeAreaView, Text, View, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../styles/blogStyle'

const Blog = (props) => {
    return (
        <SafeAreaView>
            <Text style={styles.title}>Blog</Text>
            <TouchableOpacity style={styles.container}>
                <ImageBackground source={require('../assets/blog.jpg')} style={styles.image} />
                <Text style={styles.text}>Blog1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <ImageBackground source={require('../assets/blog.jpg')} style={styles.image} />
                <Text style={styles.text}>Blog2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <ImageBackground source={require('../assets/blog.jpg')} style={styles.image} />
                <Text style={styles.text}>Blog3</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export { Blog }