import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
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
      <View
        style={[
          styles.googleButton,
          {
            backgroundColor: backgroundColor ? backgroundColor : "#fff",
          },
        ]}
      >
        {icon && (
          <FontAwesome5
            name={icon}
            size={28}
            style={{
              color: backgroundColor === "#fff" ? COLORS.black : "#fff",
            }}
          />
        )}
        <Text
          style={[
            styles.text,
            { color: backgroundColor === "#fff" ? COLORS.black : "#fff" },
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: 55,
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
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 4,

    // height: 55,
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
