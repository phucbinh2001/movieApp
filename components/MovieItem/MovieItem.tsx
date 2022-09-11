import React from "react";
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Movie } from "../../types/Movie";

export const MovieItem = ({ movie }: { movie: Movie }) => {
  return (
    <TouchableOpacity>
      <View>
        <ImageBackground
          imageStyle={{ resizeMode: "contain" }}
          style={styles.movieItem}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
          }}
        >
          <Text style={styles.badge}>{movie.vote_average.toFixed(1)}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  movieItem: {
    aspectRatio: 2 / 3,
    width: 150,
    borderRadius: 10,
    overflow: "hidden",
    marginLeft: 20,
  },
  badge: {
    backgroundColor: "#e21221",
    alignSelf: "flex-start",
    textAlign: "center",
    borderRadius: 7,
    overflow: "hidden",
    marginTop: 10,
    marginLeft: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: "#fff",
    fontSize: 11,
  },
});
