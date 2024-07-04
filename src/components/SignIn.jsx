import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import theme from "../theme";
import * as yup from "yup";

const styles = StyleSheet.create({
  signInView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 40,
  },

  container: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

  signInBtn: {
    padding: theme.signInBtn.padding,
    backgroundColor: theme.signInBtn.bgColor,
    color: theme.signInBtn.color,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  input: {
    borderWidth: 1,
    borderColor: "blue",
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
    width: "90%",
  },
  formErrors: {
    borderColor: theme.formErrors.borderColor,
    color: theme.formErrors.color,
  },
});

const initialValues = {
  username: "",
  password: "",
};

// validation schema

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "At least 5 characters required")
    .required("Username is required"),

  password: yup
    .string()
    .min(6, "Your password must contain at least 6 characters")
    .required("Password is required"),
});

const SignIn = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.signInView}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="user name"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={styles.formErrors}>{formik.errors.username}</Text>
        )}

        <TextInput
          style={styles.input}
          placeholder="password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          secureTextEntry
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.formErrors}>{formik.errors.password}</Text>
        )}

        <Pressable style={styles.signInBtn} onPress={formik.handleSubmit}>
          <Text style={{ color: theme.signInBtn.color }}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
