import About from '@/app/Screen/About';
import Detialform from '@/app/Screen/Detial';
import Home from '@/app/Screen/home';
import MainLayout from '@/components/mainLayout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


//this is the root stack param list which tranfer the another data 
export type RootStackParamList = {
    Home: undefined;
    About: undefined;
    Detialform: {id: string; name: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Allscreen = () => {
  return (
    <MainLayout>
         <Stack.Navigator >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name= "About" component={About} />
            <Stack.Screen name= "Detialform" component={Detialform} />
           </Stack.Navigator>
    </MainLayout>
  )
}

export default Allscreen


