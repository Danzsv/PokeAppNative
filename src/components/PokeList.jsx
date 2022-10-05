import React from "react";
import { View, Text, FlatList } from "react-native";
import pokes from "../data/pokes.js";
import PokeItem from "./PokeItem.jsx";

const PokeList = () => {
  return (
    <FlatList
      data={pokes}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: poke }) => <PokeItem key={poke._id} {...poke} />}
    ></FlatList>
  );
};

export default PokeList;
