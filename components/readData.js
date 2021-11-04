import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, ActivityIndicator, View , Text} from 'react-native';
import { ListItem } from 'react-native-elements'
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


//const usersCollection =await firestore().collection('Users').get();

//const chatsRef = collection(db, 'cities');



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
    
    <ScrollView style={styles.container}>
      {users.map((user) => {
        return (
          <ListItem
            key={Math.floor(Math.random() * 100)}
            bottomDivider
            chevron>


              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>

              {user.message.map((m) => { return (<Text>{`${m}                    `}</Text>) })}



          </ListItem>


        );
      })}
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})




export default UserScreen;