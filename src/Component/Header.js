

import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable, StatusBa, TouchableOpacity } from 'react-native';




const Header = () => {
    return (
        <View style={styles.headerContianer}>
            <View style={styles.quickMartText}>
                <Image source={require('../assets/Vector.png')} />
                <Text style={{ fontSize: 20 }}>uick Mart</Text>
            </View>
            <View style={styles.searchImage}>
                <Image source={require('../assets/search-normal.png')} />
                <Image style={{ marginLeft: 10 }} source={require('../assets/Rectangle7.png')} />
            </View>
        </View>
    );


}
export default Header

const styles = StyleSheet.create({
    headerContianer: {
        width: '100%',
        height: 50,
        fontWeight: 'bold',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },

    quickMartText: {
        alignItems: 'center',
        flexDirection: 'row'
    },

    searchImage: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        margin: 10
    }


})

