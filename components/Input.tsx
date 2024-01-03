import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { Component } from "react";

const Input = ({label, error, placeholder, id, type, onInput, defaultValue}:{label:string, error?:string, placeholder?:string, id?:string, type?:any, onInput?:any, defaultValue?:string}) => {
  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <TextInput onChangeText={onInput} defaultValue={defaultValue} style={style.input} keyboardType={type} placeholder={placeholder} id={id} />
      <Text style={style.error}>{error || ""}</Text>
    </View>
  );
};

const style = StyleSheet.create({
    container:{
        paddingVertical:4,
    },
  input: {
    padding: 20,
    backgroundColor: "#eee",
    borderRadius: 20,
    fontSize: 18,
    fontFamily: "Titillium_Regular",
    marginHorizontal: 20,
  },
  label: {
    marginHorizontal: 30,
    paddingBottom: 4,
    fontSize: 22,
    fontFamily: "Titillium_Bold",
  },
  error: {
    color: "#ff0000",
    padding: 5,
    marginHorizontal: 35,
  },
});

export default Input;
