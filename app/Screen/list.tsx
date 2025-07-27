import MainLayout from '@/components/mainLayout'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const List = () => {
  const [items, setItems] = useState([
        {id:1, name:"List"},
        {id:2, name:"List"},
        {id:3, name:"List"},
        {id:4, name:"List"},
        {id:5, name:"List"},
        {id:6, name:"List"},
        {id:7, name:"List"},
        {id:8, name:"List"},
        {id:9, name:"List"},
        {id:10, name:"List"},
        {id:11, name:"List"},
        {id:12, name:"List"},
    ])
  return (
   <MainLayout>
     <ScrollView>
      {
        items.map((item,key)=>(
          <View style={style.itemContainer} key={key}>
            <Text style={style.itemText}>{`${item.name} -- ${item.id}`}</Text>
          </View>
        ))
      }
     </ScrollView>

   </MainLayout>
  )
}

export default List

const style = StyleSheet.create({
  itemContainer:{
    backgroundColor:"lightblue",
    padding:20,
    margin:10
  },
  itemText:{
    fontSize:18,
    textAlign:"center",
    justifyContent:"center",
  }
})