import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { AppButton } from "../Button/Button";
import { TopBar } from "../TopBar/TopBar";
import { LinearGradient } from "expo-linear-gradient";
import { Movie } from "../../types/Movie";
import { setting } from "../../setting";
import { observer } from "mobx-react";
import { categoryStore } from "../../store/categoryStore";

export const Banner = observer(({ data }: { data?: Movie }) => {
  return (
    <View>
      <ImageBackground
        style={styles.banner}
        source={{
          uri: `${setting.REACT_APP_IMG_URL_ORIGINAL}${data?.backdrop_path}`,
        }}
        resizeMode={"cover"}
      >
        <TopBar />
        <View style={styles.info}>
          <LinearGradient
            style={styles.bgGradient}
            colors={["transparent", "rgba(0,0,0,1)"]}
          >
            <Text style={[styles.text, styles.title]}>{data?.title}</Text>
            <Text style={styles.text}>
              {categoryStore.generateCateList(
                data?.genre_ids.slice(0, 3) || []
              )}
              {data && data?.genre_ids.length > 3 && ",..."}
            </Text>
            <View
              style={{
                alignSelf: "flex-start",
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <AppButton
                icon="play-circle"
                title={"Play"}
                onPress={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <AppButton
                secondary
                icon="add-outline"
                title={"My List"}
                onPress={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
});

const styles = StyleSheet.create({
  banner: {
    height: 400,
  },
  text: {
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  bgGradient: {
    padding: 20,
  },
});
