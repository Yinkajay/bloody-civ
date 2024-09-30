import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY; // Use an environment variable for the API key

export const fetchYouTubeData = async (query) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: query,
        key: API_KEY,
        maxResults: 10,
      },
    });

    return response.data.items;
  } catch (error) {
    console.error('Error fetching YouTube data:', error);
    return [];
  }
};