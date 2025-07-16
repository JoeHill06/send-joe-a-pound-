import React from "react";

export default function Stat({ number, label }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .stat-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
            width: 45%;
            padding: 0;
          }
          
          .stat-number {
            font-size: 36px;
            font-weight: 900;
            color: #ff6b35;
            margin-bottom: 8px;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
          }
          
          .stat-label {
            font-size: 14px;
            color: #adb5bd;
            text-align: center;
            line-height: 18px;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
          }
          
          @media (max-width: 768px) {
            .stat-item {
              width: 100%;
              margin-bottom: 16px;
              padding: 0 10px;
            }
            
            .stat-number {
              font-size: 28px;
            }
            
            .stat-label {
              font-size: 12px;
              line-height: 16px;
            }
          }
          
          @media (max-width: 400px) {
            .stat-item {
              margin-bottom: 12px;
              padding: 0 5px;
            }
            
            .stat-number {
              font-size: 24px;
            }
            
            .stat-label {
              font-size: 10px;
              line-height: 14px;
            }
          }
        `
      }} />
      <div className="stat-item">
        <div className="stat-number">{number}</div>
        <div className="stat-label">{label}</div>
      </div>
    </>
  );
}