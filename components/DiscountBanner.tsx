import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import {LinearGradient} from "expo-linear-gradient"
const DiscountBanner = () => {
  return (
    <View style={{marginTop: 38, marginHorizontal:16,}}>
<LinearGradient
 colors={['#F60C8B', '#F56606']}
 start={{ x: 0, y: 0 }}
 end={{ x: 1, y: 0 }}
style= {styles.gradientContainer}>
    <Text style={{fontSize: 28, fontWeight: '500', fontFamily:'poppins',color: 'white'}}>Up to 40% OFF</Text>
    <Text style={{textTransform:'uppercase',fontSize:20,fontWeight: '300', color: 'white'}}>on your first order</Text>
    <Button onPress={() => {}} style={{backgroundColor: 'white',
    borderWidth:1, 
        borderColor: 'grey',
        // fontcolor:'#F60C8B',
         borderRadius: 12,
         width:'40%',
         paddingHorizontal:12,
         paddingVertical:8,
         }}>
            <Text style={{fontSize:18, color:'#F60C8B', fontWeight:'500'}}>Order Now</Text>
        </Button>
</LinearGradient>
    </View>
  )
}

export default DiscountBanner

const styles = StyleSheet.create({
  gradientContainer: {
    borderWidth:1,
    borderColor:'transparent',
    paddingHorizontal: 8,
    paddingVertical: 12,
    display:'flex', 
    flexDirection:'column',
    gap:8,
    justifyContent: 'flex-start',
    borderRadius:15,
  }
})
// F60C8B
// F56606