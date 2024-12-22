import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect } from 'expo-router';

const Page = () => {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    useEffect(() => {
      setIsSignedIn(true);
    }, [])
    if(!isSignedIn){
        return(
            <Redirect href="/(auth)/welcome"/>
            )
             }
  return (
   <Redirect href="/(tabs)"/>
  )
}

export default Page  

const styles = StyleSheet.create({})