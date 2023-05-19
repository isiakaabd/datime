import { StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import images from "../assets";
import { COLORS, FONTS } from "../utils/fonts";
import { useTheme } from "@react-navigation/native";
import { Formik, Form } from "formik";
import { Input, Button, ButtonWithIcon } from "../components";
import * as Yup from "yup";
const Login = ({ navigation }) => {
  const { colors } = useTheme();
  const initialValues = {
    email: "",
    password: "",
    userName: "",
  };
  const submitForm = (values, onSubmitProps) => {
    console.log(values);
    navigation.navigate("Verify");
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid Email")
      .required("Email is required"),

    password: Yup.string()
      .required("Enter your password")
      .min(8, "password too short")
      .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
      .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
      .matches(/^(?=.*[0-9])/, "Must contain at least one number")
      .matches(/^(?=.*[!@#%&])/, "Must contain at least one special character"),
    // .matches()
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // ),
  });
  const [eye, setEye] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  googleButton: {},
  error: {
    color: COLORS.primary,
    fontFamily: FONTS.Mulish,
    fontSize: 12,
    marginTop: 5,
  },
  img2: {
    height: 90,
  },
  textContainer: {
    gap: 10,
  },
});
