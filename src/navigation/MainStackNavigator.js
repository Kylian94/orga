import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/HomeScreen'
import Detail from '../screens/DetailsScreen'
import Login from '../screens/LoginScreen'
import Event from '../screens/EventScreen'
import AddFriends from '../screens/AddFriendsScreen'
import AddListe from '../screens/AddListeScreen'

const Stack = createStackNavigator()

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ title: 'ORGA', headerTitleStyle: { alignSelf: 'center' }, }}
                />
                <Stack.Screen
                    name='Event'
                    component={Event}
                    options={{ title: 'Votre Event', headerTitleStyle: { alignItems: 'center' }, }}
                />
                <Stack.Screen
                    name='AddFriends'
                    component={AddFriends}
                    options={{ title: 'Ajouter des amis', headerTitleStyle: { alignItems: 'center' }, }}
                />
                <Stack.Screen
                    name='AddListe'
                    component={AddListe}
                    options={{ title: 'Ajouter une liste', headerTitleStyle: { alignItems: 'center' }, }}
                />
                <Stack.Screen
                    name='Detail'
                    component={Detail}
                    options={{ title: 'Detail Screen' }}
                />
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{ title: 'Login Screen' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator