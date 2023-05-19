import { Text, StyleSheet, TouchableHighlight } from "react-native";
import { FONTS } from "../utils/fonts";
import { useTheme } from "@react-navigation/native";

const Button = ({
  text,
  fontSize,
  bg,
  backgroundColor,
  handlePress,
  textColor,
  disabled,

  ...rest
}) => {
  const { colors } = useTheme();
  return (
    <TouchableHighlight
      onPress={handlePress}
      {...rest}
      disabled={disabled}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={[styles.text]}>{text}</Text>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginTop: 20,
  },
  googleButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 19,
    color: "#fff",
    lineHeight: 44,
    fontFamily: FONTS.MulishBold,
  },
});
export default Button;
