import Home from '@/app/Screen/home';
import MainLayout from '@/components/mainLayout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';


//this is the root stack param list which tranfer the another data 
export type RootStackParamList = {
    Home: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Allscreen = () => {
  return (
    <MainLayout>
        <View>
           <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
           </Stack.Navigator>
        </View>
    </MainLayout>
  )
}

export default Allscreen


