import { View, Text, SafeAreaView, StyleSheet, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

const AuthLayout = ({children, title}:{children:React.ReactNode, title?:string}) => {
  return (
    <ImageBackground   source={require("../assets/images/onboarding/pattern.png")} style={style.container}>
    <View style={style.wrapper}>
      <View style={style.headerContainer}>
        <Pressable style={style.backBtn}>
          <FontAwesome5 name="arrow-left" />
        </Pressable>
        <Text style={style.pageTitle}>{title || ""}</Text>
        <FontAwesome5 name="question" />
      </View>
      <View>
        <Text style={style.infoText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, blanditiis?
        </Text>
      </View>
      {children}
    </View>
   </ImageBackground>
  )
}


const style = StyleSheet.create({
    container:{
        paddingTop:30,
        backgroundColor:"#aaa",
        // objectFit:'cover',
        height:"100%",
        position:"relative"
    },
    wrapper:{
      backgroundColor:"white",
      height:"100%",
      marginTop:30,
      borderRadius:50
    },
    headerContainer:{
      flexDirection:"row",
      alignItems:"center",
      padding:30,
      justifyContent:"space-between"
    },
    backBtn:{
      padding:10,
    //   backgroundColor:"#eee",
    //   elevation:10,
    //   width:50,
    //   height:50
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
    },
    pageTitle:{
      fontSize:35,
      fontFamily:"Titillium_Thick"
    },
    infoText:{
        paddingHorizontal:30,
        paddingBottom:15,
        fontSize:16,
        fontFamily:"Titillium_Regular"
    }
})


export default AuthLayout