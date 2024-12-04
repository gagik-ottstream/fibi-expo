import {
  DarkTheme, ThemeProvider
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import FocusNavigationProvider from '$providers/NavigationFocus';
// import SpaceMono from '../assets/fonts/SpaceMono-Regular.ttf';
// import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({});

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
      if (error) {
        console.warn(`Error in loading fonts: ${error}`);
      }
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <FocusNavigationProvider>
      <ThemeProvider value={DarkTheme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="+not-found"
            options={{
              title: 'Oops!'
            }}
          />
        </Stack>
      </ThemeProvider>
    </FocusNavigationProvider>
  );
};

export default RootLayout;
