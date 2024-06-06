import React, { useRef, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const UseRef = () => {
  // Create a ref for TextInput
  const textInputRef = useRef(null);
  const [text, setText] = useState('')
  const [todoList, setTodoList] = useState([]);

  // Function to focus on TextInput
  const focusOnInput = () => {
    textInputRef.current.focus();
  };
  function addHere() {
    if (text === '') {
      return null
    }
    setTodoList([...todoList, { id: Date.now().toString(), title: text }]);
    setText("");
  }
  function deleteHere(id) {
    setTodoList(todoList.filter((ele) => ele.id !== id))

  }
  return (
    <View>
      <TextInput
        ref={textInputRef} // Assign the ref to the TextInput component
        placeholder="Enter text"
        value={text}
        onChangeText={(val) => setText(val)}
      />
      {/* <Button title="Focus on Input" onPress={focusOnInput} /> */}

      <View>
        {
          todoList.map((val, id) =>
            <View style={styles.textContainer} key={id}>
              <Text style={styles.text}>{val.title}</Text>
              <Button title="Delete" onPress={() => deleteHere(val.id)} />

            </View>)
        }
      </View>
      <Button title="ADD" onPress={() => addHere()} />

    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#fff',
    marginVertical: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    color: '#2E86C1',
    fontSize: 18,
    fontWeight: '700',
  }
})

export default UseRef;
