import React from "react";
import { Button, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import IconApp from "react-native-vector-icons/Ionicons";

export const AppButton = ({
  onPress,
  title,
  secondary,
  icon,
}: {
  onPress: () => void;
  title: string;
  secondary?: boolean;
  icon?: string;
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={
      secondary ? [styles.secondary, styles.btn] : [styles.primary, styles.btn]
    }
  >
    <View style={styles.space}>
      {icon && (
        <IconApp
          style={{ marginRight: 10 }}
          name={icon}
          size={20}
          color="#fff"
        />
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  primary: {
    elevation: 8,
    backgroundColor: "#e21221",
  },
  secondary: {
    border: "1px solid #fff",
    borderWidth: 2,
    borderColor: "#fff",
  },
  btn: {
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 20,
    minWidth: 100,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  space: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
