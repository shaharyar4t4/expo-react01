import MainLayout from '@/components/mainLayout';
import Fontisto from '@expo/vector-icons/Fontisto';
import React, { useState } from 'react';
import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';


export const Class2 = () => {
  const [checked, setchecked] = useState<boolean>(false);
  return (
    // mainlayout is used to provide a consistent layout structure across the app this content for every screen 
    <MainLayout>
      <View style={style.container}>
        {/* <Text style={style.txt}>Hello</Text> */}

        <View>
          <Image source={require("../../assets/images/react-logo.png")} style={{ width: 100, height: 100 }} resizeMode="contain" />
        </View>
        <View style={style.card}>
          <Image style={style.imgContainer} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/58/AcetoFive.JPG" }} resizeMode="contain" />
          <View style={style.cardContent}>
            <Text>Card</Text>
            {
              checked ?
                <TouchableOpacity onPress={() => setchecked(false)}>
                  <Fontisto name="checkbox-passive" size={24} color="black" />
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => setchecked(true)}>
                  <Fontisto name="checkbox-active" size={24} color="black" />
                </TouchableOpacity>
            }

          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Switch
            value={checked}
            onValueChange={(value) => setchecked(value)}
            trackColor={{ true: "lightgreen", false: "pink" }}
            thumbColor={checked ? "green" : "red"}
            style={{ transform: [{ scale: 2 }] }}
          />
        </View>
      </View>
    </MainLayout>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "radial-gradient(circle,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
    // borderBottomEndRadius: 30,
    // borderBottomStartRadius: 30,
    // justifyContent: "center",
  },
  txt: {
    color: "#000",

  },
  card: {
    borderWidth: 1,
    margin: 10
  },
  imgContainer: {
    height: 200
  },
  cardContent: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },

})
