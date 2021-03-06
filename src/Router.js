import React, { useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen'
import Provider from './context/Provider'

import { Add, Login, Map, Profile, Register, Slider, ForgotPassword, Picture, Blog } from '../src/pages'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Router() {
    // useEffect(() => {
    //     SplashScreen.hide()
    // }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Slider" component={Slider} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="MainTab" component={MainTab} />
                <Stack.Screen name="Picture" component={Picture} />
                <Stack.Screen name="Blog" component={Blog} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function MainTab() {
    return (
        <Provider>
            <Tab.Navigator tabBarOptions={{ showLabel: false }}>
                <Tab.Screen
                    name="Map"
                    component={Map}
                    options={{
                        tabBarIcon: ({ focused }) => focused ?
                            <Image
                                source={require('./assets/map_o.png')}
                                style={{ width: 35, height: 35, resizeMode: 'contain' }}
                            />
                            :
                            <Image
                                source={require('./assets/map_b.png')}
                                style={{ width: 25, height: 25, resizeMode: 'contain' }}
                            />
                    }}
                />
                <Tab.Screen
                    name="Add"
                    component={Add}
                    options={{
                        tabBarIcon: ({ focused }) => focused ?
                            <Image
                                source={require('./assets/icon_o.png')}
                                style={{ width: 45, height: 45, resizeMode: 'contain' }}
                            />
                            :
                            <Image
                                source={require('./assets/icon_b.png')}
                                style={{ width: 40, height: 40, resizeMode: 'contain' }}
                            />
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ focused }) => focused ?
                            <Image
                                source={require('./assets/profile_o.png')}
                                style={{ width: 35, height: 35, resizeMode: 'contain' }}
                            />
                            :
                            <Image
                                source={require('./assets/profile_b.png')}
                                style={{ width: 25, height: 25, resizeMode: 'contain' }}
                            />
                    }}
                />
            </Tab.Navigator>
        </Provider>
    );
}

export default Router