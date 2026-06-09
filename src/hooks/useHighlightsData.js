import { useState, useEffect } from 'react';
import { highlightsService } from '../services/highlight.service';

export const useHighlightsData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            const result = await highlightsService.getHighlights();
            setData(result);
            setLoading(false);
        };
        fetch();
    }, []);

    return { data, loading };
};