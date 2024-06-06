import React, { useState, useMemo } from 'react';
import { View, Text } from 'react-native';

const UseMemo = () => {
  const [count, setCount] = useState(0);

  // Define a memoized value using useMemo
  const doubledCount = useMemo(() => {
    return count * 2;
  }, [count]); // Dependency array: specify dependencies that, when changed, trigger the value to be recomputed

  return (
    <View>
      <Text>Count: {count}</Text>
      <Text>Doubled Count: {doubledCount}</Text>
    </View>
  );
};

export default UseMemo;
