import callAPI from '../auth/callAPI';

export const fetchData = async (url, options = {}) => {
  try {
    const authToken = localStorage.getItem('token');
    if (authToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${authToken}`,
      };
    }
    const response = await callAPI.get(url, options);
        return response.data;
  } catch (error) {
        console.error('Error fetching data:', error);
  }
};

export const postData = async (url, data, options = {}) => {
    try {
      const authToken = localStorage.getItem('token');
    if (authToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${authToken}`,
      };
    }
      const response = await callAPI.post(url, data, options);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
    }
  };

  export const putData = async (url, data, options = {}) => {
    try {
      const authToken = localStorage.getItem('token');
    if (authToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${authToken}`,
      };
    }
      const response = await callAPI.put(url, data, options);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
    }
  };