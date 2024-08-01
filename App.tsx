
import React from 'react';

import {

  SafeAreaView,
  View,
} from 'react-native';
import Dashboard from './src/screens/Dashboard';
import Tabs from './src/Navigation/Tabs';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
   
    <NavigationContainer>
      
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }} >
    
        <Tabs/>
      </View>
    </SafeAreaView>
    </NavigationContainer>
    

  );
}


export default App
