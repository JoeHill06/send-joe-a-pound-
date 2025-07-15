import { View, Text, StyleSheet, Platform } from "react-native";

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
    width: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? "90%" : "48%",
    backgroundColor: "#f8f9fa",
    padding: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 20,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: "center",
    marginHorizontal: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 5 : 0,
  },
  serviceIcon: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 28 : 32,
    marginBottom: 12,
  },
  serviceTitle: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 18,
    fontWeight: "700",
    color: "#212529",
    marginBottom: 8,
  },
  serviceDesc: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 12 : 14,
    color: "#6c757d",
    textAlign: "center",
    lineHeight: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 20,
  },
});