import { create } from 'zustand';
import api from '../util/aplClient';

const useAuthStore = create((set) => ({
  principal: null,
  loading: true,

  checkLogin: async () => {
    try {
      const res = await api.get('/api/auth/check');
      set({ principal: { username: res.data.username } });
    } catch (err) {
      console.log('Login check failed:', err);
      set({ principal: null });
    } finally {
      set({ loading: false });
    }
  },

  setLogin: (username) => set({ principal: { username } }),

  setLogout: async () => {
    try {
      await api.post('/api/auth/logout');
    } catch (err) {
      console.log('Logout failed:', err);
    } finally {
      set({ principal: null });
    }
  }
}));

export default useAuthStore;