import { ApiError, User } from '@supabase/gotrue-js';
import create from 'zustand';
import { supabase } from '../supabase';

type UserState = {
  user: User | null;
  error: ApiError | null;
  setUser: (user: User | null) => void;
  signInWithGithub: () => Promise<void>;
  signOut: () => Promise<void>;
};

export const useAuthStore = create<UserState>((set) => ({
  user: null,
  error: null,
  setUser: (user: User | null) => set({ user }),
  signInWithGithub: async () => {
    const res = await supabase.auth.signIn(
      { provider: 'github' },
      { redirectTo: 'http://localhost:3000/sites' }
    );
    if (res.error) {
      set({ error: res.error, user: null });
      return;
    }

    set({ user: res.user, error: null });
  },
  signOut: async () => {
    const res = await supabase.auth.signOut();
    if (res.error) {
      set({ error: res.error });
      return;
    }

    set({ user: null, error: null });
  },
}));

export const isAuthorizedSelector = (state: UserState) => !!state.user;
