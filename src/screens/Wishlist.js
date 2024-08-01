import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Modal,
    ScrollView,
} from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { Picker } from "@react-native-picker/picker";

const Wishlist = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [inputValue, setInputValue] = useState("All");
    const [pickerVisible, setPickerVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState("All");
    const [tempValue, setTempValue] = useState("All");

    const symptomsArr = ["All", "Symptom 1", "Symptom 2", "Symptom 3", "Symptom 4"];

    const handleInputFocus = () => {
        setTempValue(selectedValue);
        setPickerVisible(true);
    };

    const handleDone = () => {
        setSelectedValue(tempValue);
        setInputValue(tempValue);
        setPickerVisible(false);
    };

    const handleCancel = () => {
        setPickerVisible(false);
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'blue' }}>


            <View style={styles.container}>
                <Image style={styles.bg1} source={require("../assets/house.png")} />
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.backImage} source={require("../assets/house.png")} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.rightBtnWrapper}>
                        <View style={styles.rightBtnContainer}>
                            <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate("../assets/house.png")}>
                                <Image source={require("../assets/house.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate("../assets/house.png")}>
                                <Image source={require("../assets/house.png")} />
                            </TouchableOpacity>
                        </View>
                        <Image style={styles.bg2} source={require("../assets/house.png")} />
                    </View>
                </View>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <Text style={styles.title}>REPORT</Text>
                    <Text style={styles.subTitle}>Eye Tracker</Text>
                    <View style={styles.firstSegmentContainer}>

                        <SegmentedControl
                            style={styles.segment1}
                            values={["Symptoms", "Compliance", "Imaging"]}
                            selectedIndex={selectedIndex}
                            tintColor="#F2F2FF"
                            backgroundColor="transparent"
                            fontStyle={{ color: "black" }}
                            borderRadius={0}
                            onChange={(event) => {
                                setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                            }}
                        />

                    </View>
                    <View style={styles.containerView}>
                        <View>
                            <View style={styles.symptomContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    value={inputValue}
                                    placeholder="Select an option"
                                    onFocus={handleInputFocus}
                                    onTouchStart={handleInputFocus}
                                />
                                <Image style={styles.downArrow} source={require("../assets/house.png")} />
                            </View>
                            <View style={styles.graphContainerView}>
                                {Array(30).fill("dsfa").map((text, index) => (
                                    <Text key={index}>{text}</Text>
                                ))}
                            </View>
                        </View>
                    </View>
                </ScrollView>
                {pickerVisible && (
                    <Modal
                        transparent={true}
                        animationType="slide"
                        visible={pickerVisible}
                        onRequestClose={handleCancel}
                    >
                      
                            <View style={styles.modalOverlay}>
                                <View style={styles.pickerContainer}>
                                    <View style={styles.toolbar}>
                                        <TouchableOpacity onPress={handleCancel}>
                                            <Text style={styles.toolbarButton}>Cancel</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={handleDone}>
                                            <Text style={styles.toolbarButton}>Done</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Picker
                                        selectedValue={tempValue}
                                        onValueChange={(itemValue) => setTempValue(itemValue)}
                                    >
                                        {symptomsArr.map((symptom, index) => (
                                            <Picker.Item key={index} label={symptom} value={symptom} />
                                        ))}
                                    </Picker>
                                </View>
                            </View>
                      
                    </Modal>
                )}

            </View>


        </View>
    );
};

export default Wishlist;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C1C0EA",
    },
    bg1: {
        marginTop: 20,
        marginLeft: 100,
        width: 100,
        height: 100,
        resizeMode: "stretch",
    },
    bg2: {
        width: 100,
        height: 100,
        marginRight: 30,
        resizeMode: "contain",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 30,
        width: "100%",
        marginTop: -70,
        paddingHorizontal: 10,
        backgroundColor: 'yellow'
    },
    backButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ddd",
        borderRadius: 5,
        zIndex: 1,
    },
    imageContainer: {
        height: 35,
        width: 35,
        justifyContent: "center",
        alignItems: "center",
    },
    backImage: {
        width: 35,
        height: 35,
        resizeMode: "contain",
    },
    rightBtnWrapper: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        marginTop: 100,
        marginRight: 20,
    },
    rightBtnContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        color: "black",
        marginLeft: 15,
        marginTop: 35,
    },
    subTitle: {
        fontSize: 45,
        color: "black",
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: 25,
    },
    profileButton: {
        width: 35,
        height: 35,
        marginRight: 20,
    },
    cartButton: {
        width: 35,
        height: 35,
        borderRadius: 5,
    },
    firstSegmentContainer: {
        marginHorizontal: 15,
        marginTop: 35,
        height: 72,
        borderRadius: 12,
        backgroundColor: "white",
    },
    scrollViewContent: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    segment1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    containerView: {
        backgroundColor: "red",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        marginTop: 25,
        paddingBottom: 20,
    },
    symptomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 25,
        height: 72,
        borderRadius: 8,
        borderColor: "lightgrey",
        borderWidth: 2,
    },
    textInput: {
        width: "90%",
        height: "100%",
        padding: 20,
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "flex-end",
    },
    pickerContainer: {
        width: '100%',
        backgroundColor: "white",
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    toolbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#F8F8F8",
    },
    toolbarButton: {
        color: "black",
        fontSize: 16,
    },
    downArrow: {
        width: 15,
        height: 15,
        marginRight: 30,
        resizeMode: "contain",
    },
    graphContainerView: {
        backgroundColor: "yellow",
        borderRadius: 12,
        marginTop: 25,
        paddingBottom: 20,
    },
});
