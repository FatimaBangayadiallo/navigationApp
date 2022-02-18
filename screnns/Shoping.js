import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Shoping = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text
          style={{
            fontSize: 24,
            textTransform: "uppercase",
            fontWeight: "bold",
            marginBottom: 6,
          }}
        >
          online Shopping
        </Text>
        <Text style={{ fontSize: 15 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nesciunt
          in placeat doloremque blanditiis sint, eum laborum tempora nemo
          minima. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Unde, doloribus?
        </Text>
      </View>
      <View style={styles.ImageContainer}>
        <Image source={require("../assets/ss.png")} style={styles.image} />
      </View>
      <View style={styles.touchable}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Carts");
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerDernier}>
        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "red",
            flex: 0.9,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              borderWidth: "2",
              width: 15,
              height: 10,
              marginRight: 2,
              borderRadius: 10,
              backgroundColor: "blue",
              borderColor: "blue",
            }}
          ></View>
          <View
            style={{
              borderWidth: "2",
              width: 10,
              height: 10,
              marginRight: 2,
              borderRadius: 10,
              backgroundColor: "gray",
              borderColor: "gray",
            }}
          ></View>
          <View
            style={{
              borderWidth: "2",
              width: 10,
              height: 10,
              marginRight: 2,
              borderRadius: 10,
              backgroundColor: "gray",
              borderColor: "gray",
            }}
          ></View>
        </View>
        <View style={{ alignSelf: "right", flex: 0.1, marginTop: 19 }}>
          <TouchableOpacity>
            <Text>Sky</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Shoping;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  ImageContainer: {
    flex: 4,
    backgroundColor: "red",
  },
  containerText: {
    marginTop: 40,
    paddingHorizontal: 15,
    // backgroundColor: "green",
    flex: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    // marginTop: 10,
    // paddingTop: 30,
  },
  touchable: {
    flex: 1,
    borderWidth: 2,
    // marginTop: 90,
    alignItems: "center",
    justifyContent: "center",
    // paddingVertical: 10,
    alignSelf: "center",
    width: 150,
    // height: 10,
    // marginLeft: 110,
    borderRadius: 20,
    backgroundColor: "blue",
    borderColor: "blue",
    // color: "white",
  },
  containerDernier: {
    flex: 1,
    flexDirection: "row",
    // marginHorizontal: 4,
    marginTop: 50,
    // marginLeft: 220,
    // justifyContent: "center",
    // alignItems: "center",
    alignSelf: "center",
    // backgroundColor: "blue",
  },
});
