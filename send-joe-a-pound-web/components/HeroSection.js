import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import DonationButton from "./DonationButton";
import PhotoTile from "./PhotoTile";

export default function HeroSection({ 
  greeting = "Hello! I'm", 
  name = "Joe Hill", 
  subtitle, 
  description
}) {
  if (Platform.OS === 'web') {
    return (
      <>
        <style dangerouslySetInnerHTML={{
          __html: `
            .responsive-hero {
              background-color: #ffffff;
              padding: 60px 40px;
              display: flex;
              flex-direction: row;
              align-items: center;
              min-height: 500px;
              gap: 40px;
            }
            
            .responsive-hero-content {
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              max-width: 600px;
            }
            
            .responsive-hero-greeting {
              font-size: 18px;
              color: #6c757d;
              margin-bottom: 8px;
              font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
              font-weight: 400;
            }
            
            .responsive-hero-name {
              font-size: 48px;
              font-weight: 900;
              color: #212529;
              margin-bottom: 16px;
              line-height: 1.1;
              font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
            }
            
            .responsive-hero-subtitle {
              font-size: 20px;
              color: #495057;
              margin-bottom: 20px;
              line-height: 1.3;
              font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
              font-weight: 600;
            }
            
            .responsive-hero-description {
              font-size: 16px;
              color: #6c757d;
              line-height: 1.5;
              margin-bottom: 30px;
              font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
            }
            
            .responsive-hero-shape {
              width: 200px;
              height: 200px;
              position: relative;
              flex-shrink: 0;
            }
            
            @media (max-width: 768px) {
              .responsive-hero {
                flex-direction: column !important;
                padding: 40px 20px !important;
                min-height: auto !important;
                gap: 30px !important;
              }
              
              .responsive-hero-content {
                align-items: center !important;
                text-align: center !important;
                max-width: 100% !important;
              }
              
              .responsive-hero-greeting {
                font-size: 16px !important;
              }
              
              .responsive-hero-name {
                font-size: 36px !important;
              }
              
              .responsive-hero-subtitle {
                font-size: 18px !important;
              }
              
              .responsive-hero-description {
                font-size: 14px !important;
                max-width: 90% !important;
              }
              
              .responsive-hero-shape {
                width: 140px !important;
                height: 140px !important;
                order: -1 !important;
              }
            }
            
            @media (max-width: 400px) {
              .responsive-hero {
                padding: 30px 12px !important;
                gap: 20px !important;
              }
              
              .responsive-hero-content {
                padding: 0 8px !important;
              }
              
              .responsive-hero-greeting {
                font-size: 14px !important;
                margin-bottom: 6px !important;
              }
              
              .responsive-hero-name {
                font-size: 28px !important;
                margin-bottom: 12px !important;
                line-height: 1.2 !important;
              }
              
              .responsive-hero-subtitle {
                font-size: 16px !important;
                margin-bottom: 12px !important;
              }
              
              .responsive-hero-description {
                font-size: 13px !important;
                margin-bottom: 20px !important;
                max-width: 95% !important;
                line-height: 1.4 !important;
              }
              
              .responsive-hero-shape {
                width: 120px !important;
                height: 120px !important;
              }
            }
          `
        }} />
        <div className="responsive-hero">
          <div className="responsive-hero-content">
            <div className="responsive-hero-greeting">{greeting}</div>
            <div className="responsive-hero-name">{name}</div>
            <div className="responsive-hero-subtitle">{subtitle}</div>
            <div className="responsive-hero-description">{description}</div>
            
            <DonationButton text="SEND £1" backgroundColor="#ff6b35" marginTop={30} />
          </div>
          
          <div className="responsive-hero-shape">
            <PhotoTile 
              name=""
              description=""
              imageSource={require("../assets/images/profile_image.png")}
              backgroundColor="transparent"
              isHeroPhoto={true}
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <View style={styles.hero}>
      <View style={styles.heroContent}>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.description}>{description}</Text>
        
        <DonationButton text="SEND £1" backgroundColor="#ff6b35" marginTop={30} />
      </View>
      
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
    paddingHorizontal: 20,
    paddingVertical: 60,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 500,
  },
  heroContent: {
    flex: 1,
    paddingRight: 20,
    alignItems: "flex-start",
  },
  greeting: {
    fontSize: 18,
    color: "#6c757d",
    marginBottom: 5,
    textAlign: "left",
  },
  name: {
    fontSize: 48,
    fontWeight: "900",
    color: "#212529",
    marginBottom: 10,
    lineHeight: 52,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 20,
    color: "#495057",
    marginBottom: 20,
    lineHeight: 26,
    textAlign: "left",
  },
  description: {
    fontSize: 16,
    color: "#6c757d",
    lineHeight: 24,
    marginBottom: 30,
    textAlign: "left",
  },
  heroShape: {
    width: 200,
    height: 200,
    position: "relative",
    marginTop: 0,
  },
});