import { highlightsMock } from '../mocks/highlight.mock';

const USE_MOCK = true;

export const highlightsService = {
    getHighlights: async () => {
        if (USE_MOCK) return highlightsMock;
        const res = await fetch('/api/highlights');
        return res.json();
    },
};