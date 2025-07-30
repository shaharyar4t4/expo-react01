import MainLayout from '@/components/mainLayout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigation/stack/allscreen';

type PropsType = NativeStackScreenProps<RootStackParamList, "About">;

const About = ({ navigation }: PropsType) => {
    return (
        <MainLayout>
            <View style={style.container}>
                <Text>About page</Text>
                <View style={style.btn}>
                    <Button title='Go to Home' onPress={() => navigation.goBack()} />
                    <Button title="Go to Detial" onPress={() => navigation.navigate("Detialform", { id: "2", name: "Shaharyar" })} />
                </View>
            </View>

        </MainLayout>
    )
}

export default About;
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