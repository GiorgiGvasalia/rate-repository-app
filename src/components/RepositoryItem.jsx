import { Text, View, Image, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 25,
  },
  image: {
    width: 50,
    height: 50,
  },
  flexItems: {
    flexDirection: "row",
  },
  userName: {
    fontWeight: theme.fontWeights.bold,
  },
  paddings: {
    paddingLeft: theme.paddings.upperDescriptionPadding,
  },
});

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexItems}>
        <Image
          style={styles.image}
          source={{ uri: repository.ownerAvatarUrl }}
        />
        <View style={styles.paddings}>
          <Text style={styles.userName}>{repository.fullName}</Text>
          <Text>{repository.description}</Text>
          <Text>{repository.language}</Text>
        </View>
      </View>
      <View style={styles.flexItems}>
        <Text>Stars: {repository.stargazersCount}</Text>
        <Text>Forks: {repository.forksCount}</Text>
        <Text>Reviews: {repository.reviewCount}</Text>
        <Text>Rating: {repository.ratingAverage}</Text>
      </View>
    </View>
  );
};

export default RepositoryItem;
