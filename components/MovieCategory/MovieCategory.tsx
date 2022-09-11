import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Movie } from "../../types/Movie";
import { MovieItem } from "../MovieItem/MovieItem";

export const MovieCategory = ({
  data,
  title,
}: {
  data?: Movie[];
  title: string;
}) => {
  return (
    <>
      <View
        style={[
          { marginTop: 10 },
          { flexDirection: "row", justifyContent: "space-between" },
          styles.padding,
          styles.heading,
        ]}
      >
        <Text style={{ fontSize: 20, fontWeight: "600" }}>{title}</Text>
        <TouchableOpacity>
          <Text style={{ color: "#e21221" }}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
      >
        {data?.map((movie) => (
          <MovieItem movie={movie} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 20,
  },
  heading: {
    height: 50,
    alignItems: "center",
  },
});
