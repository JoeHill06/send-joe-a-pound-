import React from 'react';

const DonationButton = ({ 
  text = "Donate £1", 
  backgroundColor = '#1e90ff', 
  textColor = 'white',
  marginTop = 15 
}) => {
  const url = "https://buy.stripe.com/cNi3cubpN7CH4J60BjaIM00";

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .donation-button {
            background-color: ${backgroundColor};
            color: ${textColor};
            padding: 16px 32px;
            border-radius: 10px;
            margin-top: ${marginTop}px;
            border: none;
            font-size: 20px;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            text-align: center;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
          
          .donation-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
          }
          
          .donation-button:active {
            transform: translateY(0);
          }
          
          @media (max-width: 768px) {
            .donation-button {
              padding: 12px 24px;
              font-size: 16px;
            }
          }
          
          @media (max-width: 400px) {
            .donation-button {
              padding: 10px 20px;
              font-size: 14px;
            }
          }
        `
      }} />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="donation-button"
      >
        {text}
      </a>
    </>
  );
};

export default DonationButton;