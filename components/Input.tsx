import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'

export class Input extends Component {
  render() {
    return (
      <View>
        <Text style={style.label}>Label</Text>
          <TextInput style={style.input} placeholder="Name" id="name"  />
        <Text style={style.error}>Invalid Inout</Text>
      </View>
    )
  }
}


const style = StyleSheet.create({
    input:{
        padding:20,
        backgroundColor:"#ddd",
        borderRadius:20,
        fontSize:20,
        fontFamily:"molgen",
        marginHorizontal:30
    },
    label:{
        marginHorizontal:35,
        paddingVertical:10,
        fontSize:30,
        fontFamily:"molgen"
    },
    error:{
        color:"#ff0000",
        padding:5,
        marginHorizontal:35
    }
})

export default Input