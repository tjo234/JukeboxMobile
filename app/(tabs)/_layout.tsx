import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      headerShown: false,
    }}>
    <Tabs.Screen
    name="index"
    options={{
      title: 'Home',
      tabBarIcon: ({ color, focused }) => (
        <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
        ),
    }}
    />

    <Tabs.Screen
    name="albums"
    options={{
      title: 'Albums',
      tabBarIcon: ({ color, focused }) => (
        <TabBarIcon name={focused ? 'apps' : 'apps-outline'} color={color} />
        ),
    }}
    />

    <Tabs.Screen
    name="browse"
    options={{
      title: 'Browse',
      tabBarIcon: ({ color, focused }) => (
        <TabBarIcon name={focused ? 'albums' : 'albums-outline'} color={color} />
        ),
    }}
    />
    <Tabs.Screen
    name="search"
    options={{
      title: 'Search',
      tabBarIcon: ({ color, focused }) => (
        <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
        ),
    }}
    />

    <Tabs.Screen
    name="settings"
    options={{
      title: 'Settings',
      tabBarIcon: ({ color, focused }) => (
        <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
        ),
    }}
    />
    </Tabs>
    );
}
