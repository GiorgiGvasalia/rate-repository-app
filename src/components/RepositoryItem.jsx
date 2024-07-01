import { Text, View, Image } from "react-native"



const RepositoryItem = ({repository}) => {
    return (
        <View >
          <Image source={{ uri: repository.ownerAvatarUrl }} />
          <Text >{repository.fullName}</Text>
          <Text>{repository.description}</Text>
          <Text>{repository.language}</Text>
          <Text>Stars: {repository.stargazersCount}</Text>
          <Text>Forks: {repository.forksCount}</Text>
          <Text>Reviews: {repository.reviewCount}</Text>
          <Text>Rating: {repository.ratingAverage}</Text>
        </View>
      );
   
}

export default RepositoryItem