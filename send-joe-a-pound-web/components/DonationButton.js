import { TouchableOpacity, Text, Platform, Linking } from 'react-native';

const openStripePayment = () => {
  const url = "https://buy.stripe.com/cNi3cubpN7CH4J60BjaIM00";
  
  if (Platform.OS === 'web') {
    window.open(url, '_blank');
  } else {
    Linking.openURL(url);
  }
};

const DonationButton = ({ 
  text = "Donate £1", 
  backgroundColor = '#1e90ff', 
  textColor = 'white',
  marginTop = 15 
}) => {
  return (
    <TouchableOpacity
      onPress={openStripePayment}
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