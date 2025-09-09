import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Main from '../tabs/tabscreen/Main';
import Setting from '../tabs/tabscreen/Setting';
import Profile from '../tabs/tabscreen/profile';

const drawer = createDrawerNavigator();


export const DrawerScreen = () => {
  return (
     <drawer.Navigator>
        <drawer.Screen name='Home' component={Main}/>
        <drawer.Screen name='Setting' component={Setting}/>
        <drawer.Screen name='Profile' component={Profile}/>
     </drawer.Navigator>
  )
}