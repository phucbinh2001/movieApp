import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { BottomTabs } from "./components/TabNavigation/TabNavigation";
import { categoryStore } from "./store/categoryStore";

export default function App() {
  React.useEffect(() => {
    categoryStore.getCategory();
  }, []);

  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
