import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailsScreen = () => {
    const {id} = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Text>details {id}</Text>
    </SafeAreaView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})