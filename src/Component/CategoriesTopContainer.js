import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';


const CategoriesTopContainer = ({ title, seeAllBtn , onpress}) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
           
        }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
            <TouchableOpacity
       onPress={onpress}
            >
                <Text style={{ fontSize: 13, color: 'green' }}>{seeAllBtn}</Text>
            </TouchableOpacity>
        </View>
    )

}


// const CategoriesTopContainer = ({ title, seeAllText }) => {
//     return (
//         <View style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             marginHorizontal: 10
//         }}>
//             <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{title}</Text>
//             <TouchableOpacity>
//                 <Text style={{ fontSize: 18, color: 'black' }}>{seeAllText}</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };


export default CategoriesTopContainer