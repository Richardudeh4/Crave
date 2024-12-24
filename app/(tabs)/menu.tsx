import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputField from '@/components/InputField'
import cart from "@/assets/images/cart.png";
import { Ionicons } from '@expo/vector-icons';
import PressButton from '@/components/PressButton';

const buttonItem =  [
  {
  title: "Fast food",
  icon: "hamburger",
  },
  {
  title: "Fast food",
  icon: "fish",
  },
  {
  title: "Dessert",
  icon: "hamburger",
  },
]
const menu = () => {
  console.log("length on the arrray is",buttonItem.length);
  return (
    <ScrollView className='bg-slate-200 h-full'>
      <View className=" flex justify-center mx-3 shadow-xl">
    <InputField icon={cart} placeholderTextColor="black" placeholder='Search in Menu'/>
      </View>
<View className='flex flex-col px-3'>
  <View 
  style={{
    display: "flex",
    flexDirection: "row",
 
    alignItems: "center",
    gap:10,
    marginTop: 16,
  }}
  >
  <View style={{width:32, height:32, 
     borderColor:'transparent',
      backgroundColor: '#F56606',
      borderRadius: '50%',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center'
      }}>
        <Ionicons name='star' color="white" size={22}/>
     </View>
     <Text className='text-3xl font-JakartaBold font-bold'>Select Categories</Text>
  </View>
  <View className="mt-10">
  <ScrollView  horizontal bounces={true}>
    {
      buttonItem.map((item, i) => (
        <View  key={i} >
        <PressButton icon={item.icon} title={item.title}  className='w-[75%]'  textVariant="primary"/>
        </View>

      ))} 
    </ScrollView>
  </View>
</View>
    </ScrollView>
  )
}

export default menu

const styles = StyleSheet.create({})