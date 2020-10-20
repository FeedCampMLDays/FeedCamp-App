import React, { useContext } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps';
import Context from '../context/store';

const Map = (props) => {
    const { state, dispatch } = useContext(Context)
    const navigation = useNavigation()

    useEffect(() => {
        navigation.canGoBack(false)
    }, [])

    return (
        <SafeAreaView>
            <MapView
                style={{ flex: 1 }}
                provider="google"
            >
                {
                    state.feedList.map((feeds, index) => {
                        return (
                            <Marker
                                coordinate={{
                                    // latitude: feeds.lat,
                                    // longitude: feeds.lng
                                }}
                                tracksViewChanges={false}
                            />
                        )
                    }
                    )
                }
            </MapView>
        </SafeAreaView>
    )
}

export { Map }