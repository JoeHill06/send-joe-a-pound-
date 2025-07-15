import { View, Text, StyleSheet } from "react-native";

export default function Stat({ number, label }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statItem: {
    alignItems: "center",
    marginBottom: 20,
    width: "45%",
  },
  statNumber: {
    fontSize: 36,
    fontWeight: "900",
    color: "#ff6b35",
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: "#adb5bd",
    textAlign: "center",
    lineHeight: 18,
  },
});