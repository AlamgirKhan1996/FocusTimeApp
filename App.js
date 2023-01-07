import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import { colors } from "./src/utils/colors";
import { Focus } from "./src/features/Focus";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <Focus />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
  },
});
