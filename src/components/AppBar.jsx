import { View, StyleSheet, Text, Pressable, Alert } from "react-native";
import theme from "../theme";
import { Link } from "react-router-native";
import { ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.bgColors.appBarBg,
    padding: theme.paddings.barPadding,
    paddingBottom: theme.paddings.paddingBtm,
  },
  text: {
    color: theme.colors.appBarTxtColor,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      {/* ... */}
      <ScrollView horizontal>
        <Pressable onPress={() => Alert.alert("pressed")}>
          <Link to="/">
            <Text style={styles.text}>Repositories</Text>
          </Link>
        </Pressable>

        <Link style={{ marginLeft: 10 }} to="/signin">
          <Text style={styles.text}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
