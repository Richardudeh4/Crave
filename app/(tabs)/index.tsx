import DiscountBanner from '@/components/DiscountBanner';
import FoodMenu from '@/components/FoodMenu';
import MusicGrid from '@/components/MusicGrid';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, Platform, View, TextInput, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    return (
      <SafeAreaView style={styles.homeContainer}>
        <ScrollView>
        <View style={{ display:'flex', 
        flexDirection:'row', 
        justifyContent: 'space-between', 
         marginHorizontal:3,
         marginTop: 4,
           }}>
        <View style={styles.headerContainer}>
          <Ionicons name="location" size={28} color="gray"/>
          <View style={styles.locationContainer}>
            <Text style={{fontSize: 12,}}>
              AP Block
            </Text>
            <Text>
              Kolkata
            </Text>
  
          </View>
        </View>
        <View style={styles.textContainer}>
       <Image source={require("@/assets/images/profile.png")} alt="" style={styles.firstContainer}/>
        </View>
        </View>
  <View style={{marginTop:24, marginHorizontal:6, borderWidth: 1,
     borderColor: 'grey', display:'flex',
      flexDirection: 'row',
      justifyContent:'space-between',
      paddingHorizontal:3,
      paddingVertical:5,
      borderRadius: 4,
      alignItems: 'center',
      }}>
      <Ionicons name="search" color="black" size={28}/>
  <TextInput onChangeText={() => {}}
   placeholderTextColor="#888"
   placeholder='Type a dish or cuisine' style={{display: 'flex', flex:1}}/>
  </View>
  
  <DiscountBanner/>
  <View style={{marginTop:20}}>
    <View style={{display: 'flex' , flexDirection:'column' ,gap: 12, marginHorizontal: 12}}>
      <View style={{display: 'flex', 
        flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems:'center',
        
         }}>
     <View style={{width:32, height:32, 
     borderColor:'transparent',
      backgroundColor: '#F56606',
      borderRadius: '50%',
      display:'flex',
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center'
      }}>
        <Ionicons name='star' color="white" size={22}/>
     </View>
      <Text style={{fontSize:22,fontWeight: '500'}}>Popular Categories</Text>
      <Text style={{textDecorationLine: "underline",textDecorationColor:"grey",fontSize:18}}>See All</Text>
      </View>
    </View>
  <FoodMenu/>

  <View style={{display: 'flex', 
    marginTop:36,
    marginHorizontal:12,
        flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems:'center',
        
         }}>
     <View style={{width:32, height:32, 
     borderColor:'transparent',
      backgroundColor: '#F56606',
      borderRadius: '50%',
      display:'flex',
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center'
      }}>
        <Ionicons name='star' color="white" size={22}/>
     </View>
      <Text style={{fontSize:22,fontWeight: '500'}}>Today's Special</Text>
      <Text style={{textDecorationLine: "underline",textDecorationColor:"grey",fontSize:18}}>See All</Text>
      </View>
      <Card className='mt-10'>
      <Card.Cover source={{uri: 'https://uploads-ssl.webflow.com/6248082014e58d2a19c26cac/624809b049d8067f38befce8_dimg1-p-500.png'}}/>
        <Card.Title 
        title="Hyderabadi Biryani"
        subtitleNumberOfLines={2}
        subtitle="$299"
        subtitleStyle={{fontWeight:"700"}}
        className='mt-3 font-bold'/>
    
      </Card>
  </View>
  </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
homeContainer: {
  height: '100%',
  flexGrow:1,
  display:'flex',
  backgroundColor: '#E5E5E5',

},
locationContainer: {
  display:'flex', 
  height: 'auto',
  flexDirection: 'column',
  gap:6,
   alignItems:'center',
},
headerContainer: {
  display:'flex',
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
textContainer: {
  color:'white',
  display:"flex",
  marginTop:12,

},
firstContainer: {
  height:55,
  display: 'flex',
  alignItems:"flex-end",
  width: 55,
  borderRadius: 50,
  borderWidth: 1,
  borderColor: 'grey',
},
secondContainer: {
  paddingHorizontal:20,
  paddingVertical: 8,
  // borderRadius: 20,
  borderWidth: 1,
  borderColor: 'grey',
  display:"flex",
  justifyContent: 'center',
},
secondContainerOne: {
  paddingHorizontal:20,
  paddingVertical: 8,
  // borderRadius: 20,
  borderWidth: 1,
  borderColor: 'grey',
  display:"flex",
  justifyContent: 'center',
  backgroundColor: 'green',
},
inputText: {
  color:"white",
  alignSelf: 'center',
  fontSize: 20,
},
searchInputContainer:{

}
});
