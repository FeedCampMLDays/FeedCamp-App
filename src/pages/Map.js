import React, { useContext, useEffect } from 'react'
import { SafeAreaView, Text, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Context from '../context/store';

const Map = (props) => {
    const { state, dispatch } = useContext(Context)
    const navigation = useNavigation()

    useEffect(() => {
        navigation.canGoBack(false)
    }, [])

    // Geolocation.getCurrentPosition(
    //     info => console.log(info),
    //     error => console.log(error), { enableHighAccuracy: true }
    // )

    check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        .then((result) => {
            switch (result) {
                case RESULTS.UNAVAILABLE:
                    console.log(
                        'This feature is not available (on this device / in this context)',
                    );
                    break;
                case RESULTS.DENIED:
                    console.log(
                        'The permission has not been requested / is denied but requestable',
                    );
                    break;
                case RESULTS.GRANTED:
                    console.log('The permission is granted');
                    break;
                case RESULTS.BLOCKED:
                    console.log('The permission is denied and not requestable anymore');
                    break;
            }
        })
        .catch((error) => {
            console.log(error)
        });

    return (
        <SafeAreaView>
            <MapView
                style={{ height: Dimensions.get('window').height }}
                provider="google"
            >
                <Marker
                    coordinate={{
                        latitude: 41.069438,
                        longitude: 28.892515
                    }}
                    tracksViewChanges={true}
                />
            </MapView>
        </SafeAreaView>
    )
}

export { Map }