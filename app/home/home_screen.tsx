import Counter from "@/components/counter";
import Detial from "@/components/detial";
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export const HomeScreen = () => {
  return (
          <View style={style.container}>
         <ScrollView contentContainerStyle={{paddingBottom:250}}>
         <View style={style.mainbox}>
            <Text style={style.subtext}>Expo React Native Class 01</Text>
         </View>
         <View>
            <Text style={style.tophead}>Hi there 👋🏻</Text>
            <Text style={style.minibox}>I am Shaharyar Ali</Text>
            <Text style={style.minibox}>BSCS</Text>
         </View>
         <View >
            {/*this button is not multiple customise things */}
            <Button title="Submit" onPress={() => console.log("Shaharyar")} color={"blue"} />
            <TouchableOpacity style={style.btnstyle}>
               <Text style={style.plaintxt}>Touchable Opacity</Text>
            </TouchableOpacity>

            <Pressable style={({ pressed }) => [
               style.btnstyle,
               pressed && style.btnhovestyle
            ]}>
               <Text style={style.plaintxt}>Pressable</Text>
            </Pressable>


            <TextInput
               style={style.input}
               placeholder="Enter Name"
               placeholderTextColor={"#888"}

            />

            <View style={{padding: 10,}}>
               <Counter  defealtValue={10} title={"start with 10"}/>
               <Counter defealtValue={20} title={"Start with 20"}/>
               <Detial/>
            </View>
            
         </View>
         </ScrollView>
      </View>
  )
}

const style = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff"
   },
   tophead: {
      fontWeight: "bold",
      fontFamily: "Poppins",
      fontSize: 30,
      paddingTop: 10,
      paddingLeft: 15,
   },
   mainbox: {
      backgroundColor: "#1D2671",
      width: "100%",
      height: "20%",
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      justifyContent: "center",
      padding: 20,
   },
   minibox: {
      paddingTop: 15,
      paddingLeft: 15,
      borderColor: "#c4c4c4",
      fontSize: 18,
      borderBlockColor: "#c4c4c4",
      borderWidth: 1,
      margin: 10,
      borderRadius: 10,
   },
   subtext: {
      color: "#fff",
      fontSize: 20,
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: "Poppins"
   },
   btnstyle: {
      margin: 10,
      padding: 10,
      borderRadius: 10,
      backgroundColor: "#000",
      justifyContent: "center",

   },
   btnhovestyle: {
      margin: 10,
      padding: 10,
      borderRadius: 10,
      backgroundColor: "#c4c4c4",
      justifyContent: "center",

   },
   plaintxt: {
      color: "#fff",
      justifyContent: "center",
      alignContent: "center",
   },
   input: {
      borderWidth: 1,
      borderColor: "#888",
      padding: 10,
      fontSize: 16,
      margin: 10
   }
});

