import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import globalStyle from "../styles/global";
import Preloader from "../components/Preloader";

const GetStarted = () => {
  return (
    <View style={style.container}>
      {/* <Preloader /> */}
      <ImageBackground
        style={style.img_bg}
        source={require("../assets/images/cover-2.png")}
      />

      <View style={style.content}>
        <TouchableOpacity style={style.sign_up_button}>
          <Text style={style.sign_up_btn_text}>Sign Up for Free</Text>
        </TouchableOpacity>
        <View style={style.divider_container}>
          <View style={style.divider}></View>
          <Text style={style.divider_text}> Or Continue with</Text>
          <View style={style.divider}></View>
        </View>
        {/* <StyleText text="Or Continue with" style={{fontSize:20, ...style.divider_text}} /> */}

        <View style={style.login_alt_container}>
          <TouchableOpacity style={style.login_alt_btn}>
            <Image
              style={style.login_alt_icon}
              source={require("../assets/images/apple.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={style.login_alt_btn}>
            <Image
              style={style.login_alt_icon}
              source={require("../assets/images/google.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={style.login_alt_btn}>
            <Image
              style={style.login_alt_icon}
              source={require("../assets/images/facebook.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={style.login_info_text}>
          Have an account ? <Text style={globalStyle.link}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    position: "relative",
  },
  img_bg: {
    height: "100%",
  },
  content: {
    position: "absolute",
    width: "100%",
    padding: "5%",
    minHeight: 250,
    bottom: 0,
    elevation: 50,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowRadius: 10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    backgroundColor: "#eee",
    zIndex: 1,
  },
  sign_up_button: {
    marginTop: 20,
    padding: 20,
    elevation: 2,
    marginVertical: 10,
    backgroundColor: "darkorange",
    borderRadius: 40,
  },
  sign_up_btn_text: {
    textAlign: "center",
    fontFamily: "molgen",
    // fontWeight:"bold",
    fontSize: 20,
    color: "#fff",
  },
  divider_container: {
    flex: 1,
    position: "relative",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  divider: {
    width: "38%",
    padding: 1,
    backgroundColor: "#000",
    opacity: 0.1,
  },
  divider_text: {
    paddingVertical: 20,
    // fontWeight:"bold",
    opacity: 0.5,
    fontSize: 20,
    fontFamily: "molgen",
    textAlign: "center",
  },
  login_alt_container: {
    flex: 1,
    flexDirection: "row",
    gap: 30,
    position: "relative",
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    marginVertical: 20,
  },
  login_alt_btn: {
    padding: 16,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    elevation: 10,
    borderRadius: 15,
  },
  login_alt_icon: {
    width: "80%",
    height: "80%",
    objectFit: "contain",
  },
  login_info_text: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 20,
    // fontWeight:"900",
    fontFamily: "molgen",
  },
});

export default GetStarted;
