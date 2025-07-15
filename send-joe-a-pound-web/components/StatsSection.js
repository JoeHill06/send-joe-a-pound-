import { View, Text, StyleSheet, Platform } from "react-native";

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
    marginBottom: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 20,
    width: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? "100%" : "45%",
    paddingHorizontal: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 0,
  },
  statNumber: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 28 : 36,
    fontWeight: "900",
    color: "#ff6b35",
    marginBottom: 8,
  },
  statLabel: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 12 : 14,
    color: "#adb5bd",
    textAlign: "center",
    lineHeight: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 18,
  },
});