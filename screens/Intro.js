import React, { createContext, useEffect, useState } from "react";
import { View, Text, Button, ScrollView, Image, StyleSheet, FlatList } from "react-native";
import axios from "axios";
import RenderItem from "../common/RenderItem";
import { jsx } from "react/jsx-runtime";
// import user from '../DataJson/data.json'


const Intro = () => {
    const [data, setData] = useState('')

    // const getAapiData = async () => {
    //     console.log('hello')
    //     try {
    //        let result = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    //        setData(result.data)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }

    // }

    // const getAapiData = async () => {
    //     console.log('hello')
    //     await axios('https://jsonplaceholder.typicode.com/posts').then((res) => {
    //         setData(res.data)
    //         // console.log(res.data)
    //     }).catch((error) => console.log(error))

    // }


    // const getAapiData = async () => {
    //    try{
    //     let result = await fetch('https://reqres.in/api/users?page=2')
    //     result = await  result.json()
    //     setData(result.data)
    //     // console.log(result,'11')
    //     // console.log(result[0].body,'55')
    //    }
    //    catch(error) {
    //     console.log(error)
    //    }
        
    // }
        // console.log(da)

const getAapiData= async() =>{
    try{
      let result = await  axios({
            method: 'get',
            url: 'https://reqres.in/api/users?page=2',
            
            // responseType: 'stream'
          })
            .then(function (response) {
                // console.log(response.data.data[0].email,'111')
                setData(response.data.data)
            //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            });
    }
    catch(error){
        console.log(error)
    }
}
    
        useEffect(() => {
        getAapiData()
    }, [])
    return (
        <ScrollView style={styles.container}>
            {/* <FlatList
                data={data}
                renderItem={(item) => <RenderItem data={item}/>}
                keyExtractor={item => item.id}
            /> */}



              <FlatList
                data={data}
                renderItem={(item) => <RenderItem data={item}/>}
                keyExtractor={item => item.id}
            />
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        // flex1: 1,
        backgroundColor: '#fff',
        marginVertical:20
    },
})

export default Intro