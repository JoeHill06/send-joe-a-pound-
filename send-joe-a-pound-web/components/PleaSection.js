import { View, Text, StyleSheet, Platform } from "react-native";
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
      
      <DonationButton text=" SEND JOE A POUND " backgroundColor="#ff6b35" marginTop={30} />
      
      <Text style={styles.gratitude}>{gratitudeText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pleaSection: {
    backgroundColor: "#fff3cd",
    padding: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 400 ? 12 : (Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 40),
    marginTop: 2,
    alignItems: "center",
  },
  pleaTitle: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 400 ? 20 : (Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 24 : 32),
    fontWeight: "800",
    color: "#212529",
    marginBottom: 20,
    textAlign: "center",
  },
  pleaText: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 400 ? 12 : (Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 14 : 16),
    color: "#495057",
    lineHeight: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 400 ? 18 : (Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 24),
    textAlign: "center",
    marginBottom: 15,
  },
  pleaSubtext: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 400 ? 10 : (Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 12 : 14),
    color: "#6c757d",
    textAlign: "center",
    marginBottom: 30,
  },
  gratitude: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 400 ? 10 : (Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 12 : 14),
    color: "#6c757d",
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 400 ? 14 : (Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 20),
  },
});