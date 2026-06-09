// src/hooks/useHomeData.js
import { useState, useEffect } from 'react';
import { homeService } from '../services/home.service';

export const useHomeData = () => {
  const [hero, setHero] = useState(null);
  const [specialAlert, setSpecialAlert] = useState(null);
  const [explore, setExplore] = useState(null);
  const [recentNews, setRecentNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      const [heroData, alertData, exploreData, newsData] = await Promise.all([
        homeService.getHero(),
        homeService.getSpecialAlert(),
        homeService.getExplore(),
        homeService.getRecentNews(),
      ]);
      setHero(heroData);
      setSpecialAlert(alertData);
      setExplore(exploreData);
      setRecentNews(newsData);
      setLoading(false);
    };
    fetchAll();
  }, []);

  return { hero, specialAlert, explore, recentNews, loading };
};