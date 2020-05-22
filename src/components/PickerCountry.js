import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import {Picker} from '@react-native-community/picker';

const PickerCountry = ({ countrySelected, setCountrySelected, data }) => {
  return (
    <View style={styles.container}>
      <Picker
        mode="modal"
        selectedValue={countrySelected}
        // style={{height: 50, width: 100}}
        onValueChange={(itemValue) =>
          { setCountrySelected(itemValue) }
        }
      >
        {
          data.map((country, index) => {
            return (
              <Picker.Item
                key={index}
                label={country.country}
                value={country.countryInfo.iso2}
              />
            )
          })
        }
        </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PickerCountry;