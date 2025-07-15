import { StyleSheet, Text, View } from "react-native";



export default function RootLayout() {

   return(
    <View style={style.container}>

     <View style={style.mainbox}>
      <Text style={style.text}>Expo React Native Class 01</Text>
     </View>
    </View>
   );

}

const style = StyleSheet.create({
   container:{
    flex: 1,
    backgroundColor: "#fff"
   },
   mainbox:{

    backgroundColor: "#000",
    width:"100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding:20,
   },
   text:{
    color:  "#fff",
    fontSize: 20
   }

});
