
import React, { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '@/components/nativewindui/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '@/components/InputField';
import cart from '@/assets/images/cart.png';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import PressButton from '@/components/PressButton';
import { foodCategory } from '@/constants';
import { Link } from 'expo-router';


const buttonItems = [
  {
    title: 'Fast food',
    icon: 'hamburger',
  },
  {
    title: 'Snacks',
    icon: 'fish',
  },
  {
    title: 'Dessert',
    icon: 'hamburger',
  },
];

const menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Fast food');
  const [filteredData, setFilteredData] = useState([]);

  // Filter the foodCategory array based on the selected category
  const filterByMealType = (category: string) => {
    const result = foodCategory.filter((item) => item.mealType === category);
    setFilteredData(result);
  };

  // Initialize the filtered data
  React.useEffect(() => {
    filterByMealType(selectedCategory);
  }, [selectedCategory]);

  const renderFoodItem = ({item}) => (
    <TouchableOpacity className="mx-2 gap-3 border-b flex flex-col pt-6 border-gray-100">
      <Link href={{
        pathname: "../(foodItem)/details/[id].tsx",
        params:{id:item.foodName}
      }}>
    
      <View className="flex-row items-center flex-1 space-x-[2px]">
        <View className="flex-1 relative h-48 w-28 border justify-center items-center border-black rounded-lg">
          <Image source={item.image} resizeMode="cover" />
          <View className="absolute top-2 right-3">
            <TouchableOpacity className="flex items-center p-3 justify-center bg-white border border-transparent rounded-full">
              <FontAwesome5 name="heart" size={28} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="pr-3 flex flex-col gap-3">
          <Text className="text-2xl font-JakartaBold truncate">{item.foodName}</Text>
          <View className="flex flex-row justify-between space-x-6">
            <View className="flex flex-row space-x-2">
              <Text className="text-2xl font-extrabold truncate">{item.newPrice}</Text>
              <Text className="text-2xl text-slate-400 line-through font-extrabold truncate">
                {item.initialPrice}
              </Text>
            </View>
            <View className="p-2 border flex items-center justify-center border-transparent rounded-2xl bg-green-300">
              <Text className="text-green-800 font-bold">{item.discountPercentage} OFF</Text>
            </View>
          </View>
          <View className="flex flex-row space-x-2 justify-between items-center">
            <View className="flex flex-row space-x-1 items-center my-2">
              <Ionicons name="star" size={28} color="orange" />
              <Text>5.0</Text>
            </View>
            <Text className="text-xl font-semibold">{item.mealType}</Text>
            <View className="p-2 rounded-2xl flex flex-row justify-center items-center bg-blue-300 ">
              <Text className="font-bold text-blue-600">{item.salesType}</Text>
            </View>
          </View>
          <PressButton
            title="Add to cart"
            icon="shopping-bag"
            bgVariant="secondary"
            className="rounded-2xl font-thin"
            iconBgColor="white"
          />
        </View>
      </View>
        </Link>
    </TouchableOpacity>
  );

  return (
    <ScrollView className="bg-slate-200 h-full">
      <View className="flex justify-center mx-3 shadow-xl">
        <InputField icon={cart} placeholderTextColor="black" placeholder="Search in Menu" />
      </View>
      <View className="flex flex-col px-3">
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 16,
          }}
        >
          <View
            style={{
              width: 32,
              height: 32,
              borderColor: 'transparent',
              backgroundColor: '#F56606',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Ionicons name="star" color="white" size={22} />
          </View>
          <Text className="text-3xl font-JakartaBold font-bold">Select Categories</Text>
        </View>
        <View className="mt-10">
          <ScrollView
            horizontal
            bounces={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 8 }}
          >
            {buttonItems.map((item, i) => (
              <View key={i}>
                <PressButton
                  onPress={() => setSelectedCategory(item.title)}
                  icon={item.icon}
                  iconBgColor={`${selectedCategory === item.title ? "white" : "orange"}`}
                  selected={selectedCategory}
                  title={item.title}
                  bgVariant={`${selectedCategory === item.title && "primary"}`}
                  textVariant={`${selectedCategory === item.title ? "secondary": "primary"}`}

                />
              </View>
            ))}
          </ScrollView>
        </View>
        <View className="mt-10">
          <FlatList
            data={filteredData}
            keyExtractor={(item, index) => `${item.foodName}-${index}`}
            renderItem={renderFoodItem}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default menu;

const styles = StyleSheet.create({});

// import { FlatList, Image, ScrollView, StyleSheet,TextInput, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { Text } from '@/components/nativewindui/Text'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import InputField from '@/components/InputField'
// import cart from "@/assets/images/cart.png";
// import { FontAwesome5, Ionicons } from '@expo/vector-icons';
// import PressButton from '@/components/PressButton';
// import { foodCategory } from '@/constants';

// const buttonItem =  [ 
//   {
//   title: "Fast food",
//   icon: "hamburger",
//   },
//   {
//   title: "Snacks",
//   icon: "fish",
//   },
//   {
//   title: "Dessert",
//   icon: "hamburger",
//   },
// ]

// const handleClick = (() => (
// ))
// const menu = () => {

//   return (
//     <ScrollView className='bg-slate-200 h-full'>
//       <View className=" flex justify-center mx-3 shadow-xl">
//     <InputField icon={cart} placeholderTextColor="black" placeholder='Search in Menu'/>
//       </View>
// <View className='flex flex-col px-3'>
//   <View 
//   style={{
//     display: "flex",
//     flexDirection: "row",
 
//     alignItems: "center",
//     gap:10,
//     marginTop: 16,
//   }}
//   >
//   <View style={{width:32, height:32, 
//      borderColor:'transparent',
//       backgroundColor: '#F56606',
//       borderRadius: '50%',
//       display:'flex',
//       justifyContent: 'center',
//       alignItems: 'center'
//       }}>
//         <Ionicons name='star' color="white" size={22}/>
//      </View>
//      <Text className='text-3xl font-JakartaBold font-bold'>Select Categories</Text>
//   </View>
//   <View className="mt-10">
//   <ScrollView  horizontal bounces={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 8}}>
//     {
//       buttonItem.map((item, i) => (
//         <View key={i}>
//         <PressButton  onPress={handleClick} icon={item.icon} iconBgColor='orange' title={item.title} textVariant="primary"/>
//         </View>
//       )
//       )} 
//     </ScrollView>
//   </View>
//   <View className='mt-10' > 
// <ScrollView bounces={true} showsHorizontalScrollIndicator={false} className=''>
// {
//   foodCategory.map((item, i) => (
//         <ScrollView bounces={true}  showsHorizontalScrollIndicator={false} key={i}  className='mx-2 gap-3 border-b flex flex-col pt-6 border-gray-100'>
//             <View className='flex-row items-center flex-1 space-x-[2px]'>
//               <View className='flex-1 relative h-48 w-28 border justify-center items-center border-black rounded-lg'>
//                 <Image source={item.image} resizeMode="cover"/>
//                 <View className='absolute top-2 right-3'>
//                   <TouchableOpacity className='flex items-center p-3 justify-center bg-white border border-transparent rounded-full'>
//                     <FontAwesome5 name="heart" size={28}/>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//                 <View className='pr-3 flex flex-col gap-3'>
//                   <Text className='text-2xl  font-JakartaBold truncate'>
//                     {item.foodName}
//                   </Text>
//                   <View className='flex flex-row justify-between  space-x-6'>
//                   <View className='flex flex-row space-x-2'>
//                   <Text className='text-2xl font-extrabold truncate'>
//                     {item.newPrice}
//                   </Text>
//                   <Text className='text-2xl text-slate-400 line-through font-extrabold truncate'>
//                     {item.initialPrice}
//                   </Text>
//                   </View>
//                   <View className='p-2 border flex items-center justify-center border-transparent rounded-2xl bg-green-300'>
//                     <Text className='text-green-800 font-bold'>{item.discountPercentage} OFF</Text>
//                   </View>
//                   </View>
//                   <View className='flex flex-row space-x-2 justify-between items-center'>
//                     <View className='flex flex-row space-x-1 items-center my-2'>
//                       <Ionicons name="star" size={28} color="orange"/>
//                       <Text>5.0</Text>
//                     </View>
//                     <Text className='text-xl font-semibold'>
//                       {item.mealType}
//                     </Text>
//                     <View className='p-2 rounded-2xl flex flex-row justify-center items-center bg-blue-300 '>
//                         <Text className='font-bold text-blue-600'>
//                           {item.salesType}
//                         </Text>
//                     </View>
//                   </View>
//                 <PressButton 
//                 title='Add to cart'
//                 icon="shopping-bag"
//                 bgVariant="secondary"
//                 className='rounded-2xl font-thin'
//                 iconBgColor='white'
//                   />
//                 </View>
//               <View>
//               </View>
//             </View>
//         </ScrollView>
//   ))
// }
// </ScrollView>
//   </View>
// </View>
//     </ScrollView>
//   )
// }

// export default menu

// const styles = StyleSheet.create({})