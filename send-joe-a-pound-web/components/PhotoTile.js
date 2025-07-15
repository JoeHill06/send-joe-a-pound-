import { View, Text, StyleSheet, Image, Platform } from "react-native";

export default function PhotoTile({ name, description, imageSource, backgroundColor = "#f0fff0", style, isHeroPhoto = false }) {
  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <View style={isHeroPhoto ? styles.heroImageContainer : styles.imageContainer}>
        {imageSource ? (
          <Image source={imageSource} style={isHeroPhoto ? styles.heroImage : styles.image} />
        ) : (
          <View style={isHeroPhoto ? styles.heroPlaceholderImage : styles.placeholderImage}>
            <Text style={isHeroPhoto ? styles.heroPlaceholderText : styles.placeholderText}>📸</Text>
            <Text style={isHeroPhoto ? styles.heroPlaceholderSubtext : styles.placeholderSubtext}>
              {isHeroPhoto ? "Your photo here" : "Add your photo here!"}
            </Text>
          </View>
        )}
      </View>
      {!isHeroPhoto && (
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 120,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    marginRight: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  placeholderImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ccc",
    borderStyle: "dashed",
  },
  placeholderText: {
    fontSize: 24,
  },
  placeholderSubtext: {
    fontSize: 10,
    color: "#666",
    textAlign: "center",
    marginTop: 2,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: "#555",
  },
  // Hero-specific styles
  heroImageContainer: {
    alignSelf: "center",
  },
  heroImage: {
    width: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 150,
    height: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 150,
    borderRadius: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : 75,
  },
  heroPlaceholderImage: {
    width: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 150,
    height: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 150,
    borderRadius: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : 75,
    backgroundColor: "#e9ecef",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#ff6b35",
    borderStyle: "dashed",
  },
  heroPlaceholderText: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 24 : 32,
  },
  heroPlaceholderSubtext: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 12,
    color: "#6c757d",
    textAlign: "center",
    marginTop: 5,
  },
});