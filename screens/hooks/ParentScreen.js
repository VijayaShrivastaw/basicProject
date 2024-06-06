import React, { useReducer } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import UseHooks from "./UseHooks";
import UsecallBack from "./UsecallBack";
import UseMemo from "./UseMemo";
import UseRef from "./UseRef";
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const ParentScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ScrollView style={{ backgroundColor:'#E0E0E0' ,padding:20}}>

      <UseHooks />
      <Text>Count : {state.count}</Text>
      <View style={{ marginVertical: 20 }}>
        <Button title="increment" onPress={() => dispatch({ type: 'increment' })} />
      </View>
      {
        state.count == 0 ?
          null : <Button title="decrement" onPress={() => dispatch({ type: 'decrement' })} />

      }
      <View style={{marginVertical:20}}>
        <UsecallBack />
      </View>
      <View>
        <UseMemo/>
      </View>
      <UseRef/>
    </ScrollView>
  )
}


export default ParentScreen