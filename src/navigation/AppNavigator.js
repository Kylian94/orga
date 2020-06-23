import * as React from 'react'

// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/HomeScreen'
import Detail from '../screens/DetailsScreen'
import Login from '../screens/LoginScreen'
import Event from '../screens/EventScreen'
import AddFriends from '../screens/AddFriendsScreen'
import AddEvent from '../screens/AddEventScreen'
import AddListe from '../screens/AddListeScreen'
import Liste from '../screens/ListeScreen'
import AddItem from '../screens/AddItemScreen'
import Profil from '../screens/ProfilScreen'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// add this after other import statements
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MainTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Mes Events') {
                        iconName = focused ? 'calendar' : 'calendar';
                    } else if (route.name === 'Profil') {
                        iconName = focused ? 'user' : 'user';
                    } else if (route.name === 'Créer un Event') {
                        iconName = focused ? 'plus-circle' : 'plus-circle';
                    }

                    //You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#21B3C6',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Mes Events" component={Home} />
            <Tab.Screen name="Créer un Event" component={AddEvent} />
            <Tab.Screen name="Profil" component={Profil} />
        </Tab.Navigator>
    )
}

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    gestureEnabled: false,
                    headerStyle: {
                        backgroundColor: '#21B3C6'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    },
                    headerTintColor: '#ffffff',
                    headerBackTitleVisible: false
                }}
                headerMode='float'>

                <Stack.Screen
                    name='Home'
                    component={MainTabNavigator}
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
                    name='Liste'
                    component={Liste}
                    options={{ title: 'Liste', headerTitleStyle: { alignItems: 'center' }, }}
                />
                <Stack.Screen
                    name='AddItem'
                    component={AddItem}
                    options={{ title: 'Ajouter un item', headerTitleStyle: { alignItems: 'center' }, }}
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