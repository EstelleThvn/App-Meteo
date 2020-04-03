import React,{useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Previsions() {

  const [prevTemp1, setPrevTemp1] = useState('');
  const [desc1, setDesc1] = useState('');
  const [date1, setDate1] = useState('');
  const [icon1, setIcon1] = useState('');

  const [prevTemp2, setPrevTemp2] = useState('');
  const [desc2, setDesc2] = useState('');
  const [date2, setDate2] = useState('');
  const [icon2, setIcon2] = useState('');

  const [prevTemp3, setPrevTemp3] = useState('');
  const [desc3, setDesc3] = useState('');
  const [date3, setDate3] = useState('');
  const [icon3, setIcon3] = useState('');

  fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=48.853&lon=2.35&units=metric&lang=fr&appid=fcaa070d1babb38b0d7838801ad55e67`
      )
          .then((response) => response.json())
          .then(data =>{console.log(data.list); setPrevTemp1(data.list[8].main.temp);
          setDesc1(data.list[8].weather[0].description); 
          setDate1(data.list[8].dt_txt);
          setIcon1(data.list[8].weather[0].icon); 

          setPrevTemp2(data.list[16].main.temp);
          setDesc2(data.list[16].weather[0].description); 
          setDate2(data.list[16].dt_txt);
          setIcon2(data.list[16].weather[0].icon); 

          setPrevTemp3(data.list[24].main.temp);
          setDesc3(data.list[24].weather[0].description); 
          setDate3(data.list[24].dt_txt);
          setIcon3(data.list[24].weather[0].icon); 
          });

          let dateCourt1 = date1.split(" ")[0];
          let jour1 = dateCourt1.split("-")[2];
          let mois1 = dateCourt1.split("-")[1];

          let dateCourt2 = date2.split(" ")[0];
          let jour2 = dateCourt2.split("-")[2];
          let mois2 = dateCourt2.split("-")[1];

          let dateCourt3 = date3.split(" ")[0];
          let jour3 = dateCourt3.split("-")[2];
          let mois3 = dateCourt3.split("-")[1];
  
    return (
        <View style={{backgroundColor:'#ffffff12', paddingLeft:'0.5rem', paddingRight:'0.5rem', paddingBottom: '1.5rem', borderRadius: 10}}>

          <View style={{flex:1, flexDirection:'row', alignItems:'flex-end', justifyContent:'space-between', borderBottomWidth: 2, borderBottomColor: '#FEFEFE5f', paddingBottom:'1.5rem', paddingTop:'2rem'}}>
          <Text style={styles.date}>{jour1}/{mois1}</Text>
          <Text style={styles.temperature}>{prevTemp1}°</Text>
          {icon1 !== '' && <Image style={styles.temps} source={require(`../assets/${icon1}.png`)}/>}
          <Text style={styles.description}>{desc1}</Text>
          </View>

          <View style={{flexDirection:'row', alignItems:'flex-end', justifyContent:'space-between', borderBottomWidth: 2, borderBottomColor: '#FEFEFE5f', paddingBottom:'1.5rem', paddingTop:'2.5rem'}}>
          <Text style={styles.date}>{jour2}/{mois2}</Text>
          <Text style={styles.temperature}>{prevTemp2}°</Text>
          {icon2 !== '' && <Image style={styles.temps} source={require(`../assets/${icon2}.png`)}/>}
          <Text style={styles.description}>{desc2}</Text>
          </View>

          <View style={{flexDirection:'row', alignItems:'flex-end', justifyContent:'space-between', borderBottomWidth: 2, borderBottomColor: '#FEFEFE5f', paddingBottom:'1.5rem', paddingTop:'2.5rem'}}>
          <Text style={styles.date}>{jour3}/{mois3}</Text>
          <Text style={styles.temperature}>{prevTemp3}°</Text>
          {icon3 !== '' && <Image style={styles.temps} source={require(`../assets/${icon3}.png`)}/>}
          <Text style={styles.description}>{desc3}</Text>
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
      width:40,
      height:40,
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