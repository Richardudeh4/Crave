import * as React from 'react';
import { Dimensions, Image, Pressable, ScrollView, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import popularMeals from "@/assets/popularMeals.json";
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
function  CarouselImages() {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1, marginTop:36 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={popularMeals}
                scrollAnimationDuration={1000}
                onSnapToItem={(item) => console.log('current index:', item)}
                renderItem={({ item }) => (
                    <ScrollView className="flex-1 bg-white p-4">
      {/* Title Section */}
      {/* <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl font-bold text-black">Delicious Dessert</Text>
        <Pressable>
          <Text className="text-blue-500 font-semibold">See All</Text>
        </Pressable>
      </View> */}

      {/* Card */}
      <View className="bg-purple-200 rounded-lg shadow-lg p-4">
        {/* Image */}
        <View className="relative mb-4">
          <Image
            source={{
              uri:item.image, // Replace with actual image URL
            }}
            className="w-full h-36 rounded-lg"
            resizeMode="cover"
          />
          <Pressable className="absolute top-2 right-2 flex justify-center items-center bg-white h-12 w-12 rounded-full shadow">
          <FontAwesome5 name="heart" size={28} color="black"/>
          </Pressable>
        </View>

        {/* Title */}
        <Text className="text-lg font-semibold text-gray-900 mb-1">
          Hyderabadi Biryani
        </Text>

        {/* Pricing Section */}
        <View className="flex-row items-center mb-2">
          <Text className="text-lg font-bold text-green-600 mr-2">₹299</Text>
          <Text className="text-gray-500 line-through text-sm">₹399</Text>
          <Text className="ml-2 text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
            20% OFF
          </Text>
        </View>

        {/* Description */}
        <Text className="text-sm text-gray-600 mb-2">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </Text>

        {/* Rating and Tags */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Text className="text-yellow-500 text-sm mr-1">★</Text>
            <Text className="text-gray-700 text-sm">(5.0)</Text>
          </View>
          <View className="flex-row space-x-2">
            <Text className="text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded-full">
              Main Course
            </Text>
            <Text className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
              Chef Pick
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
                    // <View
                    //     style={{
                    //         flex: 1,
                    //         borderWidth: 1,
                    // }}
                    //     className='bg-white border border-1 rounded-xl shadow p-4 m-2'
                    // >
                    //     {/* <View className='w-full justify-center items-center border border-1 border-transparent bg-purple-200'>
                    //         <View className='my-10'>
                    //             <View className='flex-1 justify-center'>
                    //             <Image source={{uri:item.image}}/>
                    //             </View>
                 
                    //         <View className='w-10 h-10 border border-1 border-transparent bg-white flex justify-center items-center rounded-full'>
                    //         <FontAwesome5 name="heart" size={28} color="black"/>
                    //         </View>
                      
                    //         </View>
                    //     </View> */}
                    //     <Image source={{uri: item.image}} className='h-32 w-full rounded-md'/>
                    //     {/* <Text>{item.name}</Text>
                    //     <Image source={{uri:item.image}} style={{width:100, height:100,borderWidth:1, borderRadius: 12}}/> */}
                    // </View>
                )}
            />
        </View>
    );
}

export default CarouselImages;
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const CarouselImages = () => {
//   return (
//     <View>
//       <Text>CarouselImages</Text>
//     </View>
//   )
// }

// export default CarouselImages

// const styles = StyleSheet.create({})