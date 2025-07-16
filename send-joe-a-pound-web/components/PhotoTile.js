import React from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";

export default function PhotoTile({ name, description, imageSource, backgroundColor = "#f0fff0", style, isHeroPhoto = false }) {
  if (Platform.OS === 'web' && isHeroPhoto) {
    return (
      <>
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-photo-container {
              align-self: center;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 180px;
              height: 180px;
              border-radius: 50%;
              overflow: hidden;
            }
            
            .hero-photo-image {
              width: 180px;
              height: 180px;
              border-radius: 90px;
              object-fit: cover;
              border: 3px solid #ff6b35;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            
            .hero-photo-image:hover {
              transform: scale(1.05);
              box-shadow: 0 6px 20px rgba(255, 107, 53, 0.3);
            }
            
            .hero-photo-placeholder {
              width: 180px;
              height: 180px;
              border-radius: 90px;
              background-color: #e9ecef;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              border: 3px dashed #ff6b35;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }
            
            .hero-photo-placeholder-text {
              font-size: 36px;
              margin-bottom: 5px;
            }
            
            .hero-photo-placeholder-subtext {
              font-size: 14px;
              color: #6c757d;
              text-align: center;
            }
            
            @media (max-width: 768px) {
              .hero-photo-container {
                width: 120px !important;
                height: 120px !important;
                margin: 0 auto !important;
                align-self: center !important;
              }
              
              .hero-photo-image {
                width: 120px !important;
                height: 120px !important;
                border-radius: 60px !important;
                border: 3px solid #ff6b35 !important;
                box-shadow: 0 8px 20px rgba(255, 107, 53, 0.25) !important;
                transform: none !important;
              }
              
              .hero-photo-image:hover {
                transform: none !important;
                box-shadow: 0 8px 20px rgba(255, 107, 53, 0.25) !important;
              }
              
              .hero-photo-placeholder {
                width: 120px !important;
                height: 120px !important;
                border-radius: 60px !important;
                border: 2px dashed #ff6b35 !important;
                box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2) !important;
              }
              
              .hero-photo-placeholder-text {
                font-size: 28px !important;
              }
              
              .hero-photo-placeholder-subtext {
                font-size: 10px !important;
              }
            }
            
            @media (max-width: 400px) {
              .hero-photo-container {
                width: 100px !important;
                height: 100px !important;
                margin: 0 auto !important;
                align-self: center !important;
              }
              
              .hero-photo-image {
                width: 100px !important;
                height: 100px !important;
                border-radius: 50px !important;
                border: 3px solid #ff6b35 !important;
                box-shadow: 0 10px 25px rgba(255, 107, 53, 0.35) !important;
                transform: none !important;
              }
              
              .hero-photo-image:hover {
                transform: none !important;
                box-shadow: 0 10px 25px rgba(255, 107, 53, 0.35) !important;
              }
              
              .hero-photo-placeholder {
                width: 100px !important;
                height: 100px !important;
                border-radius: 50px !important;
                border: 2px dashed #ff6b35 !important;
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25) !important;
              }
              
              .hero-photo-placeholder-text {
                font-size: 24px !important;
              }
              
              .hero-photo-placeholder-subtext {
                font-size: 8px !important;
              }
            }
          `
        }} />
        <div className="hero-photo-container">
          {imageSource ? (
            <img 
              src={imageSource.default || imageSource.uri || imageSource}
              className="hero-photo-image"
              style={{
                border: '3px solid #ff6b35',
                borderRadius: '50%',
                width: '180px',
                height: '180px',
                objectFit: 'cover'
              }}
              alt="Profile" 
            />
          ) : (
            <div className="hero-photo-placeholder">
              <div className="hero-photo-placeholder-text">📸</div>
              <div className="hero-photo-placeholder-subtext">Your photo here</div>
            </div>
          )}
        </div>
      </>
    );
  }

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
  // Hero-specific styles (for native)
  heroImageContainer: {
    alignSelf: "center",
  },
  heroImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  heroPlaceholderImage: {
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
  heroPlaceholderText: {
    fontSize: 32,
  },
  heroPlaceholderSubtext: {
    fontSize: 12,
    color: "#6c757d",
    textAlign: "center",
    marginTop: 5,
  },
});