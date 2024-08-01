import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SubCategoriesItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={{ justifyContent: 'center', flex: 1, width: '50%', margin: '5%', alignItems: 'center', borderRadius: 25, height: 180 }}
            onPress={onPress}>
            <Image style={{ width: 120, height: 120, borderRadius: 20 }} source={item.image} />
            <Text style={{ fontWeight: 'bold', marginTop: 20, color: 'black' }}>{item.title}</Text>
        </TouchableOpacity>
    );
};



export default SubCategoriesItem;
