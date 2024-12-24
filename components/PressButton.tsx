import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

interface PressButtonProps{
title: string;
icon?:any;
  labelStyle?: string;
  containerStyle?: string;
  iconStyle?:string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  className?: string;
  onPress: () => void;
}
const getBgVariantStyle = (variant:PressButtonProps['bgVariant']) => {
    switch(variant){
        case "secondary": 
            return "bg-gray-500";
        case "danger": 
            return "bg-red-500";
        case "success": 
            return "bg-green-500";
        case "outline": 
            return "bg-transparent border-neutral-300 border-[0.5px]";
        default: 
        return "bg-white border border-slate-300";
    }
}
const getTextVariantStyle = (variant:PressButtonProps['textVariant']) => {
    switch(variant){
        case "primary": 
            return "text-black";
        case "secondary": 
            return "text-gray-100";
        case "danger": 
            return "text-red-100";
        case "success": 
            return "text-green-100";
        default: 
        return "text-white ";
    }
}


const PressButton = ({title, icon, labelStyle,onPress, containerStyle, bgVariant= "primary", textVariant ="default",iconStyle, className, ...props}:PressButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}  className={`w-full rounded-full mb-2 p-4 flex flex-row justify-center items-center 
        shadow-neutral-400/70  ${getBgVariantStyle(bgVariant)} ${className}`} {...props}>
        { 
        icon && (
            <FontAwesome5 name={icon} size={27} color={`green`} className={`w-6 h-6 ml-4 ${iconStyle}`}/> 
        )
        }
        <Text className={`text-2xl font-bold pl-2 ${getTextVariantStyle(textVariant)}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default PressButton

const styles = StyleSheet.create({})