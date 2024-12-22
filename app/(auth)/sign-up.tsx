import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { useSignUp } from '@clerk/clerk-expo'
import {ReactNativeModal} from "react-native-modal";
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import { Oauth } from '@/components/Oauth'
import { fetchAPI } from '@/lib/fetch'

const SignUp = () => {
  const {isLoaded, signUp,  setActive} = useSignUp(); 
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [form , setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [verification , setVerification] = useState({
    state: 'default',
    error: '',
    code: '',
  })
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return
    }

    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      setVerification({
        ...verification,
        state: "pending",
      });

    } catch (err: any) {
      Alert.alert("Error", err.errors[0].longMessage);
    }
  }

  const onPressVerify = async () => {
    if (!isLoaded) {
      return
    }
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      })

      if (completeSignUp.status === 'complete') {
        await fetchAPI('/(api)/user', {
          method: "POST",
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            clerkId: completeSignUp.createdUserId,
          })
        })
        await setActive({ session: completeSignUp.createdSessionId })
        setVerification({...verification, state: "success"});
      } else {
        setVerification({...verification, error: "Verification Failed", state: "failed"});
      
      }
    } catch (err: any) {
      setVerification({...verification, error: err.errors[0].longMessage, state: "failed"});
    }
  }
 
  return (
    <ScrollView className='flex-1 bg-white'>
      <View className='flex-1 bg-white'>
    <View className='relative w-full h-[250px]'>
      {/* <Image source={images.signUpCar} className='z-0 w-full h-[250px]'/> */}
      <Text className='text-3xl text-black font-JakartaSemiBold absolute bottom-5  left-5 '>Create Your Account</Text>
    </View>
    <View className='p-5'>
      <InputField 
      label="Name" 
      placeholder="Enter your name" 
      icon={() => (<Ionicons name="person" size={28}/>)}
       value={form.name}
        onChangeText={(value) => setForm({
            ...form, 
            name:value
        })}/>
      <InputField 
      label="Email" 
      placeholder="youremailaddress@gmail.com" placeholderTextColor="grey"
      icon={() => (<Ionicons name="mail" size={28} color="grey"/>)}
       value={form.email}
        onChangeText={(value) => setForm({
            ...form, 
            email:value
        })}/>
      <InputField 
      label="Password" 
      placeholder="Enter your password" 
      icon={() => (<EvilIcons name="lock" size={28} color="grey"/>)}
      value={form.password}
      onChangeText={(value) => setForm({
            ...form,  
            password:value
        })}
        secureTextEntry={true}
        />
        <CustomButton title='Sign up ' onPress={onSignUpPress} className='mt-6 bg-orange-500'/>
          <Oauth/>
        <Link href="/sign-in" className='text-lg mt-10 text-general-200 text-center'>
        <Text>
          Already have an Account?
        </Text>
        <Text className='text-orange-400'> Log in</Text>
        </Link>
    </View>
    {/* Verification modal */}
    <ReactNativeModal 
    isVisible={verification.state === "pending"}
    onModalHide={() => {
     if(verification.state === "success") setShowSuccessModal(true);
    }
  
    }
    >
      <View className='bg-white px-7 py-9 rounded-2xl min-h-[300px]'>
        <Text className='text-2xl font-JakartaExtraBold mb-2'>
      Verification 
        </Text>
        <Text className='font-Jakarta mb-5'>
          We have sent a verification code to {form.email}
        </Text>
        <InputField 
        label='Code'
        icon={() => (<EvilIcons name="lock" size={28}/>)}
        placeholder='12345'
        value={verification.code}
        keyboardType='numeric'
        onChangeText={(code) => setVerification({
          ...verification, 
          code
        })}
       
        />
        {
          verification.error && (
            <Text className='text-red-500 text-sm mt-1'>
              {verification.error}
            </Text>
          )
        }
        <CustomButton title='Verify Email' onPress={onPressVerify} className='mt-5 bg-success-400'/>
      </View>
    </ReactNativeModal>
    <ReactNativeModal isVisible={showSuccessModal}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Image source={images.check} className='w-[110px] h-[110px] mx-auto my-5'/>
            <Text className='text-3xl font-JakartaBold text-center'>
            Verified
            </Text>
            <Text className='text-base text-gray-500 text-center mt-2 font-Jakarta'>
              You have successfully verified your account
            </Text>
            <CustomButton 
            title='Browse Home' 
            onPress={() =>{
              setShowSuccessModal(false);
              router.push("/(tabs)")
            }}
            className='mt-2'
            />
          </View>
    </ReactNativeModal>
      </View>
    </ScrollView> 
  )
}

export default SignUp
// import { StyleSheet, Text, TextInput, View } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

// const SignUp = () => {
//   return (
//     <SafeAreaView>
//       <View className='flex flex-col gap-10'>
//         <View className='mx-4'>
//       <Text className='text-4xl font-JakartaExtraBold text-center font-semibold'>Craxe</Text>
//       <View className=''>
//         <Text>Email</Text>
//         <TextInput 
//         placeholder='youremail@address.com' 
//         placeholderTextColor="grey"
//         className='w-full mx-1  border border-grey px-6 rounded-xl h-11'
//          />
//       </View>
//       </View>
//       </View>
 
//     </SafeAreaView>
//   )
// }

// export default SignUp

// const styles = StyleSheet.create({})