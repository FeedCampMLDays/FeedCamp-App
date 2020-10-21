import React, { useState } from 'react'
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native'

import styles from '../styles/sliderStyle'
import { SwiperBottom } from '../components/SwiperBottom'

const swiper = [
    {
        image: require('../assets/slider2.png'),
        header: "Welcome to FeedCamp",
        text: "FeedCamp aims to raise awareness to street animals, encourage the volunteer people to respect those (birds, cats, and dogs) animals, and supply their nutritional needs."
    },
    {
        image: require('../assets/slider1.png'),
        header: "Upload Photo",
        text: "As you feed the animals on the street and \n upload photos, FeedCamp will be donating \n more than yours for you"
    },
    {
        image: require('../assets/slider3.png'),
        header: "PetCoins",
        text: "Let's get volunteer by uploading photos, \n and start collecting PetCoins"
    }
]

const Slider = (props) => {
    const [index, setIndex] = useState(0)

    function nextSlider() {
        if (index == swiper.length - 1) {
            props.navigation.navigate("Login")
        } else {
            setIndex(index + 1)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={swiper[index].image} style={styles.image} />
                <Text style={styles.header}>{swiper[index].header}</Text>
                <Text style={styles.text}>{swiper[index].text}</Text>
            </View>
            <TouchableOpacity onPress={nextSlider} style={styles.buttonCon}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <SwiperBottom indexNumber={index} />
        </SafeAreaView>
    )
}

export { Slider }