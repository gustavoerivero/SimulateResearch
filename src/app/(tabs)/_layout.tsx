import React from "react";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack, Tabs } from "expo-router";

import Colors from "@/src/constants/Colors";

import { TTab } from "@/src/types/Tab.Type";

const TabLayout = () => {

  const routes: TTab[] = [
    {
      name: "index",
      options: {
        href: "/",
        title: "Home",
        tabBarShowLabel: false,
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }: { color: string, size: number }) => (
          <Ionicons
            name={color === Colors.white ? "home" : "home-outline"}
            color={color}
            size={size}
          />
        )
      }
    },
    {
      name: "CalculatorScreen",
      options: {
        href: "/CalculatorScreen",
        title: "Calculator",
        tabBarShowLabel: false,
        tabBarLabel: "Calculator",
        tabBarIcon: ({ color, size }: { color: string, size: number }) => (
          <Ionicons
            name={color === Colors.white ? "calculator" : "calculator-outline"}
            color={color}
            size={size}
          />
        )
      }
    }
  ];

  return (
    <>
      <Stack.Screen options={{ headerShown: false, animation: "fade" }} />
      <StatusBar backgroundColor={Colors.bgSecondary} />
      <Tabs
        initialRouteName={routes[0].name}
        screenOptions={{
          tabBarActiveTintColor: Colors.white,
          tabBarInactiveTintColor: Colors.gray,
          tabBarInactiveBackgroundColor: Colors.white,
          tabBarActiveBackgroundColor: Colors.secondary,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: "6%",
          }        
        }}
      >
        {routes
          .map(({ name, options }, index) => (
            <Tabs.Screen 
              key={index}
              name={name}
              options={options}
            />
        ))}
      </Tabs>
    </>
  );
};

export default TabLayout;
