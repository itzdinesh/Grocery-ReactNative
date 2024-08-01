import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import ItemsHeader from '../Component/ItemsHeader';
import ProductListingComp from '../Component/ProductListingComp';


const numberOfcol = 2
const ProductListing = ({ navigation }) => {

    const dummyProductImage = [
        {
            image: require('../assets/watch1.png'),
            text: 'Loop Slicon Strong'
        },
        {
            image: require('../assets/watch2.png'),
            text: 'Ultra Smart Watch'
        },
        {
            image: require('../assets/eEarphone.png'),
            text: 'Nike Air Jorden'
        },
        {
            image: require('../assets/eCharger.png'),
            text: 'Chashama brand'
        }

    ]

 const settingBtn  = () => {
    return (
    navigation.navigate('BottomSheet')
    )
 }





    return (
        <View>
            <ItemsHeader
                title='Smart Watch'
                settingImage={require('../assets/setting-4.png')}
                searchImage={require('../assets/search-normal.png')}
          settingBtnTapped={settingBtn}
                backBtnPress={() => {
                    navigation.pop()
                }}
            />
            <FlatList
                data={dummyProductImage}
                renderItem={({ item }) => <ProductListingComp item={item} />}
                keyExtractor={item => item.id}
                numColumns={numberOfcol}
            >
                horizontal = {true}

            </FlatList>




        </View>
    )
}

export default ProductListing