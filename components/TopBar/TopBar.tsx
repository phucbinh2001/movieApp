import { BlurView } from "expo-blur";
import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

export const TopBar = () => {
  return (
    <BlurView intensity={0} tint="dark" style={styles.topBarWrapper}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/vi/4/43/CGV_Logo_Global_BI_V9-02.png",
        }}
      />
      <View style={styles.space}>
        <MaterialCommunityIcons
          size={30}
          name="search-outline"
          color="#fff"
          style={{ marginRight: 15 }}
        />
        <MaterialCommunityIcons
          size={30}
          name="notifications-outline"
          color="#fff"
        />
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  topBarWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  logo: {
    height: 40,
    width: 100,
    resizeMode: "contain",
  },
  space: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
