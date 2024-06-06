import React, { useState, useCallback } from 'react';
import { View, Button,Text } from 'react-native';

const UsecallBack = () => {
  const [count, setCount] = useState(0);

//   Define a callback function using useCallback
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency array: specify dependencies that, when changed, trigger the callback to be recreated
  return (
    <View>
      <Button title="Increment" onPress={increment} />
      {/* <Button title="Increment" onPress={()=>setCount(count+1)} /> */}

      <Text>{count}</Text>
    </View>
  );
};

export default UsecallBack;
