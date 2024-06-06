import React, { useContext } from "react";
import { View,Text } from "react-native";
import {firstName, myEmail} from '../../App'
const UseHooks = ()=>{
    const getFirstName = useContext(firstName)
    const getMyEmail = useContext(myEmail)
    // console.log(getFirstName,getMyEmail,'99')
    return(
        <View>
            <Text>
                {`my name is ${getFirstName} here, my Email ${getMyEmail}`} 
            </Text>
        </View>
    )
}
export default UseHooks