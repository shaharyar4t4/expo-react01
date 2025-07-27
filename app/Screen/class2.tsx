import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Class2 = () => {
  return (
    <View style={style.container}>
        <Text>Hello</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:0.2,
    backgroundColor:"#000"
  }

})
