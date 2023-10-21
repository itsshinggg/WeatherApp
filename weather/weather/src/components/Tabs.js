import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons'

import City from '../../src/screens/City';
import CurrentWeather from '../../src/screens/CurrentWeather';
import UpcomingWeather from '../../src/screens/UpcomingWeather';

const Tabs = (weather) => {
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
            <Tab.Screen name={'Current'} options={{tabBarIcon: ({focused}) => <Feather name={'droplet'} size={25} color={focused? 'tomato': 'black'}/>}  } >
              {(props) => {<CurrentWeather weatherData={weather.list[0]} />}}
            </Tab.Screen>
            <Tab.Screen name={'Upcoming'} options={{tabBarIcon: ({focused}) => <Feather name={'clock'} size={25} color={focused? 'tomato': 'black'}/>}  } >
              {() => <UpcomingWeather weatherData={weather.list} />}
            </Tab.Screen>
            <Tab.Screen name={'City'} options={{tabBarIcon: ({focused}) => <Feather name={'home'} size={25} color={focused? 'tomato': 'black'}/>}  } >
              {() => <City weatherData={weather.city}/>}
            </Tab.Screen>
      </Tab.Navigator>
    )
}

export default Tabs