import { View, Text, StyleSheet, Platform } from "react-native";
import DonationButton from "./DonationButton";
import PhotoTile from "./PhotoTile";

export default function HeroSection({ 
  greeting = "Hello! I'm", 
  name = "Joe Hill", 
  subtitle, 
  description
}) {
  return (
    <View style={styles.hero}>
      <View style={styles.heroContent}>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.description}>{description}</Text>
        
        <DonationButton text="SEND £1" backgroundColor="#ff6b35" marginTop={30} />
      </View>
      
      {/* Photo Tile */}
      <View style={styles.heroShape}>
        <PhotoTile 
          name=""
          description=""
          imageSource={require("../assets/images/profile_image.png")}
          backgroundColor="transparent"
          isHeroPhoto={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: "#ffffff",
    paddingHorizontal: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 20,
    paddingVertical: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 30 : 60,
    flexDirection: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? "column" : "row",
    alignItems: "center",
    minHeight: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 400 : 500,
  },
  heroContent: {
    flex: 1,
    paddingRight: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 20,
    alignItems: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? "center" : "flex-start",
    textAlign: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? "center" : "left",
  },
  greeting: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 18,
    color: "#6c757d",
    marginBottom: 5,
    textAlign: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? "center" : "left",
  },
  name: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 32 : 48,
    fontWeight: "900",
    color: "#212529",
    marginBottom: 10,
    lineHeight: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 36 : 52,
    textAlign: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? "center" : "left",
  },
  subtitle: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 18 : 20,
    color: "#495057",
    marginBottom: 20,
    lineHeight: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 22 : 26,
    textAlign: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? "center" : "left",
  },
  description: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 14 : 16,
    color: "#6c757d",
    lineHeight: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 24,
    marginBottom: 30,
    textAlign: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? "center" : "left",
  },
  heroShape: {
    width: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 200,
    height: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 200,
    position: "relative",
    marginTop: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 0,
  },
});