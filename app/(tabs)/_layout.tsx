import { Tabs } from "expo-router";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffafcc",
        tabBarAccessibilityLabel: "pink",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "CatList",
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
