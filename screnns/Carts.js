import React from "react";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
const AddCart = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.containerCart}>
        <Text style={{ marginLeft: 8, fontWeight: "bold", marginTop: 5 }}>
          ADD TO CART
        </Text>
        <Text
          style={{
            fontSize: 13,
            alignSelf: "center",
            shadowColor: "gray",
            // fontWeight: "100",
            paddingHorizontal: 3,
            paddingVertical: 3,
            marginTop: 5,
            textAlign: "justify",
            marginLeft: 3,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in .
        </Text>
      </View>
      <View style={styles.containerImage}>
        <Image source={require("../assets/cart.png")} style={styles.image} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.containerNext}
          onPress={() => {
            navigation.navigate("payement");
          }}
        >
          <Text style={{ color: "white", fontSize: 26 }}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerLastRow}>
        <TouchableOpacity
          style={{ marginTop: 30 }}
          onPress={() => navigation.goBack()}
        >
          <Text>Previous</Text>
        </TouchableOpacity>
        <View
          style={{
            width: 10,
            height: 10,
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: "gray",
            borderColor: "gray",
            marginTop: 30,
            marginLeft: 100,
          }}
        ></View>
        <View
          style={{
            width: 17,
            height: 10,
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: "blue",
            borderColor: "blue",
            marginTop: 30,
            marginLeft: 3,
          }}
        ></View>
        <View
          style={{
            width: 10,
            height: 10,
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: "gray",
            borderColor: "gray",
            marginTop: 30,
            marginLeft: 3,
          }}
        ></View>
        <TouchableOpacity style={{ marginTop: 30, marginLeft: 100 }}>
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AddCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  containerCart: {
    // backgroundColor: "green",

    flex: 0.3,
    marginTop: 50,
    // alignItems: "center",
    // justifyContent: "center",
  },
  containerImage: {
    flex: 0.5,
    // justifyContent: "center",
    // alignItems: "center",
    // marginHorizontal: 3,

    // backgroundColor: "yellow",
    // alignSelf: "center",
    // width: 400,
    // height: 30,
    marginTop: 15,
  },
  image: {
    width: "80%",
    height: "80%",
    alignSelf: "center",
    // alignItems: "center",
    // justifyContent: "center",
    //
    marginTop: 25,
    // marginLeft: 30,
    // marginRight: 20,
  },
  containerNext: {
    backgroundColor: "#03045e",
    // marginVertical: 30,
    // flex: 0.4,
    borderWidth: 2,
    // flex: 3,
    marginTop: 60,
    width: 180,
    height: 60,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderColor: "#03045e",
  },
  containerLastRow: {
    flex: 0.4,
    // backgroundColor: "red",
    marginTop: 5,
    flexDirection: "row",
    // justifyContent: "space-evenly",
    alignItems: "center",
    justifyContent: "center",
  },
});
