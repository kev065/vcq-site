import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const cookieConsentConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'cloud',
      position: 'bottom right',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      enabled: true, // Necessary cookies always enabled
      readOnly: true, // User cannot disable necessary cookies
    },
    analytics: {
      enabled: false, // Analytics cookies disabled by default
      readOnly: false, // User can enable/disable analytics cookies
    },
  },
  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'We use cookies!',
          description:
            'This website uses cookies to ensure you get the best experience.',
          acceptAllBtn: 'Accept', 
          showPreferencesBtn: 'Settings', 
        },
        preferencesModal: {
          title: 'Cookie Preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          sections: [
            {
              title: 'Cookie Usage',
              description:
                'This website uses cookies to ensure you get the best experience. You can customize your preferences below.',
            },
            {
              title: 'Strictly Necessary Cookies',
              description:
                'These cookies are essential for the website to function and cannot be disabled.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytics Cookies',
              description:
                'These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously.',
              linkedCategory: 'analytics',
            },
            {
              title: 'More Information',
              description:
                'For more details about our use of cookies, please read our <a href="/privacy-policy">Privacy Policy</a>.',
            },
          ],
        },
      },
    },
  },
};