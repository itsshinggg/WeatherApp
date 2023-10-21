import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import {useGetWeather} from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem';

const App = () => {
  let [loading, error, weather] = useGetWeather()
  
  if (weather && weather.list && !loading){
    console.log(loading, error, weather.list[0])
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    )
  }
  else{
    return (
      <View style={styles.container}>
        {error ? <ErrorItem/> : <ActivityIndicator size={'large'} color={'blue'} />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App;
