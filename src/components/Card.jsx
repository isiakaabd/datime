import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Card Title</Text>
      <Text style={styles.content}>Card content goes here...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
  },
});

export default Card;
