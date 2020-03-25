import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import cloudandsun from '../assets/cloudandsun.png';


export default function Previsions() {
    return (
        <View>

          {/* <Text>Previsions</Text> */}

          <View style={{flex:1, flexDirection:'row', alignItems:'flex-end', justifyContent:'space-between', borderBottomWidth: 2, borderBottomColor: '#FEFEFE5f', paddingBottom:'1.5rem', paddingTop:'2.5rem'}}>
          <Text style={styles.date}>Ajd.</Text>
          <Text style={styles.temperature}>17°</Text>
          <Image source={cloudandsun} style={styles.temps} />
          <Text style={styles.description}>Nuageux</Text>
          </View>

          <View style={{flex:1, flexDirection:'row', alignItems:'flex-end', justifyContent:'space-between', borderBottomWidth: 2, borderBottomColor: '#FEFEFE5f', paddingBottom:'1.5rem', paddingTop:'2.5rem'}}>
          <Text style={styles.date}>Jeu.</Text>
          <Text style={styles.temperature}>21°</Text>
          <Image source={cloudandsun} style={styles.temps} />
          <Text style={styles.description}>Nuageux</Text>
          </View>

        </View>
      );
   }


   const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ef5b3a',
    },
    temps: {
      width:50,
      height:42,
    },
    title: {
        padding: 8,
        fontSize: 28,
        fontWeight: 'bold',
    },
    label: {
        padding: 6,
        fontSize: 20,
    },
    date: {
      fontFamily: 'notoserif',
      fontWeight: 'regular',
      fontSize: 30,
      color: '#FEFEFE',
    },
    temperature: {
        fontFamily: 'notoserif',
        fontWeight: 'bold',
        fontSize: 38,
        color: '#FEFEFE',
    },
    description: {
      fontFamily: 'notoserif',
      fontWeight: 'thin',
      fontSize: 30,
      color: '#FEFEFE',
  },
  });