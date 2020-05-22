import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Card } from 'react-native-paper';

const CardFilled = ({ title, color, number }) => {
    return (
        <View style={styles.container}>
            <Card style={{backgroundColor: color}}>
                <Card.Content>
                    <Text style={{color: 'white', fontSize: 20}}>{number}</Text>
                    <Text style={{color: 'white'}}>{title}</Text>
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

export default CardFilled;