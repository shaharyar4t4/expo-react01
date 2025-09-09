import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Main from './tabscreen/Main';
import Setting from './tabscreen/Setting';
import Profile from './tabscreen/profile';

export type RootTabParamList = {
  Main: undefined;
  Setting: undefined;
  Profile: undefined;
//   Detialform: { id: string; name: string };
//   Effect: undefined;
//   RamdonQuote: undefined;
//   ProductDetial: undefined;
  
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabScreen = () => {
  return (
   <Tab.Navigator>
    <Tab.Screen  name={"Main"} component={Main} />
    <Tab.Screen  name={"Setting"} component={Setting} />
    <Tab.Screen  name={"Profile"} component={Profile} />

   </Tab.Navigator>
  )
}
