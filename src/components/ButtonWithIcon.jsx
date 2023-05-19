import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Pressable,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { COLORS, FONTS } from "../utils/fonts";
import { useTheme } from "@react-navigation/native";

const ButtonWithIcon = ({
  text,
  fontSize,
  bg,
  backgroundColor,
  handlePress,
  textColor,
  disabled,
  icon,
  borderStyle,
  ...rest
}) => {
  const { colors } = useTheme();
  return (
    <TouchableHighlight>
      <View style={styles.googleButton}>
        {/* <TouchableOpacity
        onPress={handlePress}
        {...rest}
        disabled={disabled}
        style={[
          styles.container,
          { backgroundColor, borderColor: borderStyle },
        ]}
      > */}
        {icon && <FontAwesome5 name={icon} size={28} />}
        <Text style={[styles.text]}>{text}</Text>
        {/* </TouchableOpacity> */}
      </View>
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
    borderColor: COLORS.grey,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,

    // backgroundColor: "#f00",
    height: 55,
    gap: 10,
    borderColor: "#333",
  },
  text: {
    fontSize: 19,
    color: COLORS.black,
    lineHeight: 44,
    fontFamily: FONTS.MulishBold,
  },
});
export default ButtonWithIcon;
