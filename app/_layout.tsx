import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { tokenCache } from "@/lib/auth";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { useColorScheme } from '@/hooks/useColorScheme';
import { PaperProvider } from 'react-native-paper';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

  if (!publishableKey) {
    throw new Error('Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
  }


  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
      <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{headerShown: false}} >
        <Stack.Screen name="index" options={{ headerShown: false}} />
        {/* <Stack.Screen name="(tabs)/booking" options={{ headerShown:true }} />
        <Stack.Screen name="(tabs)/cart" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)/favorite" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)/menu" options={{ headerShown: false }} /> */}
      </Stack>
      <StatusBar style="auto"/>
    </ThemeProvider>
      </ClerkLoaded>
    </ClerkProvider>
   
  
 
  
  );
}
