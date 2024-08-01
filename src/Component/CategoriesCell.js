import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const CategoriesCell = ({image}) => {

return (
    <View style={styles.CalegoriesContainer}>
    <Image
        style={{ height: 100, width: 100, borderRadius: 20 }}
        source={image}
    />
</View>
)

}

export default CategoriesCell

const styles = StyleSheet.create({
    CalegoriesContainer: {

        alignItems: 'center',
        borderColor: 'gray',
        height: 100,
        width: 100,
        borderWidth: 1,
        borderRadius: 20,
        margin: 10

    }
})