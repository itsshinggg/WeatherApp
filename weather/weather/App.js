import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Location from 'expo-location';
import Tabs from './src/components/Tabs';
import {WEATHER_API_KEY} from '@env'
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])

  const fetchWeather = () => {}

  useEffect(()=> {
    (async() => {
      let {status} = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted"){
        setError('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  if (location){
    console.log(location)
  }

  if (loading){
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'}/>
      </View>
    )
  }

  return(
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App;
