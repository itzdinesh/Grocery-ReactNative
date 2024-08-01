import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const ProductListingComp = ({ item }) => {
    return (
        <View style={{ margin: 5, flex: 1, height: 250, borderRadius: 25 }}>
            <Image style={{ height: 150, width: '100%' }} source={item.image} />
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ backgroundColor: 'red', height: 20, width: 20, borderRadius: 20 }}></View>
                    <View style={{ backgroundColor: 'blue', height: 20, width: 20, borderRadius: 20 }}></View>
                    <View style={{ backgroundColor: 'pink', height: 20, width: 20, borderRadius: 20 }}></View>
                    <Text style={{ marginLeft: 10 }}>All 7 Colors</Text>
                </View>
                <Text style={{ fontSize: 17, color: 'black' }}>{item.text}</Text>
                <Text style={{ fontSize: 17 }}>200$</Text>
            </View>
            <View style={{ position: 'absolute', right: 0, padding: 10 }}>
                <TouchableOpacity>
                    <Image source={require('../assets/wishlist.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ProductListingComp;
