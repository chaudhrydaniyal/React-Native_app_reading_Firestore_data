import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView,  View , Text, SafeAreaView} from 'react-native';
// import { ScrollView } from "react-native-gesture-handler";




import * as firebase from "firebase/app";
import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true };


const firebaseConfig = {
  apiKey: "AIzaSyBc0yJx_vskSCtPTdae93J5yUH5NFSUlcA",
  authDomain: "portfolio-contact-form-9ec3d.firebaseapp.com",
  projectId: "portfolio-contact-form-9ec3d",
  storageBucket: "portfolio-contact-form-9ec3d.appspot.com",
  messagingSenderId: "27538223169",
  appId: "1:27538223169:web:5356007e49ca1ab0b016c0",
  measurementId: "G-7K0CRQK5WQ"
};

// firebase.initializeApp(firebaseConfig);

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

firebase.firestore().settings({});






// YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])





function UserScreen(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    const ref = firebase.firestore().collection('messages');

    ref.onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, message } = doc.data();
        users.push({
          name,
          email,
          message
        });
      });
      setUsers(users);
    });
  }, []);

  return (


    <SafeAreaView style= {styles.container}>

      <ScrollView>

        {users.map((user) => {

        
          return (

            <View>
          <View style={styles.sectionHeader}>
          


          
          <Text style={{ fontWeight: "bold"}}>{user.email}</Text></View>
          <Text><Text style={{ fontWeight: "bold"}}>Name:</Text>{ ` ${user.name} \n`}</Text>




          {user.message.map((m) => { return (<Text>{`${m} \n`}</Text>) })}



          </View> 
          )
        })}



      </ScrollView>




    </SafeAreaView>


  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionHeader: {
    backgroundColor: '#efefef',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
})




export default UserScreen;