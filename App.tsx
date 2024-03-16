import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <StatusBar style="light" />
      <Text className="text-xl text-white font-bold">
        React Native + TS + Tailwind
      </Text>
    </View>
  );
}
