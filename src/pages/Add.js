import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Add = (props) => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.canGoBack(false)
    }, [])

    return (
        <SafeAreaView>
            <Text>Add</Text>
        </SafeAreaView>
    )
}

export { Add }