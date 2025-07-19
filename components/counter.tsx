import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface Iprops{
  defealtValue: number,
  title: string,

}
// const Counter = (props: Iprops) => {

  const Counter: React.FC<Iprops> = (props) => {
  // this hook which is used in react native
  const [counter, setCounter] = useState<number>(props.defealtValue);
  // const [name, setName] = useState<String>("Shaharyar");
  // this function which is show how to create a proper increament number
  const increament =(): void =>{
     setCounter(counter + 1);
  }
  // this function which is show how to create a proper decreament number
  const decreament =(): void =>{
     setCounter(counter - 1 );
  }

  return (
    <View style = {style.continer}>
        <Text>Counter: {props.title} to {counter} </Text>
        <View style={style.btn}>
        <Button title='Increament'onPress={increament}/>
        <Button title='Decreament' onPress={decreament} color="red"/>
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


//props 
// this is helps to make a variable is dynamic mostly it is used for take a developer item and show in ui