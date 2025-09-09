import ProductDetial from '@/app/api_pratices/ProductDetial';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
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
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'green',
                headerShown: false,
                tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
                // tabBarPosition: 'bottom',

            }}
        >
            <Tab.Screen name={"Main"} component={Main}


                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name="home" size={size} color={color} />
                    ),
                }}

            />
            <Tab.Screen name={"Setting"} component={Setting}
                options={{
                    tabBarLabel: "Setting",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="setting" size={size} color={color} />

                    ),
                }}
            />
            <Tab.Screen name={"ProductDetial"} component={ProductDetial}
                options={{
                    tabBarLabel: "Product Detial",
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="documents" size={size} color={color} />

                    ),
                }}
            />

        </Tab.Navigator>
    )
}
