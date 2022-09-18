import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Button, ScrollView, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { CategoryDetail } from "./stacks/CategoryDetail";
import { Home } from "./screens/Home";
import { CategoryHeader } from "../../share/Header/CategoryHeader";

const Stack = createStackNavigator();

export const HomeScreen = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
        }}
      >
        <Stack.Screen
          name="HomePage"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={{
            header: ({ route, navigation }) => {
              const { params } = route;
              return (
                <CategoryHeader
                  //@ts-ignore
                  title={params?.title || ""}
                  onGoBack={() => navigation.goBack()}
                />
              );
            },
          }}
          name="CategoryDetail"
          component={CategoryDetail}
        />
      </Stack.Navigator>
    </>
  );
};
