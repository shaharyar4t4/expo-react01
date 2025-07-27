import MainLayout from '@/components/mainLayout'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export const Class2 = () => {
  return (
    <MainLayout>
        <View style={style.container}>
        <Text style={style.txt}>Hello</Text>
    </View>
    </MainLayout>
    
    
    
  )
}
const style = StyleSheet.create({
  container:{
    flex:0.2,
    backgroundColor: "linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30, 
    justifyContent: "center",
  },
  txt:{
    color:"#000",
    textAlign: "center",
  }

})
