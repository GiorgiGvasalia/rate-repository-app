import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes } from "react-router-native";
import SignIn from "./SignIn";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
    width: "100%",
  },
});

const Main = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />}></Route>

        <Route
          style={styles.signInView}
          path="/signin"
          element={<SignIn />}
        ></Route>
      </Routes>
      {signedIn && <RepositoryList />}
    </View>
  );
};

export default Main;
