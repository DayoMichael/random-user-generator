import axios, { AxiosResponse } from 'axios';

export const getCall = async (url: string): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error('Error in GET request:', error);
    throw error;
  }
};