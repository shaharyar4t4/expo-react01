import MainLayout from '@/components/mainLayout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigation/stack/allscreen';


type PropsType = NativeStackScreenProps<RootStackParamList, "Detialform">;

const Detialform = ({ navigation, route }: PropsType) => {
  return (
     <MainLayout>
            <View style={style.container}>
                <Text>Detial page</Text>
                <Text>{route.params.id} -- {route.params.name}</Text>
                <View style={style.btn}>
                    <Button title='Go to Start' onPress={() => navigation.popToTop()} />
                </View>
            </View>

        </MainLayout>
  )
}

export default Detialform ;
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

///route is used to get the data from the previous screen