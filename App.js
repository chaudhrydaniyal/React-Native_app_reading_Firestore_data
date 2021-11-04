import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserScreen from './components/readData';





export default function App() {

  return (
    <View style={styles.container}>

      <Text style={{color:'red', fontWeight: "bold"}}>Chaudhry Daniyal Khalid</Text>
      
      <UserScreen />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



  // useEffect(() => {

  //   const hospitals = []

  // ref.get()
  //   .then(snapshot => {
  //     snapshot.docs.forEach(hospital => {

  //       // console.log(hospital.data())
  //       let name = hospital.data().name
  //       let email = hospital.data().email
  //       let message = hospital.data().message



  //       // convert array to th object
  //       const obj = Object.assign({}, message);

  //       // print object
  //       // console.log(message);


  //       // console.log(message)
  //       const myJSON = JSON.stringify(obj);
  //       hospitals.push({ name, email })

  //       // hospitals.push(hospital.data())
  //     })
  //   })

  // })

  // console.log(hospitals.length)
 

  // //  console.log(new1)
