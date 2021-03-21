import { Entypo, Feather, AntDesign, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import MarketScreen from '../screens/MarketScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RankingsScreen from '../screens/RankingsScreen';
import { BottomTabParamList } from '../../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: { height: 55 },
        activeTintColor: '#2f95dc',
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={30} color={'black'} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="pie-chart" size={30} color={'black'} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="linechart" size={30} color={'black'} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Ranking"
        component={RankingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="graph" size={30} color={'black'} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={30} color={'black'} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
