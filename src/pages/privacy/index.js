import React from "react";
import "./style.css";

export const Privacy = () => {
  return (
    <div className="privacy-page">
      <h1 className="privacy-title">Privacy Policy</h1>
      <div className="privacy-content">
        <h2>Abohawa - Live Weather Bangla — Privacy Policy</h2>

        <section className="privacy-section">
          <h3>App Overview</h3>
          <p>
            Abohawa - Live Weather Bangla is a Bangla-language weather app for
            people in Bangladesh. It provides local weather information, alerts,
            warnings, and seasonal information in Bangla.
          </p>
        </section>

        <section className="privacy-section">
          <h3>Information We Collect</h3>
          <p>
            We collect only the information needed to operate the app and provide
            relevant weather services:
          </p>
          <ul>
            <li>
              <strong>Location data:</strong> If you grant location permission,
              we collect your device&apos;s approximate or precise latitude and
              longitude. We use this data to determine the weather, alerts, and
              warnings relevant to your area.
            </li>
            <li>
              <strong>Firebase Installation ID:</strong> We collect the unique
              identifier assigned by Firebase to your installation of the app.
              This identifier relates to an app installation rather than directly
              identifying you by name. We use it to associate an app installation
              with the appropriate location and to provide relevant weather alerts
              and warnings.
            </li>
            <li>
              <strong>Technical information:</strong> Google services used by the
              app may process technical information such as the app version,
              operating system, device model, IP address, and diagnostic or
              performance information, depending on the services enabled.
            </li>
            <li>
              <strong>Advertising information:</strong> We use Google AdMob to
              display advertisements. AdMob may collect or process device-level
              and advertising information in accordance with Google&apos;s privacy
              practices.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h3>How We Use the Information</h3>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide weather information for your current or selected area</li>
            <li>Identify alerts and warnings that apply to your location</li>
            <li>Deliver relevant alerts and warnings to your app installation</li>
            <li>Operate, maintain, secure, and improve the app</li>
            <li>Display advertisements through Google AdMob</li>
          </ul>
          <p className="important-note">
            We do not use your location data or Firebase Installation ID to track
            your movements, identify you by name, or sell your personal data.
          </p>
        </section>

        <section className="privacy-section">
          <h3>Permission and Your Choices</h3>
          <p>
            The app explains the location collection and asks for your permission.
            We collect your latitude and longitude for location-based alerts only
            after you grant permission. We associate the Firebase Installation ID
            with that location only when you enable this feature. You may deny the
            request or later revoke location permission in your device settings. If
            you do, location-based weather information, alerts, or warnings may be
            unavailable or less accurate. Where available, you may still use a
            manually selected area.
          </p>
        </section>

        <section className="privacy-section">
          <h3>Information We Do Not Request</h3>
          <p>We do not ask you to provide:</p>
          <ul>
            <li>Your name</li>
            <li>Your phone number</li>
            <li>Your email address</li>
            <li>Your contacts</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h3>Sharing and Third-party Services</h3>
          <p>
            We do not sell your information. We may share or allow information to
            be processed only as needed by service providers that help operate the
            app, or when required by law. The app uses:
          </p>
          <ul>
            <li>
              <strong>Google Firebase:</strong> to identify app installations and
              support the delivery of weather alerts and warnings
            </li>
            <li>
              <strong>Weather data providers:</strong> to retrieve weather data,
              alerts, and warnings for a location
            </li>
            <li>
              <strong>Google AdMob:</strong> to display advertisements
            </li>
          </ul>
          <p>
            These providers process information under their own terms and privacy
            policies. You can learn more from the{" "}
            <a
              href="https://firebase.google.com/support/privacy/"
              target="_blank"
              rel="noreferrer"
            >
              Firebase privacy information
            </a>{" "}
            and the{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Google Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className="privacy-section">
          <h3>Data Retention and Security</h3>
          <p>
            We retain location data and Firebase Installation IDs only for as long
            as reasonably necessary to provide alerts and warnings, operate the
            app, meet legal obligations, and resolve security or technical issues.
            Third-party providers may retain information according to their own
            policies. We use reasonable safeguards intended to protect the
            information, but no electronic storage or transmission method is
            completely secure.
          </p>
        </section>

        <section className="privacy-section">
          <h3>Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will post the
            updated policy on this page and revise the date below. If a change
            materially affects how the app collects or uses information, we will
            provide any additional notice or request any additional permission
            required by applicable law.
          </p>
        </section>

        <section className="privacy-section">
          <h3>Contact Us</h3>
          <p>
            If you have questions or requests concerning this Privacy Policy or
            your information, contact us at:{" "}
            <a href="mailto:techwithmonir@gmail.com">
              techwithmonir@gmail.com
            </a>
          </p>
        </section>

        <div className="privacy-footer">
          <p>Last updated: August 6, 2026</p>
        </div>
      </div>
    </div>
  );
};
