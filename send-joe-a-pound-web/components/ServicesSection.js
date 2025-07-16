import React from "react";

export default function Service({ icon, title, description }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .service-card-item {
            width: calc(50% - 8px);
            max-width: 300px;
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 12px;
            margin-bottom: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            flex: 0 0 auto;
            box-sizing: border-box;
          }
          
          .service-icon {
            font-size: 32px;
            margin-bottom: 12px;
            display: block;
          }
          
          .service-title {
            font-size: 18px;
            font-weight: 700;
            color: #212529;
            margin-bottom: 8px;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
          }
          
          .service-desc {
            font-size: 14px;
            color: #6c757d;
            text-align: center;
            line-height: 20px;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
          }
          
          @media (max-width: 768px) {
            .service-card-item {
              width: calc(50% - 8px);
              padding: 16px;
              margin-bottom: 16px;
            }
            
            .service-icon {
              font-size: 28px;
            }
            
            .service-title {
              font-size: 16px;
            }
            
            .service-desc {
              font-size: 12px;
              line-height: 16px;
            }
          }
          
          @media (max-width: 400px) {
            .service-card-item {
              width: 280px;
              max-width: 90%;
              padding: 12px;
            }
            
            .service-icon {
              font-size: 24px;
            }
            
            .service-title {
              font-size: 14px;
            }
            
            .service-desc {
              font-size: 10px;
              line-height: 14px;
            }
          }
        `
      }} />
      <div className="service-card-item">
        <span className="service-icon">{icon}</span>
        <h3 className="service-title">{title}</h3>
        <p className="service-desc">{description}</p>
      </div>
    </>
  );
}