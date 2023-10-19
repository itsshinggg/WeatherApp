import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons'

import City from '../../src/screens/City';
import CurrentWeather from '../../src/screens/CurrentWeather';
import UpcomingWeather from '../../src/screens/UpcomingWeather';

const Tabs = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
            backgroundColor: 'lightblue'
          },
          headerStyle: {
            backgroundColor: 'lightblue'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            color: 'tomato'
          }
        }}
      >
            <Tab.Screen name={'Current'} component={CurrentWeather} options={{tabBarIcon: ({focused}) => <Feather name={'droplet'} size={25} color={focused? 'tomato': 'black'}/>}  } />
            <Tab.Screen name={'Upcoming'} component={UpcomingWeather} options={{tabBarIcon: ({focused}) => <Feather name={'clock'} size={25} color={focused? 'tomato': 'black'}/>}  } />
            <Tab.Screen name={'City'} component={City} options={{tabBarIcon: ({focused}) => <Feather name={'home'} size={25} color={focused? 'tomato': 'black'}/>}  } />
      </Tab.Navigator>
    )
}

export default Tabs