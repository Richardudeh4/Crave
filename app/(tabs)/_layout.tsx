import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(!loading);
  }
  ,[])

if(loading){
  return(
    <ActivityIndicator size="large" color="red" />
  )
}
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#F60C8B",
        tabBarInactiveTintColor: "grey",
        tabBarShowLabel:false,
        tabBarStyle: {
          backgroundColor: "black",
          marginBottom: 0, 
          overflow: "hidden",
          paddingHorizontal: 20,
          paddingVertical: 12,
          height: 100,
          width:'100%',
          display: "flex",
          alignSelf: 'center',
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        },
        }} 
        >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown:false,
          tabBarIcon:({size, color}) => (
            <Ionicons size={size} name="home" color={color}/>
               
          ),
      }}
        />
      <Tabs.Screen
        name="menu"
        options={{
          title:'Menu',
        headerShown:true,
        headerLeft: (() => (
          <View className='w-10 h-10 rounded-full border border-1 border-transparent bg-white flex  flex-col justify-center items-center'>
            <Ionicons name="arrow-back" onPress={() => {}} size={28} color="black" className='px-12'/>
          </View>
        
        )),
        headerStyle: {
          backgroundColor: "grey",
         },
         headerTintColor: "black",

          tabBarIcon:({size, color}) => (
            <Ionicons size={30} name="menu" color={color}/>
          ),
     
      }}
        />
      <Tabs.Screen
        name="booking"
        options={{
          title: 'Booking',
          headerShown:false,
          tabBarIcon:({size,color}) => (
            <Feather size={30} name="book-open"  color={color}/>
          ),
     }}
        />
      <Tabs.Screen
        name="favorite"
        options={{
          title: 'Favorite',
          headerShown:false,
          tabBarIcon:({size,color}) => (
            <Ionicons size={30} name="heart" color={color}/>
          ),
     }}
        />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          headerShown:false,
          tabBarIcon:({size,color}) => (
            <FontAwesome size={30} name="cart-plus"  color={color}/>
        ),
     }}
    />
    </Tabs>
  );
}
