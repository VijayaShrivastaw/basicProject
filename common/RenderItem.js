import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const RenderItem = (props) => {
    data = props.data.item
    console.log(data)
    return (
        <View style={styles.container} >
            <View style={{flex:0.4,backgroundColor:'#fff',}}>
                {data.avatar && <Image source={{ uri: data.avatar }} style={styles.image} />}

            </View>
            <View style={{flex:0.6,backgroundColor:'#fff'}}>
                <Text style={styles.title}>{data.email}</Text>
                <Text style={styles.body}>{`${data.first_name} ${data.last_name}`}</Text>
            </View>
            {/* <Text style={styles.title}>Title :{data.title}</Text>
            <Text style={styles.body}>Body :{data.body}</Text> */}

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        // padding: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        elevation: 2,
        borderRadius: 10,
        opacity: 0.8,
        justifyContent: "space-between"
    },
    title: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600'
    },
    body: {
        // color:'#F7F9F9',
        fontSize: 15,
        color: '#797D7F',
        marginTop: 10
    },
    image:{ height: 100,
         width: 100,
         borderTopLeftRadius:10,
         borderBottomLeftRadius:10 }
})

export default RenderItem