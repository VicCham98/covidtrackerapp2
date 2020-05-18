import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const Details = () => {
    return ( 
        <View style={styles.container}>
            <Text>Details View</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Details;