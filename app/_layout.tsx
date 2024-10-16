import { Color } from "@/constants/Color";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Fredoka: require("../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf"),
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
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: Color.white },
          headerTintColor: Color.grey,
        }}
      />
      <Stack.Screen
        name="+not-found"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: Color.white },
          headerTintColor: Color.grey,
        }}
      />
    </Stack>
  );
}
