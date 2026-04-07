import { Colors } from '@/constants/theme';
import { Tabs } from 'expo-router';
import { House, Plane } from 'lucide-react-native';
import React from 'react';
export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tabIconSelected,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <House size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <Plane size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
