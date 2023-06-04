import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../utils/fonts";

const NetworkCard = ({ item, active }) => {
  const { name, color } = item;

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      borderRadius: 4,
      padding: 4,
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: active ? "#F4B048" : COLORS.whiteGrey,
    },
    text: {
      color: COLORS.black,
      fontSize: 14,
      textTransform: "uppercase",
    },
    circle: {
      height: 30,
      width: 30,
      backgroundColor: color,
      borderRadius: 15,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.circle}></View>
    </View>
  );
};

export default NetworkCard;
