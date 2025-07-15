import { TouchableOpacity, Text, Platform, Linking } from 'react-native';

const DonationButton = ({ 
  text = "Donate £1", 
  backgroundColor = '#1e90ff', 
  textColor = 'white',
  marginTop = 15 
}) => {
  const url = "https://buy.stripe.com/cNi3cubpN7CH4J60BjaIM00";

  const handlePress = () => {
    if (Platform.OS !== 'web') {
      Linking.openURL(url);
    }
  };

  if (Platform.OS === 'web') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          padding: '16px 32px',
          borderRadius: '10px',
          marginTop: marginTop,
          border: 'none',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'inline-block',
          textAlign: 'center'
        }}
      >
        {text}
      </a>
    );
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: backgroundColor,
        padding: 16,
        borderRadius: 10,
        marginTop: marginTop,
        alignSelf: 'center'
      }}
    >
      <Text style={{ color: textColor, fontSize: 20, fontWeight: 'bold' }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default DonationButton;