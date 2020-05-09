import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './src/reducers/reducer';
// navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// screens
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import ExploreScreen from './src/screens/Explore';
import SubscribeScreen from './src/screens/Subscribe';
import VideoPlayerScreen from './src/screens/VideoPlayer';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const store = createStore(reducer);

const rootHome = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }:any) => ({
        tabBarIcon: ({ color }:any) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Explore') {
            iconName = 'explore'
          } else if (route.name === 'Subscribe') {
            iconName = 'subscriptions'
          }

          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Subscribe" component={SubscribeScreen} />
    </Tab.Navigator>
)};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={rootHome} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="watch" component={VideoPlayerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});