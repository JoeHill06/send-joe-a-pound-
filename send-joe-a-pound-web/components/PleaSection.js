import React from "react";
import DonationButton from "./DonationButton";

export default function PleaSection({ 
  title = "The Plea", 
  mainText, 
  subText, 
  gratitudeText
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .plea-section {
            background-color: #fff3cd;
            padding: 40px;
            margin-top: 2px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .plea-title {
            font-size: 32px;
            font-weight: 800;
            color: #212529;
            margin-bottom: 20px;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
          }
          
          .plea-text {
            font-size: 16px;
            color: #495057;
            line-height: 24px;
            text-align: center;
            margin-bottom: 15px;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
          }
          
          .plea-subtext {
            font-size: 14px;
            color: #6c757d;
            text-align: center;
            margin-bottom: 30px;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
          }
          
          .gratitude {
            font-size: 14px;
            color: #6c757d;
            text-align: center;
            font-style: italic;
            line-height: 20px;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
          }
          
          @media (max-width: 768px) {
            .plea-section {
              padding: 20px;
            }
            
            .plea-title {
              font-size: 24px;
            }
            
            .plea-text {
              font-size: 14px;
              line-height: 20px;
            }
            
            .plea-subtext {
              font-size: 12px;
            }
            
            .gratitude {
              font-size: 12px;
              line-height: 16px;
            }
          }
          
          @media (max-width: 400px) {
            .plea-section {
              padding: 12px;
            }
            
            .plea-title {
              font-size: 20px;
            }
            
            .plea-text {
              font-size: 12px;
              line-height: 18px;
            }
            
            .plea-subtext {
              font-size: 10px;
            }
            
            .gratitude {
              font-size: 10px;
              line-height: 14px;
            }
          }
        `
      }} />
      <div className="plea-section">
        <h2 className="plea-title">{title}</h2>
        <p className="plea-text">{mainText}</p>
        <p className="plea-subtext">{subText}</p>
        
        <DonationButton text=" SEND JOE A POUND " backgroundColor="#ff6b35" marginTop={30} />
        
        <p className="gratitude">{gratitudeText}</p>
      </div>
    </>
  );
}