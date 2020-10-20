import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Profile = (props) => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.canGoBack(false)
    }, [])

    return (
        <SafeAreaView>
            <Text>Profile</Text>
        </SafeAreaView>
    )
}

export { Profile }