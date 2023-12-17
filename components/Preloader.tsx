import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Preloader = () => {
  return (
   <React.Fragment>
     <View style={style.container}>
      <Image style={style.img_loader} source={require("../assets/images/gif.gif")} />
    </View>
   </React.Fragment>
  )
}

const style= StyleSheet.create({
    container:{
        // flex:1,
        width:"100%",
        height:"100%",
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        // position:"absolute",
        // top:0,
        // left:0,
        // bottom:0,
        // backgroundColor:"rgba(0,0,0,.95)"
    },
    img_loader:{
        width:100, 
        borderRadius:100,
        // position:"absolute",
        // top:"50%",
        // left:"50%",
        height:100
    }
})

export default Preloader