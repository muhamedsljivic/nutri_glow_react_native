import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type AppProps = {
  navigation: NativeStackNavigationProp<any>;
};

const imageWidth = Dimensions.get("window").width;

const App: React.FC<AppProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("muhamedsljivic@google.com");
  const [password, setPassword] = useState<string>("***********");

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/images/mask_group_up.png")} />
      <View>
        <Text style={styles.heading}>Welcome</Text>
      </View>
      <View style={styles.allElements}>
        <TextInput style={styles.email} onChangeText={setEmail} value={email} />
        <TextInput
          style={styles.password}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Text style={styles.normText}>Forgot your password?</Text>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate("Ask")}
        >
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 20 }}>
          <Text style={styles.normText}>Don't have an account?</Text>
          <Text style={styles.signUpText}> sign up </Text>
        </Text>
        <View style={styles.otherSignup}>
          <TouchableOpacity style={styles.facebookSignup}>
            <Image
              style={styles.socialIcon}
              source={require("../assets/icons/facebook_120px.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleSignup}>
            <Image
              style={styles.socialIcon}
              source={require("../assets/icons/google_120px.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <Image
          style={styles.imageBottom}
          source={require("../assets/images/mask_group_down.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5FA",
  },
  heading: {
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    color: "#23233C",
  },
  allElements: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  email: {
    width: 336,
    height: 54,
    borderRadius: 5,
    backgroundColor: "white",
    fontSize: 14,
    color: "#23233C",
    shadowColor: "#0D4E81",
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    paddingLeft: 20,
  },
  password: {
    marginTop: 30,
    width: 336,
    height: 54,
    borderRadius: 5,
    backgroundColor: "white",
    fontSize: 14,
    color: "#23233C",
    shadowColor: "#0D4E81",
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    paddingLeft: 20,
  },
  normText: {
    marginTop: 20,
    fontSize: 13,
    color: "#8D8D8D",
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: "#23233C",
    width: 333,
    height: 54,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  otherSignup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  facebookSignup: {
    width: 82,
    height: 51,
    backgroundColor: "white",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  googleSignup: {
    width: 82,
    height: 51,
    backgroundColor: "white",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  signUpText: {
    fontWeight: "bold",
    color: "#8D8D8D",
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageBottom: {
    width: imageWidth,
    position: "absolute",
    bottom: 0,
  },
});
