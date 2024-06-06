import React from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const PostIntroApi = () => {
    const storeData = async () => {
        // console.log('hello')
        try {
           await AsyncStorage.setItem('my-key', 'Vijaya');
          
        } catch (e) {
            console.log(e)
            // saving error
        }
    };
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('my-key');
          if (value !== null) {
            // value previously stored
            console.log(value,'11')
          }
        } catch (e) {
          // error reading value
        }
    };
    return (
        <View>
            <Text>Hello World</Text>
            <Button title="onPress" onPress={() => storeData()} />
            <Button title="onSet " onPress={() => getData()} />
        </View>
    )
}

export default PostIntroApi