import { View, Text, StyleSheet } from "react-native";

export default function Service({ icon, title, description }) {
  return (
    <View style={styles.serviceCard}>
      <Text style={styles.serviceIcon}>{icon}</Text>
      <Text style={styles.serviceTitle}>{title}</Text>
      <Text style={styles.serviceDesc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  serviceCard: {
    width: "48%",
    backgroundColor: "#f8f9fa",
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: "center",
  },
  serviceIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#212529",
    marginBottom: 8,
  },
  serviceDesc: {
    fontSize: 14,
    color: "#6c757d",
    textAlign: "center",
    lineHeight: 20,
  },
});