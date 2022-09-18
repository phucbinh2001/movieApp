import React from "react";
import { Button, SafeAreaView, StyleSheet, View, Text } from "react-native";
import "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import { MovieItem } from "../../../components/MovieItem/MovieItem";
import { Movie } from "../../../types/Movie";

export const CategoryDetail = ({ navigation, route }) => {
  const { movies }: { movies: Movie[] } = route.params;
  return (
    <SafeAreaView>
      <ScrollView style={{ paddingTop: 80, paddingBottom: 0 }}>
        <View style={styles.container}>
          {movies.map((item) => (
            <View key={item.id} style={styles.wrapper}>
              <MovieItem movie={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  wrapper: {
    width: "50%",
    // flex: 2,
    padding: 5,
  },
  container: {
    paddingHorizontal: 10,
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingBottom: 100,
  },
});
