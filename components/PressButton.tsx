import { StyleSheet,  View , Image, TouchableOpacity} from 'react-native';
import {Text} from "@/components/nativewindui/Text";
import React from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

interface PressButtonProps{
title: string;
iconBgColor: string;
icon?:any;
selected?:any;
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
            return "bg-orange-500";
        case "danger": 
            return "bg-red-500";
        case "success": 
            return "bg-green-500";
        case "primary":
            return "bg-purple-300"
        case "outline": 
            return "bg-transparent border-neutral-300 border-[0.5px]";
        default: 
        return "bg-white border border-slate-300";
    }
}
const getTextVariantStyle = (variant:PressButtonProps['textVariant']) => {
    switch(variant){
        case "primary": 
            return "text-violet-700 font-thin";
        case "secondary": 
            return "text-white font-thin";
        case "danger": 
            return "text-red-100";
        case "success": 
            return "text-green-100";
        default: 
        return "text-white font-semibold";
    }
}


const PressButton = ({title, icon, iconBgColor,selected, labelStyle,onPress, containerStyle, bgVariant= "primary", textVariant ="default",iconStyle, className, ...props}:PressButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}  className={`rounded-full mb-2 p-3  ml-3 flex flex-row justify-center items-center 
        shadow-neutral-400/70  ${getBgVariantStyle(bgVariant)} ${className}`} {...props}>
        { 
        icon && (
            <FontAwesome5 name={icon} size={27} color={`${iconBgColor}`} className={`w-6 h-6 ml-4 ${iconStyle}`}/> 
        )
        }
        <Text className={`text-2xl font-semibold pl-2 ${getTextVariantStyle(textVariant)}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default PressButton

const styles = StyleSheet.create({})