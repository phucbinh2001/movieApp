import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Home } from "../screens/Home";
import { Explore } from "../screens/Explore";

const screens = {
  Home: {
    screen: Home,
  },
  Explore: {
    screen: Explore,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
