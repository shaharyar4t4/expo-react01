import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Main from './tabscreen/Main';

export type RootTabParamList = {
  Main: undefined;
//   About: undefined;
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
   </Tab.Navigator>
  )
}
