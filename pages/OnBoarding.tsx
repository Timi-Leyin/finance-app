import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Pressable,
    Image,
    TouchableNativeFeedback,
    TouchableOpacity,
    SafeAreaView,
  } from "react-native";
  import React from "react";
  import globalStyle from "../styles/global";
  import Preloader from "../components/Preloader";
  import { FontAwesome } from "@expo/vector-icons";
  const OnBoarding = () => {
    return (
      <SafeAreaView style={style.container}>
        {/* <Preloader /> */}
        <ImageBackground
          style={style.img_bg}
          source={require("../assets/images/cover-2.png")}
        />
  
        <View style={style.content}>
            <TouchableOpacity style={style.backBtn}>
                <FontAwesome name="arrow-left" />
            </TouchableOpacity>
          <TouchableOpacity style={style.sign_up_button}>
            <Text style={style.sign_up_btn_text}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  const style = StyleSheet.create({
    container: {
      position: "relative",
      paddingTop:25
    },
    img_bg: {
      height: "100%",
    },
    content: {
      position: "absolute",
      width: "100%",
      padding: "5%",
      paddingHorizontal:"10%",
      minHeight: 20,
      flex:1,
      alignItems:"center",
      flexDirection:"row",
      gap:20,
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
      flex:1,
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

    backBtn: {
      padding: 16,
      backgroundColor: "#fff",
    //   flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: 60,
      height: 60,
      elevation: 10,
      borderRadius: 15,
    },
  });
  
  export default OnBoarding;
  