import { View, Text, StyleSheet } from "react-native";

export default function SmallTile({ title, content, backgroundColor = "#fff5f5", icon }) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        {icon && <Text style={styles.icon}>{icon}</Text>}
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 5,
    borderRadius: 12,
    minHeight: 100,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    fontSize: 20,
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    flex: 1,
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
    color: "#555",
  },
});