import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import ItemsHeader from '../Component/ItemsHeader';
const Categories = ({ navigation }) => {
    const numColumns = 2
    const dummyImages = [
        {
            image: require('../assets/house.png'),
            text: 'Construction'
        },
        {
            image: require('../assets/scope.png'),
            text: 'Medical'
        },
        {
            image: require('../assets/tv.png'),
            text: 'Tv'
        },
        {
            image: require('../assets/sofa.png'),
            text: 'Furniture'
        },
        {
            image: require('../assets/mobile.png'),
            text: 'Electronics'
        },
        {
            image: require('../assets/gift.png'),
            text: 'Party'
        },
        {
            image: require('../assets/bag.png'),
            text: 'Gift'
        },
        {
            image: require('../assets/car.png'),
            text: 'Travel'
        }

    ]

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{ justifyContent: 'center', flex: 1, width: '50%', margin: '5%', alignItems: 'center', borderWidth: 1, borderColor: 'gray', borderRadius: 25, height: 150 }}
                onPress={() => {
                    navigation.navigate('SubCategories');
                }}>
                <Image style={{ width: 50, height: 50 }} source={item.image} />
                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>{item.text}</Text>

            </TouchableOpacity>

        )

    }



    return (
        <View>
            <ItemsHeader
        title= 'Categories'
        backBtnPress={() => {
            navigation.pop()
        }}
        />
        <FlatList
            data={dummyImages}
            renderItem={renderItem}
            numColumns={numColumns}
            keyExtractor={(item, index) => index.toString()}
        >

        </FlatList>
        </View>
    )

}

export default Categories