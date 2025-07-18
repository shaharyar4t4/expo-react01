import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Counter = () => {

  // this hook which is used in react native
  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<String>("Shaharyar");
  return (
    <View style = {style.continer}>
        <Text>Counter: {counter}</Text>
        <View style={style.btn}>
        <Button title='Increament'/>
        <Button title='Decreament' color="red"/>
        </View>
    </View>
  )
}

export default Counter

const style = StyleSheet.create({
    continer:{
        alignItems: "center",
    },
    btn:{
     flexDirection: "row",
     gap: 9,
     marginVertical: 10,
    }
})