import { aboutMock } from '../mocks/about.mock';

const USE_MOCK = true;

export const aboutService = {
  getHero: async () => {
    if (USE_MOCK) return aboutMock.hero;
    const res = await fetch('/api/about/hero');
    return res.json();
  },

  getHistory: async () => {
    if (USE_MOCK) return aboutMock.history;
    const res = await fetch('/api/about/history');
    return res.json();
  },

  getFeatures: async () => {
    if (USE_MOCK) return aboutMock.features;
    const res = await fetch('/api/about/features');
    return res.json();
  },

  getPremiumPlaces: async () => {
    if (USE_MOCK) return aboutMock.premiumPlaces;
    const res = await fetch('/api/about/premium-places');
    return res.json();
  },
};
