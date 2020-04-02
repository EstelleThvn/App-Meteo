import React,{useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import cloudandsun from '../assets/cloudandsun.png';


export default function Previsions() {

  const [prevTemp, setPrevTemp] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=48.853&lon=2.35&units=metric&lang=fr&appid=fcaa070d1babb38b0d7838801ad55e67`
      )
          .then((response) => response.json())
          .then(data =>{console.log(data.list); setPrevTemp(data.list[8].main.temp);
          setDesc(data.list[8].weather[0].description); 
          setDate(data.list[8].dt_txt); 
          });

          let dateCourt = date.split(" ")[0];
          let jour = dateCourt.split("-")[2];
          let mois = dateCourt.split("-")[1];
  
    return (
        <View style={{backgroundColor:'#ffffff12', paddingLeft:'0.5rem', paddingRight:'0.5rem', paddingBottom: '1.5rem', borderRadius: 10}}>

          {/* <Text>Previsions</Text> */}

          <View style={{flex:1, flexDirection:'row', alignItems:'flex-end', justifyContent:'space-between', borderBottomWidth: 2, borderBottomColor: '#FEFEFE5f', paddingBottom:'1.5rem', paddingTop:'2rem'}}>
          <Text style={styles.date}>{jour}/{mois}</Text>
          <Text style={styles.temperature}>{prevTemp}°</Text>
          <Image source={cloudandsun} style={styles.temps} />
          <Text style={styles.description}>{desc}</Text>
          </View>

          <View style={{flexDirection:'row', alignItems:'flex-end', justifyContent:'space-between', borderBottomWidth: 2, borderBottomColor: '#FEFEFE5f', paddingBottom:'1.5rem', paddingTop:'2.5rem'}}>
          <Text style={styles.date}>j+2</Text>
          <Text style={styles.temperature}>21°</Text>
          <Image source={cloudandsun} style={styles.temps} />
          <Text style={styles.description}>Ciel dégagé</Text>
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
      width:44,
      height:36,
      marginRight: 12,
      marginLeft: 6,
    },
    date: {
      fontWeight: '200',
      color: '#FEFEFE',
      fontSize: 20,
    },
    temperature: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#FEFEFE',
        marginRight: 6,
        marginLeft: 12,
    },
    description: {
      fontWeight: '200',
      fontSize: 20,
      color: '#FEFEFE',
  },
  });