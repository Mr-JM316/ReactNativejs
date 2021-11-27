import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import TextScreen from "./src/screens/TextScreen";
import PasswordScreen from "./src/screens/PasswordScreen";
import ChatScreen from "./src/screens/TestChatScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Text: TextScreen,
    Passw: PasswordScreen,
    Cht: ChatScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'ASOFT Enterprises',
    },
  }
);

export default createAppContainer(navigator);
