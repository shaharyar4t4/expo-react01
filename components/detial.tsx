import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Detial = () => {
    const [name, setName] = useState(); 
    const [semster, setSemster] = useState();

  return (
    <View style={style.container}>
        <Text>Full name: {name}</Text>
        <TextInput 
        style={style.inputfield}
        placeholder='Full name'/>
        
        <Text>Semster no</Text>
            <TextInput 
        style={style.inputfield}
        placeholder='Semseter'/>
    </View>
  )
}

export default Detial

const style = StyleSheet.create({
    container:{
        flexDirection: "column",
        padding: 10,
    },
    inputfield:{
        marginBottom:10,
        marginTop: 10,
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
    
    }

});