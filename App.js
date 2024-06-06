import React, { createContext } from "react";
import { View, Text } from "react-native";
import Intro from "./screens/Intro";
import PostIntroApi from "./screens/PostIntroApi";
import ParentScreen from "./screens/hooks/ParentScreen";

export const firstName = createContext()
export const myEmail = createContext()
let name = 'vijaya'
let Email = 'vijayashrivastaw@gmail.com'
const App = () => {
  return (

    //  <Intro/>
    // <PostIntroApi/>
    <firstName.Provider value={name}>
      <myEmail.Provider value={Email}>
        <ParentScreen />
      </myEmail.Provider>
    </firstName.Provider>
  )
}


export default App;