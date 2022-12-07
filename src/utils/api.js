import axios from 'axios';

const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';
  const getAccessToken = localStorage.getItem('accessToken');

  const setAccessToken = (accessToken) => localStorage.setItem('accessToken', accessToken);
  const setAuthorization = {
    headers: {
      Authorization: `Bearer ${getAccessToken}`,
    },
  };

  const getUsers = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/users`);
      return { error: false, users: data.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const login = async ({ email, password }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      return { error: false, data: data.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const register = async ({ name, email, password }) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        name,
        email,
        password,
      });
      return { error: false, data: response.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const getUserLogged = async (token) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { error: false, data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const createThread = async ({ title, category, body }) => {
    try {
      const response = await axios.post(`${BASE_URL}/threads`, {
        title, category, body,
      }, setAuthorization);
      return { error: false, data: response.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const getThreads = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/threads`);
      return { error: false, threads: data.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const getThreadById = async (threadId) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/threads/${threadId}`);
      return { error: false, threadDetail: data.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const upVoteThread = async ({ threadId }) => {
    try {
      const response = await axios.post(`${BASE_URL}/threads/${threadId}/up-vote`, setAuthorization);
      return { error: false, data: response.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const downVoteThread = async ({ threadId }) => {
    try {
      const response = await axios.post(`${BASE_URL}/threads/${threadId}/down-vote`, setAuthorization);
      return { error: false, data: response.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const neutralizeVoteThread = async ({ threadId }) => {
    try {
      const response = await axios.post(`${BASE_URL}/threads/${threadId}/neutral-vote`, setAuthorization);
      return { error: false, data: response.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const createComment = async ({ threadId, content }) => {
    try {
      const response = await axios.post(`${BASE_URL}/threads/${threadId}/comments`, {
        content,
      }, setAuthorization);
      return { error: false, data: response.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const upVoteComment = async ({ threadId, commentId }) => {
    try {
      const response = await axios.post(`${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`, setAuthorization);
      return { error: false, data: response.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const downVoteComment = async ({ threadId, commentId }) => {
    try {
      const response = await axios.post(`${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`, setAuthorization);
      return { error: false, data: response.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const neutralizeVoteComment = async ({ threadId, commentId }) => {
    try {
      const response = await axios.post(`${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`, setAuthorization);
      return { error: false, data: response.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const getLeaderboard = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/leaderboards`, setAuthorization);
      return { error: false, leaderboards: data.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  return {
    getAccessToken,
    setAccessToken,
    getUsers,
    login,
    register,
    getUserLogged,
    createThread,
    getThreads,
    getThreadById,
    upVoteThread,
    downVoteThread,
    neutralizeVoteThread,
    createComment,
    upVoteComment,
    downVoteComment,
    neutralizeVoteComment,
    getLeaderboard,
  };
})();

export default api;
