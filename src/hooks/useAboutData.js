import { useState, useEffect } from 'react';
import { aboutService } from '../services/about.service';

export const useAboutData = () => {
  const [hero, setHero] = useState(null);
  const [history, setHistory] = useState(null);
  const [features, setFeatures] = useState(null);
  const [premiumPlaces, setPremiumPlaces] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      const [heroData, historyData, featuresData, placesData] = await Promise.all([
        aboutService.getHero(),
        aboutService.getHistory(),
        aboutService.getFeatures(),
        aboutService.getPremiumPlaces(),
      ]);
      setHero(heroData);
      setHistory(historyData);
      setFeatures(featuresData);
      setPremiumPlaces(placesData);
      setLoading(false);
    };
    fetchAll();
  }, []);

  return { hero, history, features, premiumPlaces, loading };
};
