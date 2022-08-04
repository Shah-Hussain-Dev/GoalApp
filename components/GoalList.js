import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Octicons } from "@expo/vector-icons";
const GoalList = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.goalList}>
        <Text style={styles.goalListItems}>{props.title}</Text>
        <Octicons
          onPress={props.onDelete.bind(this, props.id)}
          name="trash"
          size={24}
          color="black"
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  goalList: {
    backgroundColor: "#FFF80A",
    elevation: 8,
    padding: 20,
    borderRadius: 10,
    elevation: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
    cursor: "pointer",
  },
  goalListItems: {
    color: "black",
    fontSize: 20,
    fontWeight: "800",
  },
});

export default GoalList;
