import { Platform } from "react-native";
import { useTheme } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PlusCircle, SoccerBall } from "phosphor-react-native";

import { Polls } from "../screens/Polls";
import { NewPoll } from "../screens/NewPoll";
import { FindPoll } from "../screens/FindPoll";
import { PollDetails } from "../screens/PollDetails";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const { colors, sizes } = useTheme();

  const iconSize = sizes[6];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.yellow[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarStyle: {
          position: "absolute",
          height: sizes[22],
          borderTopWidth: 0,
          backgroundColor: colors.gray[800],
        },
        tabBarItemStyle: {
          position: "relative",
          top: Platform.OS === "android" ? -10 : 0,
        },
        tabBarLabelPosition: "beside-icon",
      }}
    >
      <Screen
        name="NewPoll"
        component={NewPoll}
        options={{
          tabBarIcon: ({ color }) => (
            <PlusCircle color={color} size={iconSize} />
          ),
          tabBarLabel: "Novo Bolão",
        }}
      />

      <Screen
        name="Polls"
        component={Polls}
        options={{
          tabBarIcon: ({ color }) => (
            <SoccerBall color={color} size={iconSize} />
          ),
          tabBarLabel: "Meus bolões",
        }}
      />

      <Screen
        name="FindPoll"
        component={FindPoll}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="PollDetails"
        component={PollDetails}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
