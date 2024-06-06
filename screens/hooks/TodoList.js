import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, AsyncStorage, Alert } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const AuthExample = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        // Store the authentication token securely
        AsyncStorage.setItem('authToken', authUser.refreshToken);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const handleSignIn = async () => {
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      // The user is signed in
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      // Clear the authentication token from AsyncStorage
      await AsyncStorage.removeItem('authToken');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View>
      {user ? (
        <Button title="Sign Out" onPress={handleSignOut} />
      ) : (
        <View>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Sign In" onPress={handleSignIn} />
        </View>
      )}
    </View>
  );
};

export default AuthExample;
