import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';

const ItemsHeader = ({title , settingImage , searchImage , backBtnPress , settingBtnTapped }) => {
    return (
      

            <View style={{  flexDirection: 'row', justifyContent : 'space-between'  , marginVertical : 20}}>
                <View style = {{flexDirection : 'row' , alignItems : 'center'}}>
                <TouchableOpacity style = {{marginHorizontal : 10}}
                onPress={backBtnPress}
                >
                    <Image source={require('../assets/arrow-left.png')}></Image>
                </TouchableOpacity >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
                </View>

              <View style = {{flexDirection : 'row'}}>
                <TouchableOpacity 
                onPress={settingBtnTapped}>
                    <Image source={settingImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style = {{marginHorizontal : 10}}>
                    <Image source={searchImage}></Image>
                </TouchableOpacity>
                </View>
                </View>
          
        
    )
}

export default ItemsHeader