import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import storage from "../config/storage";
import getBalance from "../actions/getBalance";
import axios from "axios";

const Dashboard = ({ navigation }: any) => {
  const [userDetails, setUserDetails] = useState<any>(false);
  const [balance, setBalance] = useState<any>({});
  useEffect(() => {
    // console.log(userDetails)
    storage
      .load({
        key: "login",
      })
      .then((data) => {
        let config = {
          method: 'get',
      maxBodyLength: Infinity,
          url: 'https://vtuapi.honourworld.com/api/v2/data',
          headers: { 
              'Authorization': `Bearer ${data.token}`
          }
      };
        setUserDetails(data.token);
        axios(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
        // console.log(data)
      })
      .catch((err) => {
        console.log(err);
        setUserDetails({});
        navigation.navigate("Login");
      });
  }, []);
  console.log(userDetails);
  return (
    <SafeAreaView style={styles.container}>
      {userDetails ? (
        <View>
          <View style={styles.header}>
            <Text style={styles.introText}>Hi {userDetails.data.firstName} {userDetails.data.lastName},</Text>

            <Pressable style={styles.notificationBtn}>
              {/* <View style={styles.dot}></View> */}
              <FontAwesome size={20} name="user" />
            </Pressable>
          </View>
          {/* <RefreshControl> */}
          {/* balance */}

          <View style={styles.balanceWrapper}>
            <Text style={styles.balanceText}>₦5,600</Text>
            <View style={styles.currencyWrapper}>
              {/* NGN Flag */}
              <Image
                source={require("../assets/images/nigeria.png")}
                style={styles.flag}
              />
              <Text style={styles.currency}>NGN</Text>
            </View>
          </View>

          <Text style={styles.title}>What do you want to do today?</Text>
          {/* dashboard */}

          <View style={styles.cards}>
            <Pressable style={styles.card}>
              <FontAwesome name="money" size={30} />
              <Text style={{ ...styles.title, ...styles.dashboardTitle }}>
                Buy Data
              </Text>
              <Text style={styles.info}>To wallet, bank or mobile number</Text>
            </Pressable>
            <Pressable style={{ ...styles.card, ...styles.card1 }}>
              <FontAwesome name="phone" size={30} />
              <Text style={{ ...styles.title, ...styles.dashboardTitle }}>
                Buy Airtime
              </Text>
              <Text style={styles.info}>To wallet, bank or mobile number</Text>
            </Pressable>
          </View>

          <View style={styles.cards}>
            <Pressable style={{ ...styles.card, ...styles.card2 }}>
              <FontAwesome name="pagelines" size={30} />
              <Text style={{ ...styles.title, ...styles.dashboardTitle }}>
                Pay Subscriptions
              </Text>
              <Text style={styles.info}>To wallet, bank or mobile number</Text>
            </Pressable>
            <Pressable style={{ ...styles.card, ...styles.card3 }}>
              <FontAwesome name="superpowers" size={30} />
              <Text style={{ ...styles.title, ...styles.dashboardTitle }}>
                Pay Biils
              </Text>
              <Text style={styles.info}>To wallet, bank or mobile number</Text>
            </Pressable>
          </View>

          <Text style={styles.title}>Recent Transactions</Text>
          {/* </RefreshControl> */}
        </View>
      ) : (
        <Text>Loading ...</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  introText: {
    fontSize: 40,
    fontFamily: "Titillium_Regular",
  },
  notificationBtn: {
    position: "relative",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,10,200,.2)",
    borderRadius: 100,
  },
  dot: {
    position: "absolute",
    padding: 5,
    backgroundColor: "red",
    borderRadius: 50,
    right: 15,
    top: 15,
    zIndex: 1,
  },

  balanceWrapper: {
    position: "relative",
  },
  balanceText: {
    fontFamily: "Titillium_Bold",
    fontSize: 60,
  },
  currencyWrapper: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  currency: {
    fontFamily: "Titillium_Regular",
    fontSize: 35,
  },
  flag: {
    width: 30,
    height: 30,
  },
  title: {
    fontFamily: "Titillium_Regular",
    fontSize: 25,
    opacity: 0.5,
    paddingVertical: 10,
  },

  cards: {
    flexDirection: "row",
    gap: 20,
    // flexWrap:"wrap",
    marginVertical: 10,
  },

  card: {
    backgroundColor: "rgba(0,10,200,.1)",
    borderRadius: 20,
    width: 200,
    padding: 30,
  },
  card1: {
    backgroundColor: "rgba(200,10,50,.1)",
  },
  card2: {
    backgroundColor: "rgba(4,100,200,.1)",
  },
  card3: {
    backgroundColor: "rgba(60,109,5,.1)",
  },

  dashboardTitle: {
    fontFamily: "Titillium_Bold",
    opacity: 1,
    fontSize: 25,
  },
  info: {
    fontSize: 17,
    fontFamily: "Titillium_Regular",
  },
});

export default Dashboard;
