import MainLayout from '@/components/mainLayout'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export const Class2 = () => {
  return (
    // mainlayout is used to provide a consistent layout structure across the app this content for every screen 
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
    backgroundColor:  "radial-gradient(circle,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30, 
    justifyContent: "center",
  },
  txt:{
    color:"#fff",
    textAlign: "center",
  }

})
