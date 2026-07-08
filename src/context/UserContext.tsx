import React, { createContext, useState, ReactNode } from "react";
import { User } from "../types/User";

export interface UserContextState {
  users: User[];
  currentUser: User | null;
  logged: boolean;
  currentTab: number;
  modal: boolean;
  addUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: (id: number) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  setCurrentTab: (tab: number) => void;
  setModal: (value: boolean) => void;
}

export const Context = createContext<UserContextState>({} as UserContextState);

interface Props {
  children: ReactNode;
}

const UserProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [logged, setLogged] = useState<boolean>(
    localStorage.getItem("curUserL") === "true"
  );
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);

  const addUser = (user: User) => {
    const newUser = { ...user, id: Date.now() };
    setUsers((prev) => [...prev, newUser]);
  };

  const updateUser = (user: User) => {
    setUsers((prev) => prev.map((u) => (u.id === user.id ? user : u)));
    if (currentUser?.id === user.id) setCurrentUser(user);
  };

  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const login = (email: string, password: string): boolean => {
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setCurrentUser(found);
      setLogged(true);
      localStorage.setItem("curUserL", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    setLogged(false);
    localStorage.setItem("curUserL", "false");
  };

  return (
    <Context.Provider
      value={{
        users,
        currentUser,
        logged,
        currentTab,
        modal,
        addUser,
        updateUser,
        deleteUser,
        login,
        logout,
        setCurrentTab,
        setModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserProvider;