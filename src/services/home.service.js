import { homeMock } from '../mocks/home.mock';

const USE_MOCK = true;

export const homeService = {
  getHero: async () => {
    if (USE_MOCK) return homeMock.hero;
    const res = await fetch('/api/home/hero');
    return res.json();
  },

  getSpecialAlert: async () => {
    if (USE_MOCK) return homeMock.specialAlert;
    const res = await fetch('/api/home/special-alert');
    return res.json();
  },

  getExplore: async () => {
    if (USE_MOCK) return homeMock.explore;
    const res = await fetch('/api/home/explore');
    return res.json();
  },

  getRecentNews: async () => {
    if (USE_MOCK) return homeMock.recentNews;
    const res = await fetch('/api/home/recent-news');
    return res.json();
  },
};