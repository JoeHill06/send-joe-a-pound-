import { View, Text, StyleSheet } from "react-native";
import DonationButton from "./DonationButton";

export default function PleaSection({ 
  title = "The Plea", 
  mainText, 
  subText, 
  gratitudeText
}) {
  return (
    <View style={styles.pleaSection}>
      <Text style={styles.pleaTitle}>{title}</Text>
      <Text style={styles.pleaText}>{mainText}</Text>
      <Text style={styles.pleaSubtext}>{subText}</Text>
      
      <DonationButton text="💰 SEND JOE A POUND 💰" backgroundColor="#ff6b35" marginTop={30} />
      
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
  gratitude: {
    fontSize: 14,
    color: "#6c757d",
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: 20,
  },
});