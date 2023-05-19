import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useState } from "react";
import images from "../assets";
import { COLORS, FONTS } from "../utils/fonts";
import { useTheme } from "@react-navigation/native";
import { Formik, Form } from "formik";
import { Input, Button, ButtonWithIcon } from "../components";
import * as Yup from "yup";
const SignUp = ({ navigation }) => {
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
      <ScrollView>
        <View
          style={{
            width: 100,
            height: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={images.logo}
            style={styles.img2}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text
            style={{
              fontFamily: FONTS.MulishSemiBold,
              fontSize: 24,
              color: colors.black,
              marginTop: 20,
            }}
          >
            Sign Up
          </Text>
          <Text
            style={{
              fontFamily: FONTS.MulishSemiBold,
              fontSize: 16,
              color: colors.black,
            }}
          >
            To get started and enjoy our services.
          </Text>
        </View>
        <View>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={submitForm}
          >
            {/* <Form> */}
            {({
              handleBlur,
              isValid,
              values,
              isSubmitting,
              handleSubmit,
              handleChange,
              errors,
            }) => (
              <View style={styles.inputsContainer}>
                <View>
                  <Input
                    placeholder="Choose a Username"
                    value={values.userName}
                    type="text"
                    name={"user"}
                    onChangeText={handleChange("userName")}
                    onBlur={handleBlur("userName")}
                  />
                  {errors.userName && (
                    <Text style={styles.error}>{errors.userName}</Text>
                  )}
                </View>
                <View style={{ marginTop: 5 }}>
                  <Input
                    placeholder="email@here.com"
                    name={"envelope"}
                    value={values.email}
                    type="email"
                    onBlur={handleBlur("email")}
                    onChangeText={handleChange("email")}
                    eye={eye}
                    onEyeIconClick={() => setEye(!eye)}
                  />
                  {errors.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )}
                </View>
                <View style={{ marginTop: 5 }}>
                  <Input
                    placeholder="Password"
                    password
                    name={"lock"}
                    value={values.password}
                    type="password"
                    onBlur={handleBlur("password")}
                    onChangeText={handleChange("password")}
                    eye={eye}
                    onEyeIconClick={() => setEye(!eye)}
                  />
                  {errors.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}
                </View>

                <View style={styles.button}>
                  <Button
                    text="Sign up"
                    backgroundColor={colors.black}
                    handlePress={handleSubmit}
                    disabled={isSubmitting && !isValid}
                  />
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.or}>Or</Text>
                </View>

                <ButtonWithIcon
                  text="Continue with Google"
                  icon={"google"}
                  backgroundColor={"#fff"}
                  borderStyle={"#000"}
                  // border="1px solid black"
                  handlePress={handleSubmit}
                  disabled={isSubmitting && !isValid}
                />
                <View style={{ marginTop: 20 }}>
                  <ButtonWithIcon
                    text="Continue with Apple"
                    icon={"apple"}
                    backgroundColor={"#fff"}
                    borderStyle={"#000"}
                    // border="1px solid black"
                    handlePress={handleSubmit}
                    disabled={isSubmitting && !isValid}
                  />
                </View>

                <View style={{ marginTop: 40, alignItems: "center" }}>
                  <Text style={styles.signIn}>
                    Already have an account?
                    <Text
                      style={{ color: COLORS.green }}
                      onPress={() => navigation.navigate("Login")}
                    >
                      {" "}
                      Sign In
                    </Text>
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  or: {
    marginTop: 40,
    marginBottom: 5,
    fontSize: 18,
    fontFamily: FONTS.MulishBold,
  },
  signIn: {
    fontSize: 20,
    fontFamily: FONTS.Mulish,
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
