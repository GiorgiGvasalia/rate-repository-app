import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import theme from "../theme";

const styles = StyleSheet.create({
  signInView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 40,
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
    marginBottom: 12,
    borderRadius: 4,
    width: "90%",
  },
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
    <View style={styles.signInView}>
      <TextInput
        style={styles.input}
        placeholder="user name"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
      />
      <Pressable style={styles.signInBtn} onPress={formik.handleSubmit}>
        <Text style={{ color: theme.signInBtn.color }}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
