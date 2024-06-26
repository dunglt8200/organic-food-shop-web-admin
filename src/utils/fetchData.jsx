import axios from 'axios';

export const fetchData = async (url, options = {}) => {
  try {
    const response = await axios.get(url, options);
        return response.data;
  } catch (error) {
        console.error('Error fetching data:', error);
  }
};

export const postData = async (url, data, options = {}) => {
    try {
      const response = await axios.post(url, data, options);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
    }
  };

  export const putData = async (url, data, options = {}) => {
    try {
      const response = await axios.put(url, data, options);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
    }
  };