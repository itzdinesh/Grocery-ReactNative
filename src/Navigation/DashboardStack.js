import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomSheets from '../Component/BottomSheets';
import Dashboard from '../screens/Dashboard';
import SubCategories from '../screens/SubCategories';
import ProductListing from '../screens/ProductListing';
const Stack = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator initialRouteName='Dashboard'  screenOptions={{ headerShown: false } }>
      <Stack.Screen name='Dashboard' component={Dashboard} />
      <Stack.Screen name='SubCategories' component={SubCategories} />
      <Stack.Screen name='ProductListing' component={ProductListing} />
      <Stack.Screen  name='BottomSheet' component={BottomSheets} />
    </Stack.Navigator>
  )
}

export default DashboardStack;
