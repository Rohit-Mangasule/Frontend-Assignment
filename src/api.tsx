import axios from 'axios';
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchPhotos = async (): Promise<string[]> => {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: { count: 9 },
        headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` }
    });
    return response.data.map((photo: any) => photo.urls.small);
};
