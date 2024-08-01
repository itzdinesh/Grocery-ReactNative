import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Header from '../Component/Header';
import Carousel from 'react-native-snap-carousel';
// import { Text } from 'react-native-reanimated/lib/typescript/Animated';
import CustomCarousel from '../Component/CustomCarousel';
import CategoriesCell from '../Component/CategoriesCell';
import CategoriesTopContainer from '../Component/CategoriesTopContainer';
import ProductListingComp from '../Component/ProductListingComp';


const windowWidth = Dimensions.get('window').width;
const numberOfcol = 2





const Dashboard = ({ navigation }) => {
    const dummyProductImage = [
        {
            image: require('../assets/Shoes.png'),
            text: 'Nike Air Jorden'
        },
        {
            image: require('../assets/glasses.png'),
            text: 'Chashama brand'
        },
        {
            image: require('../assets/Shoes.png'),
            text: 'Nike Air Jorden'
        },
        {
            image: require('../assets/glasses.png'),
            text: 'Chashama brand'
        }

    ]


    const dummyImage = [
        {
            image: require('../assets/CategoryBag.png'),
            text: 'Nike Air Jorden'
        },
        {
            image: require('../assets/CategoryCar.png'),
            text: 'Chashama brand'
        },
        {
            image: require('../assets/CategorySofa.png'),
            text: 'Nike Air Jorden'
        },
        {
            image: require('../assets/CategoryPhone.png'),
            text: 'Chashama brand'
        }
    ]

    const renderItem = ({ item }) => {
        return (
            <CategoriesCell image={item.image} />
        )
    }

    const renderProductItem = ({ item }) => {
        return (



            <View
                style={{
                    margin: 5, flex: 1, height: 250, borderRadius: 25
                }}
            >

                <Image

                    style={{ height: 150, width: '100%' }} source={item.image} />
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
                <View
                    style={{ position: 'absolute', right: 0, padding: 10 }}
                >
                    <TouchableOpacity>
                        <Image source={require('../assets/wishlist.png')} />
                    </TouchableOpacity>

                </View>


            </View>



        )
    }

    const handlePress = (navigation) => {
        console.log('See All button pressed');
        navigation.navigate('Categories')
    };

    return (


        <ScrollView style={{ flex: 1 }}>

            <View style={{ flex: 1 }}>

                <Header />
                <CustomCarousel />
                <View style={styles.calegoriesContainer}>
                    <CategoriesTopContainer
                        title="Categories"
                        seeAllBtn="See All"
                        onpress={() => handlePress(navigation)}
                    />



                    <FlatList
                        data={dummyImage}
                        renderItem={renderItem}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View
                    style={{ flex: 1 }}
                >
                    <CategoriesTopContainer
                        title="Latest Product"
                        seeAllBtn="See All"
                        onpress={() => {
                            navigation.navigate('ProductListing')
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
            </View >
        </ScrollView >

    );
};

export default Dashboard;

const styles = StyleSheet.create({
    calegoriesContainer: {
        height: 180,
        width: '100%',
        marginTop: 20,



    },
    CalegoriesContainer: {

        alignItems: 'center',
        borderColor: 'gray',
        height: 100,
        width: 100,
        borderWidth: 1,
        borderRadius: 20,
        margin: 10

    }
    ,
    frontView: {
        padding: 20,
        position: 'absolute',
        bottom: 0,
    }

})
