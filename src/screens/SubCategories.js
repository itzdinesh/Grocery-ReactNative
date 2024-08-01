import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import ElectronicsItem from '../Model/ElectronicsItem';

import ItemsHeader from '../Component/ItemsHeader';

import SubCategoriesItem from '../Component/SubCategoriesItem';

const SubCategories = ({navigation}) => {
   

const dummyElectronicsData = [
{
 id : 1,
 image :  require('../assets/eEarphone.png'),
 title : 'Earphone'
},
{
    id : 2,
    image : require('../assets/eHeadphones.png'),
 title : 'Headphone'
},
{
    id : 3,
    image :   require('../assets/eLaptop.png'),
 title : 'laptop'
},
{
    id : 4,
    image : require('../assets/eEarphone.png'),
 title : 'Earphone'
},
{
    id : 5,
    image :require('../assets/eWatch.png'),
 title : 'Watch'
},
{
    id : 5,
    image : require('../assets/eMobile.png'),
 title : 'Mobile'
}
]
 
const renderItem = ({item}) => {
 
    return(
        
        <SubCategoriesItem
            item={item}
            onPress={() => {
                navigation.navigate('ProductListing');
            }}
        />
    )
}




    return (
        <View>
        <ItemsHeader
        title= 'Electronics'
        backBtnPress={() => {
            navigation.pop()
        }}
        />
        
      <FlatList
      data={dummyElectronicsData}
      renderItem={renderItem}
     numColumns={2 }
     keyExtractor={(item) => item.id}
     
      ></FlatList>
   </View>
    )
}

export default SubCategories;



// ElectronicsItem.js

  