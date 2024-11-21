import { create } from "zustand";

interface UserState {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
  user: string;
  password: string;
  setIsLogged: (isLogged: boolean) => void;
}

const useUserStore = create<UserState>()((set) => ({
  isLogged: false,
  login: () => set({ isLogged: true }),
  logout: () => set({ isLogged: false }),
  user: "",
  password: "",
  setIsLogged: (isLogged) => set({ isLogged }),
}));

export default useUserStore;
