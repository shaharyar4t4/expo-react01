import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export const Class2 = () => {
  return (
    // this particular is same for every mobile platform
   // safeAreaProvider is used to handle the safe area insets on devices with notches or rounded corners
   // SafeAreaView is used to render content within the safe area boundaries
    <SafeAreaProvider>
     <SafeAreaView style={style.container} edges={['top', 'left', 'right']}>
      {/* StatusBar is used to control the appearance of the status bar */}
      <StatusBar hidden ={true}/>
     </SafeAreaView>
    </SafeAreaProvider>
    
  )
}
const style = StyleSheet.create({
  container:{
    flex:0.2,
    backgroundColor: "linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)"
  },
  txt:{
    color:"#fff"
  }

})
