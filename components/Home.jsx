import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import cloudandsun from '../assets/cloudandsun.png';

export default function Home() {
    return (
        <View style={{display:'flex', flex:1}}>
            <View style={{flex:1}}>
            <View style={{alignSelf:'flex-start'}}>
                <Text style={styles.lieu} >PARIS</Text>
                <View>
                <Text style={styles.date}>Jeudi 19 Mars</Text>
                <Text style={styles.heure}>17h00</Text>
                </View>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
          <Image style={styles.temps} source={cloudandsun} />
          </View>
          <View style={{textAlign:'right'}}>
          <Text style={styles.temperature}>17°</Text>
          <Text style={styles.description}>Ciel dégagé</Text>
          </View>
          </View>
        </View>
      );
   }


   const styles = StyleSheet.create({
    temps: {
        width:220,
        height:180,
    },
    lieu: {
        fontFamily: 'notoserif',
        fontWeight: 'bold',
        fontSize: 60,
        color: '#FEFEFE',
    },
    date: {
        fontFamily: 'notoserif',
        fontSize: 32,
        color: '#FEFEFE',
        opacity: '0.82',
        paddingTop: '0.5rem',
    },
    heure: {
        fontFamily: 'notoserif',
        fontSize: 24,
        color: '#FEFEFE',
        opacity: '0.82',
        paddingTop: '0.5rem',
    },
    temperature: {
        fontFamily: 'notoserif',
        fontWeight: 'bold',
        fontSize: 64,
        color: '#FEFEFE',
        paddingTop:'3rem',
    },
    description: {
        fontFamily: 'notoserif',
        fontWeight: '100',
        fontSize: 32,
        color: '#FEFEFE',
        opacity: '0.82',
        paddingTop: '0.75rem',
    },

  });