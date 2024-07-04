import React from "react";
import { Pressable, Text } from "react-native";
import { View } from "react-native";
import { useFormik } from "formik";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  border: theme.borders.border,
});

const initialValues = {
  username: "",
  password: "",
};

const SignIn = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <View>
      <TextInput
        style={styles.border}
        placeholder="user name"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      ></TextInput>
      <TextInput
        placeholder="password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      ></TextInput>
      <Pressable onPress={formik.handleSubmit}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
