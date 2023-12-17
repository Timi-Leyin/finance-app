import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const OnBoarding1 = () => {
  return (
    <View style={style.container}>
        <Image style={style.image} source={require("../assets/images/onboarding/2.png")} />

        <View style={style.wrapper}>

      <View style={style.headingContent}>
      <Text style={style.headingText}>Start</Text>
      <Text style={style.headingText}>Saving Money</Text>
      </View>
      <Text style={style.textInfo}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum odio explicabo porro libero. Fugiat esse consequatur ducimus, pariatur expedita odio impedit ullam deserunt adipisci officia beatae natus architecto sint.
      </Text>

      <View style={style.actions}>
        
      <View style={style.btnC}>
      <TouchableOpacity style={{...style.divs, ...style.divsActive}}></TouchableOpacity>
      <TouchableOpacity style={{...style.divs, }}></TouchableOpacity>
      <TouchableOpacity style={{...style.divs, }}></TouchableOpacity>
      </View>
        
        <TouchableOpacity>
            <Text style={style.textInfo}>Skip</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
    image:{
        width:"100%",
        transform: [{ translateX: -80 },{scale:1.12}],
        // opacity:.7,
        objectFit:'contain'
    },
    wrapper:{
        paddingVertical:30,
        paddingHorizontal:10,
        backgroundColor:"rgb(183, 19, 183)",
        // height:"100%",
        zIndex:1,
    },
    container:{
        // padding:25,
        height:"100%",
        backgroundColor:"rgb(220, 38, 220)"
    },
    headingContent:{
        paddingHorizontal:30,
        zIndex:1,
        marginTop:"auto"
    },
    headingText:{
        fontSize:100,
        fontFamily:"molgen",
        color:"white",
    },
    textInfo:{
        maxWidth:400,
        marginVertical:10,
        paddingHorizontal:30,
        fontSize:20,
        color:"white",
        fontFamily:"molgen",
    },
    actions:{
        display:"flex",
        paddingVertical:30,
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    btnC:{
        flexDirection:"row",
        gap:10
    },
    divs:{
        width:30,
        height:3,
        borderRadius:10,
        opacity:.5,
        backgroundColor:"white"
    },
    divsActive:{
        opacity:1
    }
});

export default OnBoarding1