import axios from 'axios';

const getVideoFromBackend = async (jwtToken) => {
  const apiUrl = 'https://example.com/api/get-video'; // Replace with your backend API endpoint
  const headers = {
    Authorization: `Bearer ${jwtToken}`, // Include the JWT token in the Authorization header
  };

  try {
    const response = await axios.get(apiUrl, { headers });

    // Assuming the backend returns a URL for the video
    const videoUrl = response.data.videoUrl;

    return videoUrl;
  } catch (error) {
    console.error('Error fetching video:', error.message);
    return null;
  }
};

export default getVideoFromBackend;
