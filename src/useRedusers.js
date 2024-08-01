import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable, StatusBa, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useReducer } from 'react';
const UseRedusers = () => {
      const [point , setPoint] = useState(0)
  const handleOnPress1 =() => {
  dispatch({type : 'incriment'})
  }
  const handleOnPress2 = () => {
    dispatch({type : 'decriment'})
  }
  const initialState = 0
  const reducer = (state , action) => {
  
   if (action.type ===  'incriment') {
    return state + 1
   }
   if (action.type ===  'decriment') {
    return state  - 1
   }
   
  }
  const [state, dispatch]  = useReducer(reducer , initialState)

    return (
        <View style={style.container}>
            <TouchableOpacity style = {style.subContainer}
            
          onPress={handleOnPress1}
            >
                <Text  style = {{fontSize : 30}}>
                    Incriment
                </Text>

            </TouchableOpacity>
            <TouchableOpacity style = {style.subContainer}
            onPress={handleOnPress2}
            >
                <Text style = {{fontSize : 30}}>
                    Decriment
                </Text>

            </TouchableOpacity>

            <Text style = {style.subContainer}>
                {state}
            </Text>
        </View>
    )

}
export default UseRedusers

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },
    subContainer: {
alignSelf : 'center',
fontSize : 30
    }

})