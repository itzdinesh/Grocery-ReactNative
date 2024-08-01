import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { Categories, MyCart, Profile, Wishlist } from '../Component/index'
import DashboardStack from './DashboardStack';
import Icon from 'react-native-vector-icons/Octicons';
import IconCart from 'react-native-vector-icons/AntDesign';
import CategorieIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

const Tabs = () => {

    return (
      
        <Tab.Navigator initialRouteName='Dashboard'
        screenOptions={{
            headerShown: false,
          }}
        >
        <Tab.Screen name='Dashboard' component={DashboardStack} options={{ tabBarIcon: ({ color, size }) => <Icon name="home" size={size} color={color} /> }} />
        <Tab.Screen name='Categories' component={Categories} options={{ tabBarIcon: ({ color, size }) => <CategorieIcons name="category" size={size} color={color} /> }} />
        <Tab.Screen name='MyCart' component={MyCart} options={{ tabBarIcon: ({ color, size }) => <IconCart name="shoppingcart" size={size} color={color} /> }} />
        <Tab.Screen name='Wishlist' component={Wishlist} options={{ tabBarIcon: ({ color, size }) => <Icon name="feed-heart" size={size} color={color} /> }} />
        <Tab.Screen name='Profile' component={Profile} options={{ tabBarIcon: ({ color, size }) => <IconCart name="profile" size={size} color={color} /> }} />
      
      </Tab.Navigator>
  
    )

}
export default Tabs