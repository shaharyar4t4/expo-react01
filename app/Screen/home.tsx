import React from 'react'
import { Text, View } from 'react-native'
import MainLayout from '../../components/mainLayout'

const Home = () => {
  return (
   <MainLayout>
    <View>
        <Text style= {{backgroundColor: 'lightblue'}}>Home page</Text>
    </View>

   </MainLayout>
  )
}

export default Home