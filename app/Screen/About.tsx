import MainLayout from '@/components/mainLayout'
import React from 'react'
import { Text, View } from 'react-native'

const About = () => {
  return (
     <MainLayout>
    <View>
        <Text style= {{backgroundColor: 'lightblue'}}>About page</Text>
    </View>

   </MainLayout>
  )
}

export default About