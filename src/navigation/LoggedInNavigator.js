import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/HomeScreen';
import Events from '../screens/EventScreen';

export default createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                // A compléter
            }
        },
        Events: {
            screen: Events,
        },

    }
);