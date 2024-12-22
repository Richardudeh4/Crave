import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

const MusicGrid = () => {
  return (
    <View style={styles.gridContainer}>
    {/* <View style={styles.grid}>
  
    </View> */}
    </View>
  )
}

export default MusicGrid

const styles = StyleSheet.create({
    gridContainer: {
      display:'flex',
      marginTop:8,
      flexDirection: 'row'
    },
  
})