import React from "react";
import DonationButton from "./DonationButton";
import PhotoTile from "./PhotoTile";

export default function HeroSection({ 
  greeting = "Hello! I'm", 
  name = "Joe Hill", 
  subtitle, 
  description
}) {
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
            width: 250px;
            height: 250px;
            position: relative;
            flex-shrink: 0;
            margin-left: 100px;
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
              margin-left: 0 !important;
              margin-bottom: 10px !important;
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
              align-self: center !important;
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
              margin-left: 0 !important;
              margin-bottom: 15px !important;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
              border-radius: 16px !important;
              overflow: hidden !important;
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
              align-self: center !important;
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
            imageSource="./assets/assets/images/profile_image.a3fec22a07afa8bfc8663e82b933b225.png"
            backgroundColor="transparent"
            isHeroPhoto={true}
          />
        </div>
      </div>
    </>
  );
}