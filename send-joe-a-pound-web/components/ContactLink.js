import { Platform, Image } from 'react-native';

export default function ContactLink({ name, imageSource, url }) {
  if (Platform.OS === 'web') {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: isMobile ? '16px' : '18px',
          color: '#1e90ff',
          marginBottom: '10px',
          fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <Image 
          source={imageSource}
          style={{
            width: isMobile ? 20 : 24,
            height: isMobile ? 20 : 24,
            objectFit: 'contain'
          }}
        />
        {name}
      </a>
    );
  }

  // For native platforms, you might want to use Linking
  return null;
}