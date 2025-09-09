import ProductDetial from '@/app/api_pratices/ProductDetial';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Main from './tabscreen/Main';
import Setting from './tabscreen/Setting';

export type RootTabParamList = {
    Main: undefined;
    Setting: undefined;
    ProductDetial: undefined;
    //   Detialform: { id: string; name: string };
    //   Effect: undefined;
    //   RamdonQuote: undefined;
    //   ProductDetial: undefined;

};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Main"} component={Main}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: () => (
                        <AntDesign name="home" size={24} color="black" />

                    ),
                }}

            />
            <Tab.Screen name={"Setting"} component={Setting} />
            <Tab.Screen name={"ProductDetial"} component={ProductDetial} />

        </Tab.Navigator>
    )
}
