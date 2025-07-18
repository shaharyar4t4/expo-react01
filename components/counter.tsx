import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const counter = () => {
  return (
    <View>
        <Text>Counter: </Text>
        <Button title='Increament'/>
        <Button title='Decreament'/>
    </View>
  )
}

export default counter

const style = StyleSheet.create({
    continer:{
        alignItems: "center",
    }
})