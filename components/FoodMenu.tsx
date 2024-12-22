import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import popularMeals from "@/assets/popularMeals.json";
const FoodMenu = () => {
  return (
    <ScrollView style={{marginTop: 38, gap:12}} horizontal showsVerticalScrollIndicator={false} bounces={true}>
    {
     popularMeals.map((item,i) => (
      <View key={i} style={{}}>
        <View style={{display:"flex" , flexDirection: "column", gap:12, alignItems: "center", paddingLeft:12}}>
        <Image source={{uri:item.image}} style={{width:100, height:100,borderWidth:1, borderRadius: 12}}/>
        <Text style={{fontWeight: '500',fontSize: 16}}>
            {item.name}
             </Text>
       </View>
      </View>
      
     ))
    }
    </ScrollView>
  )
}

export default FoodMenu

const styles = StyleSheet.create({})