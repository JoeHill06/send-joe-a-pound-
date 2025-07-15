import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PleaSection({ 
  title = "The Plea", 
  mainText, 
  subText, 
  buttonText = "💰 SEND JOE A POUND 💰",
  gratitudeText,
  onButtonPress 
}) {
  return (
    <View style={styles.pleaSection}>
      <Text style={styles.pleaTitle}>{title}</Text>
      <Text style={styles.pleaText}>{mainText}</Text>
      <Text style={styles.pleaSubtext}>{subText}</Text>
      
      <TouchableOpacity style={styles.donateButton} onPress={onButtonPress}>
        <Text style={styles.donateButtonText}>{buttonText}</Text>
      </TouchableOpacity>
      
      <Text style={styles.gratitude}>{gratitudeText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pleaSection: {
    backgroundColor: "#fff3cd",
    padding: 40,
    marginTop: 2,
    alignItems: "center",
  },
  pleaTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#212529",
    marginBottom: 20,
    textAlign: "center",
  },
  pleaText: {
    fontSize: 16,
    color: "#495057",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 15,
  },
  pleaSubtext: {
    fontSize: 14,
    color: "#6c757d",
    textAlign: "center",
    marginBottom: 30,
  },
  donateButton: {
    backgroundColor: "#ff6b35",
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 30,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  donateButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
  },
  gratitude: {
    fontSize: 14,
    color: "#6c757d",
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: 20,
  },
});