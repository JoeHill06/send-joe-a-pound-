import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Platform } from "react-native";
import Clipboard from '@react-native-clipboard/clipboard';

export default function Contact({ type, text, onPress }) {
  const getContactIcon = (type) => {
    switch(type) {
      case 'instagram':
        return require('../assets/images/Instagram_icon.png');
      case 'LinkedIn':
        return require('../assets/images/LinkedIn.png');
      case 'github':
        return require('../assets/images/git_hub.webp');
      default:
        return '📱';
    }
  };

  const renderContactIcon = (type) => {
    const icon = getContactIcon(type);
    if (typeof icon === 'string') {
      return <Text style={styles.contactIcon}>{icon}</Text>;
    } else {
      return <Image source={icon} style={styles.contactImage} />;
    }
  };

  const handlePress = async () => {
    try {
      if (Platform.OS === 'web') {
        // For web, use navigator.clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
          Alert.alert("Copied!", `${text} has been copied to your clipboard! 📋`);
        } else {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          Alert.alert("Copied!", `${text} has been copied to your clipboard! 📋`);
        }
      } else {
        // For mobile, use React Native clipboard
        await Clipboard.setString(text);
        Alert.alert("Copied!", `${text} has been copied to your clipboard! 📋`);
      }
    } catch (error) {
      Alert.alert("Error", "Could not copy to clipboard");
    }
  };

  return (
    <TouchableOpacity 
      style={styles.contactButton} 
      onPress={handlePress}
    >
      <View style={styles.contactButtonContent}>
        {renderContactIcon(type)}
        <Text style={styles.contactButtonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contactButton: {
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 12,
    width: "100%",
    maxWidth: 300,
  },
  contactButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  contactIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  contactImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  contactButtonText: {
    color: "#495057",
    fontSize: 16,
    textAlign: "center",
  },
});