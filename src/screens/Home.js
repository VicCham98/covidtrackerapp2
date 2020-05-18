import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const Home = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.subContainer}>
              <View>
                <Text style={{color: 'white', fontSize: 20}}>Covid Tracker</Text>
              </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e3e3e3'
    },
    subContainer: {
      backgroundColor: '#694fad',
      height: '50%',
      borderBottomEndRadius: 30,
      borderBottomStartRadius: 30,
    }
  });

export default Home;