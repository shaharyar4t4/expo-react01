import MainLayout from '@/components/mainLayout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootTabParamList } from '../TabScreen';


type PropsType = NativeStackScreenProps<RootTabParamList, "Main">;

const Profile = () => {
  return (
    <MainLayout>
      <View style={style.container}>
        <Text>profile page</Text>
        <View style={style.btn}>
          {/* <Button title='Go to About' onPress={() => navigation.navigate("About")} /> */}

          {/* <Button title='Go to Effect' onPress={() => navigation.navigate("Effect")} />
          <Button title="Go to Detial" onPress={() => navigation.navigate("Detialform", { id: "1", name: "Shaharyar" })} /> */}
        </View>
        <View style={style.apibtn}>
          {/* <Button title='Go to Ramdom Quote' onPress={() => navigation.navigate("RamdonQuote")} /> */}
        </View>
        <View style={style.apibtn}>
          {/* <Button title='Product Page' onPress={() => navigation.navigate("ProductDetial")} /> */}
        </View>
      </View>

    </MainLayout>
  )
}

export default Profile

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  apibtn:{
   marginTop: 20,
  }
})