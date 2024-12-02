import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { jwtDecode } from 'jwt-decode';

interface AuthState {
  token: string | null;
  user: {
    id: string;
    email: string;
    role: 'admin' | 'user';
  } | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
  isAdmin: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      user: null,

      login: (token) => {
        const user = jwtDecode(token);
        set({ token, user });
      },

      logout: () => {
        set({ token: null, user: null });
      },

      isAuthenticated: () => {
        const { token } = get();
        if (!token) return false;

        try {
          const { exp } = jwtDecode(token);
          return exp ? Date.now() < exp * 1000 : false;
        } catch {
          return false;
        }
      },

      isAdmin: () => {
        const { user } = get();
        return user?.role === 'admin';
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);