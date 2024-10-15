import { Tabs } from "expo-router";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Color } from "@/constants/Color";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Color.secundary,
        tabBarAccessibilityLabel: "pink",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "CatList",
          headerStyle: { backgroundColor: Color.white },
          headerTintColor: Color.grey,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cat" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: "Info",
          headerStyle: { backgroundColor: Color.white },
          headerTintColor: Color.grey,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="information"
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
