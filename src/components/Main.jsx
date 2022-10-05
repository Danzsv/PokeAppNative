import React from "react";
import Constants from "expo-constants";
import { Text, View } from "react-native";
import PokeList from "./PokeList.jsx";

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text>Welcome to the 1rst generation! uwu</Text>
      <PokeList />
    </View>
  );
};

export default Main;
