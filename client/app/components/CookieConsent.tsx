"use client";

import { useEffect } from 'react';
import 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import { cookieConsentConfig } from '../cookieconsent-config';

declare global {
  interface Window {
    CookieConsentConfig: typeof cookieConsentConfig;
  }
}

export default function CookieConsent() {
  useEffect(() => {

    const initCookieConsent = () => {
      if (window.CookieConsent && typeof window.CookieConsent.run === 'function') {
        window.CookieConsent.run(cookieConsentConfig);
      } else {
      }
    };

    // small delay to ensure the library is loaded
    const timeoutId = setTimeout(initCookieConsent, 500);

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return null;
}