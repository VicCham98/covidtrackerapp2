import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CardFilled from '../components/CardFilled';
import CardOutline from '../components/CardOutline';
import GetCountry from './../hooks/GetCountry';
import PickerCountry from '../components/PickerCountry';

const Home = () => {
  const {data, loading} = GetCountry('countries')
  const [countrySelected, setCountrySelected] = useState("PE")
  const currentCountry = data.find(element => element.countryInfo.iso2 === countrySelected);
  if (typeof currentCountry !== 'undefined') {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.subContainer}>
            <View style={styles.title}>
              <MaterialCommunityIcons
                name="heart-pulse"
                color={'red'}
                size={40}
              />
              <Text style={{color: 'white', fontSize: 26, marginLeft: 10}}>Covid Tracker</Text>
            </View>
            <View>
              <PickerCountry
                countrySelected={countrySelected}
                setCountrySelected={setCountrySelected}
                data={data}
              />
            </View>
            <View style={styles.cardContent}>
              <CardFilled
                title='Estado critico'
                color="#ffca28"
                number={currentCountry.critical}
              />
              <CardFilled
                  title='Casos nuevos'
                  color="#42a5f5"
                  number={currentCountry.todayCases}
                />
            </View>
            <View style={{...styles.cardContent}}>
              <CardFilled
                  title='Muertos del dia'
                  color="#ef5350"
                  number={currentCountry.todayDeaths}
                />
              <CardFilled
                  title='Total de pruebas'
                  color="#bdbdbd"
                  number={currentCountry.tests}
                />
            </View>
          </View>
          <View style={styles.cardContentOultine}>
            <CardOutline
              title="Casos activos"
              number={currentCountry.active}
            />
            <CardOutline
              title="Recuperados"
              number={currentCountry.recovered}
            />
          </View>
          <View style={styles.cardContentOultine}>
            <CardOutline
              title="Muertes"
              number={currentCountry.deaths}
            />
            <CardOutline
              title="Total"
              number={currentCountry.cases}
            />
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return null
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e3e3e3'
    },
    subContainer: {
      height: 330,
      backgroundColor: '#673ab7',
      borderBottomEndRadius: 30,
      borderBottomStartRadius: 30,
    },
    title: {
      alignItems: 'center',
      top: '5%',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    cardContent: {
      top: '20%',
      marginBottom: '5%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    cardContentOultine: {
      marginVertical: '5%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });

export default Home;