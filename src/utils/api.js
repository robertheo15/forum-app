import axios from 'axios';

const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';
  const getAccessToken = localStorage.getItem('accessToken');

  const setAccessToken = (accessToken) => localStorage.setItem('accessToken', accessToken);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/users`);
      const { data: { users } } = data;
      return users;
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
      return { error: true, data: error.response.data.message };
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
      const { data, status } = await axios.get(`${BASE_URL}/users/me`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (status >= 400) {
        localStorage.setItem('accessToken', '');
      }
      return { error: false, data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const createThread = async ({ title, category, body }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/threads`, {
        title, category, body,
      }, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      return { error: false, thread: data.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const getThreads = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/threads`);
      const { data: { threads } } = data;
      return threads;
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

  const upVoteThread = async (threadId) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/threads/${threadId}/up-vote`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      return { error: false, vote: data.data };
    } catch (error) {
      return { error: true, vote: null };
    }
  };

  const downVoteThread = async (threadId) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/threads/${threadId}/down-vote`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      return { error: false, vote: data.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const neutralizeVoteThread = async ({ threadId }) => {
    try {
      const response = await axios.post(`${BASE_URL}/threads/${threadId}/neutral-vote`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      return { error: false, data: response.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const createComment = async (threadId, content) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/threads/${threadId}/comments`, {
        content,
      }, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      return { error: false, comment: data.data.comment };
    } catch (error) {
      const { response } = error;
      alert(response.data.message);
      return { error: true, data: null };
    }
  };

  const upVoteComment = async (threadId, commentId) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`, {}, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      return { error: false, vote: data.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const downVoteComment = async (threadId, commentId) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`, {}, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      return { error: false, vote: data.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const neutralizeVoteComment = async ({ threadId, commentId }) => {
    try {
      const response = await axios.post(`${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      return { error: false, data: response.data };
    } catch (error) {
      return { error: true, data: null };
    }
  };

  const getLeaderboard = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/leaderboards`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const { data: { leaderboards } } = data;

      return leaderboards;
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
