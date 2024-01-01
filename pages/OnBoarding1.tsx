import {
    View,
    Text,
    StyleSheet,
    Image,
    Touchable,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React from "react";
  import { FontAwesome } from "@expo/vector-icons";
  
  const OnBoarding1 = ({navigation}:{navigation:any}) => {
    return (
      <View style={style.container}>
        <Image
          style={style.image}
          source={require("../assets/images/onboarding/2.png")}
        />
  
        <View style={style.wrapper}>
          <View style={style.headingContent}>
            <Text style={style.headingText}>Cheap</Text>
            <Text style={style.headingText}>Data Plans</Text>
          </View>
          <Text style={style.textInfo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum
            odio explicabo porro libero. Fugiat esse consequatur ducimus, pariatur
            expedita odio impedit ullam deserunt adipisci officia beatae natus
            architecto sint.
          </Text>
  
          <View style={style.actions}>
            <View style={style.btnC}>
              <TouchableOpacity
                style={{ ...style.divs, ...style.divsActive }}
              ></TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate("Onboarding-2")} style={{ ...style.divs }}></TouchableOpacity>
              {/* <TouchableOpacity style={{ ...style.divs }}></TouchableOpacity> */}
            </View>
  
            <TouchableOpacity style={style.continueBtn} onPress={()=> navigation.navigate("Onboarding-2")}>
              {/* <Text style={style.textInfo}>Skip</Text> */}
              <FontAwesome name="arrow-right" style={{fontSize:20}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const style = StyleSheet.create({
    image: {
      width: "100%",
      height:"56%",
      transform: [{ translateX: -80 }, { scale: 1.12 }],
      // opacity:.7,
      objectFit: "contain",
    },
    wrapper: {
      paddingVertical: 30,
      paddingHorizontal: 10,
      backgroundColor: "rgb(28, 30, 35)",
      // height:"100%",
      zIndex: 1,
    },
    container: {
      // padding:25,
      height: "100%",
      backgroundColor: "#ffe001",
    },
    headingContent: {
      paddingHorizontal: 30,
      zIndex: 1,
      marginTop: "auto",
    },
    headingText: {
      fontSize: 60,
      fontFamily: "Titillium_Thick",
      color: "white",
    },
    textInfo: {
      maxWidth: 400,
      marginVertical: 10,
      paddingHorizontal: 30,
      fontSize: 15,
      color: "white",
      fontFamily: "Titillium_Regular",
    },
    actions: {
      display: "flex",
      paddingVertical: 10,
      paddingHorizontal: 30,
      flexDirection: "row",
      alignItems:"center",
      justifyContent: "space-between",
    },
    btnC: {
      flexDirection: "row",
      gap: 10,
    },
    continueBtn:{
      width:70,
      height:70,
      display:"flex",
      backgroundColor:"#fff",
      borderRadius:100,
      padding:5,
      justifyContent:"center",
      alignItems:"center"
    },
    divs: {
      width: 30,
      height: 3,
      borderRadius: 10,
      opacity: 0.5,
      backgroundColor: "white",
    },
    divsActive: {
      opacity: 1,
    },
  });
  
  export default OnBoarding1;
  