import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import AuthLayout from "../components/AuthLayout"
import Input from "../components/Input"


const Login = () => {
  return (
    <AuthLayout title="Login">
      <View>
        <Input />
        <Pressable style={style.submitBtn}>
          <Text style={style.btnText}>Submit</Text>
        </Pressable>
      </View>
    </AuthLayout>
  )
}


const style = StyleSheet.create({
  submitBtn:{
    padding:20,
    backgroundColor:"rgb(28, 30, 35)",
    borderRadius:20,
    fontSize:20,
    fontFamily:"molgen",
    marginHorizontal:30,
    marginVertical:25
  },
  btnText:{
    textAlign:"center",
    fontSize:18,
  }
})

export default Login