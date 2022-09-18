import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons2 from "react-native-vector-icons/SimpleLineIcons";
import { Movie } from "../../types/Movie";
import { BlurView } from "expo-blur";

export const CategoryHeader = ({
  title,
  onGoBack,
}: {
  title: string;
  onGoBack: () => void;
}) => {
  return (
    <BlurView intensity={100} style={[styles.topBarWrapper, styles.blur]}>
      <View style={styles.space}>
        <TouchableOpacity onPress={onGoBack} style={{ padding: 15 }}>
          <MaterialCommunityIcons2 size={25} name="arrow-left" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <MaterialCommunityIcons size={30} name="search-outline" />
    </BlurView>
  );
};

const styles = StyleSheet.create({
  topBarWrapper: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 0,
    paddingRight: 10,
    marginTop: 50,
    alignItems: "center",
    height: 60,
    opacity: 1,
    top: -2,
    width: "100%",
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  space: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  blur: {
    backgroundColor: "rgba(255,255,255,0.7)",
  },
});
