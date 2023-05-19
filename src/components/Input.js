import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { COLORS, FONTS } from "../utils/fonts";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useField } from "formik";
const Input = ({
  value,
  type,
  placeholder,
  placeholderColor,
  onchange,
  password,
  eye,
  onEyeIconClick,
  name,
  ...rest
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FontAwesome5 name={name} size={20} color={COLORS.grey} />
      <TextInput
        value={value}
        // onChangeText={() => onchange()}
        placeholder={placeholder}
        {...rest}
        cursorColor="#822E6F"
        autoComplete="off"
        keyboardType={type}
        secureTextEntry={type === "password" ? !eye : false}
        placeholderTextColor={placeholderColor}
        style={styles.input}
      />
      {password && (
        <FontAwesome5
          name={eye ? "eye" : "eye-slash"}
          size={20}
          onPress={onEyeIconClick}
        />
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D1D8E9",
    flexWrap: "nowrap",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: COLORS.yellow,
  },
  input: {
    flex: 1,
    // height: 50,
    paddingHorizontal: 13,
    color: COLORS.grey,
    fontSize: 18,
    fontFamily: FONTS.Mulish,
  },
});

export default Input;

Input.defaultProps = {
  placeholderTextColor: COLORS.grey,
  password: false,
  eye: false,
};
