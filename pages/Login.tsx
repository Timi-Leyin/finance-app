import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import login from "../actions/login";
import { useState } from "react";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("")
  return (
    <AuthLayout title="Login">
      <View>
        <Input
          onInput={(text: string) =>
            setLoginDetails({
              ...loginDetails,
              email: text,
            })
          }
          label={"Email"}
          placeholder="@originalTimi"
        />
        <Input
          onInput={(text: string) =>
            setLoginDetails({
              ...loginDetails,
              password: text,
            })
          }
          label={"password"}
          placeholder="******"
          type={"visible-password"}
        />
        {/* <Text style={style.Qtext}>
          Forgotten Password?
        </Text> */}
        <Pressable onPress={() => login(loginDetails, (err:any, data:any)=>{
          if(err){
            return setError(err.AxiosError)
          }

          setError("");
          console.log(data.data)
          
        })} style={style.submitBtn}>
          <Text style={style.btnText}>Submit</Text>
        </Pressable>

        {/* <Text style={style.Qtext}>
          Already a user ? Login
        </Text> */}
      </View>
    </AuthLayout>
  );
};

const style = StyleSheet.create({
  submitBtn: {
    padding: 20,
    backgroundColor: "rgb(28, 30, 35)",
    borderRadius: 20,
    fontSize: 20,
    fontFamily: "Titillium_Regular",
    marginHorizontal: 30,
    marginVertical: 25,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Titillium_Bold",
    fontSize: 18,
  },
  Qtext: {
    paddingHorizontal: 30,
    fontFamily: "Titillium_Regular",
    fontSize: 18,
  },
});

export default Login;
