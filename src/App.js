import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB2EDNQEB03Dx38IRbQ3i5Lr6JAU1J9rIc',
      authDomain: 'auth-react-native-2d693.firebaseapp.com',
      databaseURL: 'https://auth-react-native-2d693.firebaseio.com',
      projectId: 'auth-react-native-2d693',
      storageBucket: 'auth-react-native-2d693.appspot.com',
      messagingSenderId: '853647722746'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
