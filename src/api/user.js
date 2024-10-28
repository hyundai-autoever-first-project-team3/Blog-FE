import axios from 'axios';

export const updateUserInfo = async (token, userInfo) => {
  try {
    const response = await axios.patch('/api/member', userInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to update user info', error);
    throw error;
  }
};