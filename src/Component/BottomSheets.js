import React, { useState } from 'react';
import { View, StyleSheet, Animated, Dimensions, TouchableOpacity , Button , Text} from 'react-native';
import Modal from "react-native-modal";



const BottomSheets = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    }
  
  
    return (
      <View style={{ flex: 1 }}>
        <Button title="Show modal" onPress={toggleModal} />
  
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
  
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
  );
};


export default BottomSheets;
