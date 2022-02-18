import { setStatusBarStyle, StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Payement = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* title container view */}
      <View style={styles.containerText}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textTransform: "uppercase",
            marginLeft: 5,
          }}
        >
          payement successful
        </Text>
      </View>
      {/* lorem view container */}
      <View style={styles.containerLorem}>
        <Text style={{ marginLeft: 5 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>
      {/* image view container */}
      <View style={styles.containerImage}>
        <Image
          source={require("../assets/payement.png")}
          style={styles.image}
        />
      </View>
      {/* bouton container view */}
      <View style={styles.containerButton}>
        <TouchableOpacity>
          <Text style={{ fontSize: 23, color: "white" }}>Get Started</Text>
        </TouchableOpacity>
      </View>
      {/* last container view */}
      <View style={styles.containerLast}>
        {/* -------------------------col one */}
        <View style={{ marginLeft: 10 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: "gray", fontSize: 20 }}>Previous</Text>
          </TouchableOpacity>
        </View>
        {/* col two */}

        <View
          style={{
            width: 10,
            height: 10,
            borderWidth: 1,
            marginLeft: 120,
            borderRadius: 5,
            backgroundColor: "gray",
            borderColor: "gray",
            marginRight: 2,
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
            marginRight: 3,
          }}
        ></View>
        <View
          style={{
            width: 25,
            height: 10,
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: "blue",
            borderColor: "blue",
          }}
        ></View>
      </View>
    </View>
  );
};
export default Payement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "green",
  },
  containerText: {
    // backgroundColor: "red",
    marginTop: 30,
    flex: 0.05,
    justifyContent: "center",
  },
  containerLorem: {
    // backgroundColor: "yellow",
    marginTop: 3,
    flex: 0.2,
    alignItems: "center",
    // justifyContent: "center",
  },
  containerImage: {
    // backgroundColor: "pink",
    flex: 0.5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
  containerButton: {
    backgroundColor: "blue",
    flex: 0.1,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    width: 200,
    alignSelf: "center",
    borderRadius: 20,
  },
  containerLast: {
    // backgroundColor: "purple",
    flex: 0.2,
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
});
