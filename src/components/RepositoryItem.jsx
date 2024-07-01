import { Text, View, Image, StyleSheet } from "react-native"


const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white'
  },
  image: {
    width: 50,
    height: 50,
  },
  flexItems: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})



const RepositoryItem = ({repository}) => {
    return (
        <View style={styles.container}>
          <View style={styles.flexItems}>
          <Image style={styles.image} source={{ uri: repository.ownerAvatarUrl }} />
          <Text >{repository.fullName}</Text>
          <Text>{repository.description}</Text>
          <Text>{repository.language}</Text>

          </View>
          <View style={styles.flexItems}>
          <Text>Stars: {repository.stargazersCount}</Text>
          <Text>Forks: {repository.forksCount}</Text>
          <Text>Reviews: {repository.reviewCount}</Text>
          <Text>Rating: {repository.ratingAverage}</Text>

          </View>
        </View>
      );
   
}

export default RepositoryItem