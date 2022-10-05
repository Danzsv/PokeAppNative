import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "../styles/StyledText";

const PokeItem = (props) => (
  <View key={props._id} style={styles.container}>
    <StyledText color="primary" fontWeight="bold" fontSize="subheading">
      Name: {props.name}
    </StyledText>
    <StyledText color="primary">Id: {props.pokedexId}</StyledText>
    <StyledText>Types: </StyledText>
    {props.types.map((type) => (
      <StyledText>{type.name}</StyledText>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  blue: {
    color: "#09f",
    fontWeight: "bold",
    marginBottom: 1,
  },
});

export default PokeItem;
