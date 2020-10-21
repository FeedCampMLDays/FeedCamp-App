import React, { useEffect, useState, useRef } from 'react'
import { SafeAreaView, PermissionsAndroid, TouchableOpacity, Image, ImageBackground, View, Button, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RNCamera } from 'react-native-camera';
import styles from '../styles/addStyle'

const Add = (props) => {
    const navigation = useNavigation()
    const [imageUri, setImageUri] = useState('')
    const camera = useRef(null)

    useEffect(() => {
        navigation.canGoBack(false)
    }, [])

    // const requestCameraPermission = async () => {
    //     try {
    //         const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.CAMERA,
    //             {
    //                 title: "Cool Photo App Camera Permission",
    //                 message:
    //                     "Cool Photo App needs access to your camera " +
    //                     "so you can take awesome pictures.",
    //                 buttonNeutral: "Ask Me Later",
    //                 buttonNegative: "Cancel",
    //                 buttonPositive: "OK"
    //             }
    //         );
    //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //             console.log("You can use the camera");
    //         } else {
    //             console.log("Camera permission denied");
    //         }
    //     } catch (err) {
    //         console.warn(err);
    //     }
    // };

    const takePicture = async () => {
        if (camera) {
            const options = { quality: 0.5, base64: false };
            const data = await camera.current?.takePictureAsync(options).then(data => {
                console.log(data.uri);
                setImageUri(data == undefined ? '' : data.uri);
            })
        }
    };

    return (
        <SafeAreaView>
            {
                imageUri == '' ?
                    <View>
                        {/* <TouchableOpacity onPress={takePicture} style={styles.addCon}>
                            <Image source={require('../assets/plus.png')} style={styles.image} />
                        </TouchableOpacity> */}
                        <RNCamera
                            ref={camera}
                            style={styles.preview}
                            type={RNCamera.Constants.Type.back}
                            // flashMode={RNCamera.Constants.FlashMode.on}
                            androidCameraPermissionOptions={{
                                title: 'Permission to use camera',
                                message: 'We need your permission to use your camera',
                                buttonPositive: 'Ok',
                                buttonNegative: 'Cancel',
                            }}
                            onGoogleVisionBarcodesDetected={({ barcodes }) => {
                                console.log(barcodes);
                            }}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={takePicture} >
                                <Image source={require('../assets/camera.png')} style={styles.camera} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <View style={styles.imageCon}>
                        <ImageBackground style={styles.imageBackground} source={{ uri: imageUri }} />
                        <View style={styles.okButtonContainer}>
                            <Button title="OK" onPress={() => setImageUri('')} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={null} >
                                <Image source={require('../assets/send.png')} style={styles.camera} />
                            </TouchableOpacity>
                        </View>
                    </View>
            }
        </SafeAreaView>
    )
}

export { Add }