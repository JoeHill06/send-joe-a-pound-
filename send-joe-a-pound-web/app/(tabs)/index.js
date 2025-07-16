import React from "react";
import { Stack } from "expo-router";
import HeroSection from "../../components/HeroSection";
import Service from "../../components/ServicesSection";
import Stat from "../../components/StatsSection";
import PleaSection from "../../components/PleaSection";
import ContactLink from "../../components/ContactLink";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <style dangerouslySetInnerHTML={{
        __html: `
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
          }
          
          .main-container {
            background-color: #f8f9fa;
            min-height: 100vh;
            overflow-y: auto;
          }
          
          .services-section {
            background-color: #ffffff;
            padding: 40px;
            margin-top: 2px;
          }
          
          .section-title {
            font-size: 32px;
            font-weight: 800;
            color: #212529;
            margin-bottom: 40px;
            text-align: center;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
          }
          
          .services-grid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .stats-section {
            background-color: #212529;
            padding: 40px;
            margin-top: 2px;
          }
          
          .stats-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .stats-title {
            font-size: 32px;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 40px;
            text-align: center;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
          }
          
          .stats-grid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 100%;
            gap: 16px;
          }
          
          .contact-section {
            background-color: #ffffff;
            padding: 40px;
            margin-top: 2px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .contact-title {
            font-size: 32px;
            font-weight: 800;
            color: #212529;
            margin-bottom: 10px;
            text-align: center;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
          }
          
          .contact-subtitle {
            font-size: 16px;
            color: #6c757d;
            text-align: center;
            margin-bottom: 30px;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
          }
          
          @media (max-width: 768px) {
            .services-section {
              padding: 20px;
            }
            
            .section-title {
              font-size: 24px;
              margin-bottom: 20px;
            }
            
            .services-grid {
              justify-content: center;
            }
            
            .stats-section {
              padding: 20px;
            }
            
            .stats-title {
              font-size: 24px;
              margin-bottom: 20px;
            }
            
            .stats-grid {
              flex-direction: column;
              align-items: center;
            }
            
            .contact-section {
              padding: 20px;
            }
            
            .contact-title {
              font-size: 24px;
            }
          }
          
          @media (max-width: 400px) {
            .services-section {
              padding: 12px;
            }
            
            .section-title {
              font-size: 20px;
              margin-bottom: 16px;
            }
            
            .stats-section {
              padding: 12px;
            }
            
            .stats-title {
              font-size: 20px;
              margin-bottom: 16px;
            }
            
            .contact-section {
              padding: 12px;
            }
            
            .contact-title {
              font-size: 20px;
            }
          }
        `
      }} />
      
      <div className="main-container">
        <HeroSection 
          subtitle="A broke software engineer enjoying summer holidays"
          description="I love going to the pub, seeing friends, playing tennis and golf. Sadly also enjoy coding and avoiding job hunting. Currently broke but having the time of my life!"
        />

        {/* Services Section */}
        <div className="services-section">
          <h2 className="section-title">What I Do For Fun</h2>
          <div className="services-grid">
            <Service icon="🍺" title="Drinks" description="Pints with friends = perfect evening" />
            <Service icon="⛳" title="Golf" description="The slice is the most consistent thing in my life." />
            <Service icon="🎾" title="Tennis" description="Decent backhand, terrible serve" />
            <Service icon="🏊‍♂️" title="Swimming" description="Rivers, pools, lakes." />
            <Service icon="💻" title="Coding" description="Nerdy I know. Working on it." />
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-content">
            <h2 className="stats-title">My Summer Stats</h2>
            <div className="stats-grid">
              <Stat number="£39.76" label="Current Bank Balance" />
              <Stat number="∞" label="Friends Seen" />
              <Stat number="Too Many" label="Hangovers" />
              <Stat number="-1" label="Girls Kissed" />
              <Stat number="0" label="Job Applications" />
            </div>
          </div>
        </div>

        <PleaSection 
          mainText="I'm a Computer Science & AI student taking a well-earned break from algorithms, Git conflicts, and caffeine dependency. This summer I just want to enjoy the sun, see my friends, and occasionally afford a pint (or two). I could get a job… But have you seen the weather? If you've ever been a broke student, or just fancy helping someone make it to the next round of beers — I'd love it if you sent me £1. No guilt. No catch. Just broke. ✌️"
          subText="If you enjoyed my story or just want to help a fellow human out..."
          gratitudeText="Every pound helps me buy a pint and avoid the job hunt!"
        />

        {/* Contact Section */}
        <div className="contact-section">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">Let's grab a drink 🍺</p>
          
          <ContactLink 
            name="LinkedIn"
            imageSource="./assets/assets/images/LinkedIn.d112bcc365a601f65aed660ce17aa50c.png"
            url="https://linkedin.com/in/joseph-hill-017903255"
          />
          
          <ContactLink 
            name="Instagram"
            imageSource="./assets/assets/images/Instagram_icon.26d9974a1feec9905a4e0d5e5ddf8db6.png"
            url="https://instagram.com/joehill06"
          />
          
          <ContactLink 
            name="GitHub"
            imageSource="./assets/assets/images/git_hub.ea76ba6c2785210d491fff489a090fe9.webp"
            url="https://github.com/joehill06"
          />
        </div>
      </div>
    </>
  );
}