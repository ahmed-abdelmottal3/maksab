import { Colors } from '@/constants/theme';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const unstable_settings = {
  anchor: '(tabs)',
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.light.background,
  },
};
export default function RootLayout() {
  return (
    <>
      <SafeAreaProvider>
        <ThemeProvider value={MyTheme}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                paddingHorizontal: 20,
              }
            }}
          >
            <Stack.Screen name="(tabs)" />
          </Stack>
        </ThemeProvider>
      </SafeAreaProvider>
      <StatusBar style="dark" />
    </>
  );
}