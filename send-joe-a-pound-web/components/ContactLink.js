import React from 'react';

export default function ContactLink({ name, imageSource, url }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .contact-link {
            color: #1e90ff;
            margin-bottom: 10px;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 18px;
            transition: color 0.3s ease;
          }
          
          .contact-link:hover {
            color: #0066cc;
          }
          
          .contact-link img {
            width: 24px;
            height: 24px;
            object-fit: contain;
          }
          
          @media (max-width: 768px) {
            .contact-link {
              font-size: 16px;
            }
            
            .contact-link img {
              width: 20px;
              height: 20px;
            }
          }
          
          @media (max-width: 400px) {
            .contact-link {
              font-size: 14px;
            }
            
            .contact-link img {
              width: 18px;
              height: 18px;
            }
          }
        `
      }} />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        <img 
          src={typeof imageSource === 'string' ? imageSource : (imageSource.default || imageSource.uri || imageSource)}
          alt={name}
        />
        {name}
      </a>
    </>
  );
}