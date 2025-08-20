import ProductDetial from '@/app/api_pratices/ProductDetial';
import RamdonQuote from '@/app/api_pratices/RamdonQuote';
import About from '@/app/Screen/About';
import Detialform from '@/app/Screen/Detial';
import Effect from '@/app/Screen/Effect';
import Home from '@/app/Screen/home';
import MainLayout from '@/components/mainLayout';
import Fontisto from '@expo/vector-icons/Fontisto';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';


//this is the root stack param list which tranfer the another data 
export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Detialform: { id: string; name: string };
  Effect: undefined;
  RamdonQuote: undefined;
  ProductDetial: undefined;
  
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Allscreen = () => {
  return (
    <MainLayout>
      <Stack.Navigator initialRouteName={"Home"} screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#999921" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
      }}>
        <Stack.Screen name="Home" component={Home} options={{
         // this is used to customize the header of the screen
         header: () =>
          (
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20 }}>
              <Fontisto name="home" size={24} color="black" />
              <Text style={{ color: "black", fontSize: 20 }}>Home</Text>
              <Fontisto name="checkbox-passive" size={10} color="black" />
            </View>
          )
        }} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Detialform" component={Detialform} options={({route})=>({
            title: route.params.name,
        })}/>
        <Stack.Screen name ="Effect" component={Effect}/>
        <Stack.Screen name= "RamdonQuote" component={RamdonQuote}/>
        <Stack.Screen name= "ProductDetial" component={ProductDetial}/>

        </Stack.Navigator>
    </MainLayout>
  )
}

export default Allscreen


