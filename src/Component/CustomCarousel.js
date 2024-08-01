import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;

const imageList = [
    { image: require('../assets/Rectangle6.png'), discout: '20%' },
    { image: require('../assets/Rectangle6.png'), discout: '30%' },
    { image: require('../assets/Rectangle6.png'), discout: '40%' },
    { image: require('../assets/Rectangle6.png'), discout: '40%' },
];

const CustomCarousel = () => {
    const renderImages = ({ item }) => {
        return (
            <View style = {{height: 200, width: "100%", borderRadius: 20 , alignItems : 'center' , justifyContent : 'center', }}>
                <Image style = {{width : '100%' , height : 180 }} source={item.image} />
                <View style={styles.frontView}>
                    <Text style={{ backgroundColor: 'black', color: 'white', width: 70, textAlign: 'center' }}>{item.discout}</Text>
                    <Text style={{ color: 'white' }}>On Headphones</Text>
                    <Text style={{ color: 'white', fontSize: 30 }}>Exclusive Sale</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={{ marginTop: 20 }}>
            <Carousel
                data={imageList}
                renderItem={renderImages}
                sliderWidth={windowWidth}
                itemWidth={windowWidth}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    frontView: {
        padding: 20,
        left : 0,
        position: 'absolute',
        bottom: 0,
    }
});

export default CustomCarousel;