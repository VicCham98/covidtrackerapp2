import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Details from './src/screens/Details';
import Home from './src/screens/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#673ab7" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;
  
              if (route.name === 'Inicio') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Pais') {
                iconName = focused ? 'flag' : 'flag-outline';
              }
  
              // You can return any component that you like here!
              return <MaterialCommunityIcons name={iconName} size={25} color={color} />;
            },
          })}
          initialRouteName="Home"
          activeColor="#673ab7"
          inactiveColor="#757575"
          barStyle={{ backgroundColor: '#fff' }}
        >
          <Tab.Screen name="Inicio" component={Home} />
          <Tab.Screen name="Pais" component={Details} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
