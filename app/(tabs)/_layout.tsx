import { Colors } from '@/constants/theme';
import { Tabs } from 'expo-router';
import { House, Map, ShoppingCart, User } from 'lucide-react-native';
import React from 'react';
import { View } from 'react-native';

interface TabIconWrapperProps {
  Icon: React.ComponentType<{ size: number; color: string }>;
  focused: boolean;
  color: string;
}
const TabIconWrapper = ({ Icon, focused, color }: TabIconWrapperProps) => {
  return (
    <View
      style={{
        backgroundColor: focused ? `${Colors.light.tabIconSelected}20` : 'transparent',
        padding: 10,
        marginBottom: 10,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon size={28} color={color} />
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tabIconSelected,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: Colors.light.background,
          height: 70,
          paddingTop: 15,
          marginBottom: 25,
          borderRadius: 200,
          borderWidth: 1,
          borderColor: Colors.light.tabIconSelected,
        }
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: (props) => <TabIconWrapper Icon={House} {...props} />,
        }}
      />

      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: (props) => <TabIconWrapper Icon={Map} {...props} />,
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: (props) => <TabIconWrapper Icon={ShoppingCart} {...props} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: (props) => <TabIconWrapper Icon={User} {...props} />,
        }}
      />

    </Tabs>
  );
}