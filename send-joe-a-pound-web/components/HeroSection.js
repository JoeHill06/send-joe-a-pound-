import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HeroSection({ 
  greeting = "Hello! I'm", 
  name = "Joe Hill", 
  subtitle, 
  description, 
  buttonText = "SEND £1",
  onButtonPress 
}) {
  return (
    <View style={styles.hero}>
      <View style={styles.heroContent}>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.description}>{description}</Text>
        
        <TouchableOpacity style={styles.primaryButton} onPress={onButtonPress}>
          <Text style={styles.primaryButtonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
      
      {/* Geometric Shape */}
      <View style={styles.heroShape}>
        <View style={styles.photoPlaceholder}>
          <Text style={styles.photoPlaceholderText}>📸</Text>
          <Text style={styles.photoPlaceholderSubtext}>Your photo here</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 60,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 500,
  },
  heroContent: {
    flex: 1,
    paddingRight: 20,
  },
  greeting: {
    fontSize: 18,
    color: "#6c757d",
    marginBottom: 5,
  },
  name: {
    fontSize: 48,
    fontWeight: "900",
    color: "#212529",
    marginBottom: 10,
    lineHeight: 52,
  },
  subtitle: {
    fontSize: 20,
    color: "#495057",
    marginBottom: 20,
    lineHeight: 26,
  },
  description: {
    fontSize: 16,
    color: "#6c757d",
    lineHeight: 24,
    marginBottom: 30,
  },
  primaryButton: {
    backgroundColor: "#ff6b35",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  heroShape: {
    width: 200,
    height: 200,
    position: "relative",
  },
  photoPlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#e9ecef",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#ff6b35",
    borderStyle: "dashed",
  },
  photoPlaceholderText: {
    fontSize: 32,
  },
  photoPlaceholderSubtext: {
    fontSize: 12,
    color: "#6c757d",
    textAlign: "center",
    marginTop: 5,
  },
});