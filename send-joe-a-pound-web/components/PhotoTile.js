import React from "react";

export default function PhotoTile({ name, description, imageSource, backgroundColor = "#f0fff0", style, isHeroPhoto = false }) {
  if (isHeroPhoto) {
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
              width: 186px;
              height: 186px;
              border-radius: 50%;
              background-color: #ff6b35;
              padding: 3px;
            }
            
            .hero-photo-image {
              width: 180px;
              height: 180px;
              border-radius: 90px;
              object-fit: cover;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              position: relative;
              z-index: 1;
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
                width: 124px !important;
                height: 124px !important;
                margin: 0 auto !important;
                align-self: center !important;
                background-color: #ff6b35 !important;
                padding: 2px !important;
              }
              
              .hero-photo-image {
                width: 120px !important;
                height: 120px !important;
                border-radius: 60px !important;
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
                width: 102px !important;
                height: 102px !important;
                margin: 0 auto !important;
                align-self: center !important;
                background-color: #ff6b35 !important;
                padding: 1px !important;
              }
              
              .hero-photo-image {
                width: 100px !important;
                height: 100px !important;
                border-radius: 50px !important;
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
              src={typeof imageSource === 'string' ? imageSource : (imageSource.default || imageSource.uri || imageSource)}
              className="hero-photo-image"
              alt="" 
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

  // Regular photo tile (non-hero)
  return (
    <div style={{
      padding: '20px',
      margin: '10px',
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center',
      minHeight: '120px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: backgroundColor
    }}>
      <div style={{ marginRight: '15px' }}>
        {imageSource ? (
          <img 
            src={typeof imageSource === 'string' ? imageSource : (imageSource.default || imageSource.uri || imageSource)}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '40px',
              objectFit: 'cover'
            }}
            alt="Profile"
          />
        ) : (
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '40px',
            backgroundColor: '#e0e0e0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            border: '2px dashed #ccc'
          }}>
            <span style={{ fontSize: '24px' }}>📸</span>
            <span style={{ fontSize: '10px', color: '#666', textAlign: 'center' }}>Add your photo here!</span>
          </div>
        )}
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>{name}</h3>
        <p style={{ fontSize: '16px', lineHeight: '22px', color: '#555' }}>{description}</p>
      </div>
    </div>
  );
}