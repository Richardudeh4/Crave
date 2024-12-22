import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Platform } from 'react-native';

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
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel:false,
        tabBarStyle: {
          backgroundColor: "grey",
          borderRadius: 50,
          marginBottom: 20, 
          overflow: "hidden",
          paddingHorizontal: 20,
          paddingVertical: 12,
          height: 78,
          display: "flex",
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
            <Ionicons size={size} name="home" color={color} />
          ),
      }}
        />
      <Tabs.Screen
        name="menu"
        options={{
          title:'Menu',
        headerShown:false,
          tabBarIcon:({size, color}) => (
            <Ionicons size={size} name="menu" color={color}/>
          ),
     
      }}
        />
      <Tabs.Screen
        name="booking"
        options={{
          title: 'Booking',
          headerShown:false,
          tabBarIcon:({size,color}) => (
            <Feather size={size} name="book-open"  color={color}/>
          ),
     }}
        />
      <Tabs.Screen
        name="favorite"
        options={{
          title: 'Favorite',
          headerShown:false,
          tabBarIcon:({size,color}) => (
            <Ionicons size={size} name="heart" color={color}/>
          ),
     }}
        />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          headerShown:false,
          tabBarIcon:({size,color}) => (
            <FontAwesome size={size} name="cart-plus" color={color}/>
        ),
     }}
    />
    </Tabs>
  );
}
