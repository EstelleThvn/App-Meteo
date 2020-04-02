import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import cloudandsun from '../assets/cloudandsun.png';

export default function Home(props) {

    let date = new Date();
    const [hours, setHours] = useState(date.getHours());
    const [minutes, setMinutes] = useState(date.getMinutes());
    const [month, setMonth] = useState(date.getMonth());
    const [jour, setDate] = useState(date.getDate());
    const [fullYear, setFullYear] = useState(date.getFullYear());

    setInterval(() => {
        date = new Date();
        if(date.getMonth() < 10){
         setMonth('0' + (date.getMonth() + 1));
     } else {
         setMonth(date.getMonth());
     }
     if(date.getDate() < 10){
      setDate('0' + date.getDate());
  } else {
      setDate(date.getDate());
  }
        if(date.getHours() < 10){
            setHours('0' + date.getHours());
        } else {
            setHours(date.getHours());
        }
        if(date.getMinutes() < 10){
            setMinutes('0' + date.getMinutes())
        } else {
            setMinutes(date.getMinutes());
        }
    }, 100);

    const [previsions, setPrevisions] = useState([]);

// useEffect(() => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=48.8534&lon=2.3488&units=metric&lang=fr&appid=263a5f1863ce2e62cca66607b4b1016f`;

//     const requete = fetch(url);
// // Ecriture de la chaîne de promesse :
// requete.then(reponse => reponse.json()) // .json() transforme l'objet "reponse" en JSON et retourne une nouvelle promesse
//        .then(data => { // le JSON est récupéré dans le .then suivant, et seulement à ce moment on peut l'utiliser 👍
//             console.log(data);

//             setPrevisions(data);
//         });
// },[]);



    const [temp, setTemp] = useState('');
    const [description, setDescription] = useState('');
    const [ville, setVille] = useState('');
    fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=48.8534&lon=2.3488&units=metric&lang=fr&appid=fcaa070d1babb38b0d7838801ad55e67`
        )
        
            .then((response) => response.json())
            .then(data => {console.log(data); 
                setTemp(data.main.temp);
                setDescription(data.weather[0].description);
                setVille(data.name);
            });


    return (
        <View style={{display:'flex', flex:1}}>
            <View style={{flex:1}}>
            <View style={{alignSelf:'flex-start'}}>
    <Text style={styles.lieu}>{ville}</Text>
                <View>
    <Text style={styles.date}>{jour}/{month}/{fullYear}</Text>
                <Text style={styles.heure}>{hours}h{minutes}</Text>
                </View>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
          <Image style={styles.temps} source={cloudandsun} />
          </View>
          <View>
          <Text style={styles.temperature}>{temp}°</Text>
    <Text style={styles.description}>{description}</Text>
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
        fontWeight: 'bold',
        fontSize: 60,
        color: '#FEFEFE',
    },
    date: {
        fontSize: 32,
        color: '#E3D9F5',
        paddingTop: '0.5rem',
    },
    heure: {
        fontSize: 24,
        color: '#E3D9F5',
        paddingTop: '0.5rem',
        marginBottom: 20,
        fontWeight: '600',
    },
    temperature: {
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        fontSize: 64,
        color: '#FEFEFE',
        paddingTop:'1rem',
        marginTop: 20,
    },
    description: {
        alignSelf: 'flex-end',
        fontWeight: '100',
        fontSize: 32,
        color: '#E3D9F5',
        paddingTop: '0.75rem',
        marginBottom: 40,
    },

  });