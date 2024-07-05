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
  languages: {
    backgroundColor: '#0366d6',
    color: '#fff',
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 5
  }
});

const RepositoryItem = ({ repository }) => {
  // if count > 999 it will be displayed in 'k'(thousand)
  const checkCounts = (count) => {
    if (count >= 1000) {
      const roundedCount = (count / 1000).toFixed(1); 
      return roundedCount + "k";
    } else {
      return count.toString(); 
    }
  };
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
          <Text style={styles.languages}>{repository.language}</Text>
        </View>
      </View>
      <View style={styles.flexItems}>
        <Text>Stars: {checkCounts(repository.stargazersCount)}</Text>
        <Text>Forks: {checkCounts(repository.forksCount)}</Text>
        <Text>Reviews: {checkCounts(repository.reviewCount)}</Text>
        <Text>Rating: {repository.ratingAverage}</Text>
      </View>
    </View>
  );
};

export default RepositoryItem;
