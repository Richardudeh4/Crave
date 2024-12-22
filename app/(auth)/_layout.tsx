
import { Stack } from 'expo-router';
import 'react-native-reanimated';
export default function AuthLayout() {
  return (
   
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="welcome" options={{ headerShown: false}} />
        {/* <Stack.Screen name="sign-up" options={{ headerShown: false}} />
        <Stack.Screen name="sign-in" options={{ headerShown: false}} /> */}
      </Stack>

  );
}