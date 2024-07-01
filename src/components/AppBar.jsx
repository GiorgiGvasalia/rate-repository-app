import { View, StyleSheet, Text, Pressable, Alert } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.bgColors.appBarBg,
    padding: theme.paddings.barPadding,
    paddingBottom: theme.paddings.paddingBtm
     

  },
  text: {
    color: theme.colors.appBarTxtColor,
    fontWeight: theme.fontWeights.bold
  }

});

const AppBar = () => {
  return <View style={styles.container}>{/* ... */}
  <Pressable onPress={() => Alert.alert('pressed')}>

    <Text style={styles.text} >Repositories</Text>
  </Pressable>
  </View>;
};

export default AppBar;