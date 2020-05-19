import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Card } from 'react-native-paper';

const CardOutline = ({ title }) => {
    return ( 
        <View style={styles.container}>
            <Card style={{backgroundColor: '#fff'}}>
              <Card.Content>
                <Text style={{fontSize: 25}}>50</Text>
                <Text>{title}</Text>
              </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '35%',
    },
});

export default CardOutline;