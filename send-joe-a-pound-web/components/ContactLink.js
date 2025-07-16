import { Platform, Image } from 'react-native';

export default function ContactLink({ name, imageSource, url }) {
  if (Platform.OS === 'web') {
    const isExtraSmall = typeof window !== 'undefined' && window.innerWidth < 400;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: isExtraSmall ? '14px' : (isMobile ? '16px' : '18px'),
          color: '#1e90ff',
          marginBottom: '10px',
          fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <img 
          src={imageSource.default || imageSource.uri || imageSource}
          style={{
            width: isExtraSmall ? 18 : (isMobile ? 20 : 24),
            height: isExtraSmall ? 18 : (isMobile ? 20 : 24),
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