import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MainLayout from '../../components/mainLayout';
import { RootStackParamList } from '../navigation/stack/allscreen';

type PropsType = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({navigation}: PropsType) => {
  return (
   <MainLayout>
    <View style={style.container}>
        <Text>Home page</Text>
        <View style={style.btn}>
          <Button  title='Go to About' onPress={()=> navigation.navigate("About")}/>
        <Button title ="Go to Detial" onPress={()=> navigation.navigate("Detialform", {id: "1", name: "Shaharyar"})}/>
        </View>
    </View>

   </MainLayout>
  )
}

export default Home
 
const style= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn:{
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,}
})