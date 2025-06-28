import React from "react";
import "./style.css";

export const Privacy = () => {
  return (
    <div className="privacy-page">
      <h1 className="privacy-title">Privacy Policy</h1>
      <div className="privacy-content">
        <h2>বাংলার আবহাওয়া App - Privacy Policy</h2>
        
        <section className="privacy-section">
          <h3>App Overview</h3>
          <p>বাংলার আবহাওয়া is a Bangla-language weather app designed for the people of rural and semi-urban Bangladesh, providing weather updates and seasonal information in Bangla.</p>
        </section>

        <section className="privacy-section">
          <h3>Information Collection and Use</h3>
          <p>Our app collects minimal information necessary for operation:</p>
          <ul>
            <li>Location Data: With your permission, we access your device's approximate or precise location (latitude and longitude) to provide accurate local weather updates.</li>
            <li>Weather Data: We fetch weather information from the internet based on your location or selected area.</li>
            <li>Technical Information: Basic device details (such as app version, OS) may be collected through Google services.</li>
            <li>Advertising: We use Google AdMob to display advertisements, which may collect device-level information.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h3>What We Don't Collect</h3>
          <p>We respect your privacy and DO NOT collect:</p>
          <ul>
            <li>Personal information (such as your name, phone number, or email)</li>
            <li>Contact information</li>
            <li>Any other personal identifiable information not mentioned above</li>
          </ul>
          <p className="important-note">We do NOT use your location for tracking or storing user movement. It is only used temporarily to display your weather data.</p>
        </section>

        <section className="privacy-section">
          <h3>Third-party Services</h3>
          <p>We use the following third-party services:</p>
          <ul>
            <li>Google AdMob – for displaying advertisements</li>
            <li>Weather data providers – for fetching weather data using your location</li>
          </ul>
          <p>These services may collect technical or device-level information as per their respective privacy policies.</p>
        </section>

        <section className="privacy-section">
          <h3>Changes to This Policy</h3>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        </section>

        <section className="privacy-section">
          <h3>Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:techwithmonir@gmail.com">techwithmonir@gmail.com</a></p>
        </section>

        <div className="privacy-footer">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}; 