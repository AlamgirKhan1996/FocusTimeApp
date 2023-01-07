import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { TextInput } from "react-native-paper";

export const Focus = () => (
  <>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput style={{ paddingRight: "100%", marginTop: 20 }} />
      </View>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
