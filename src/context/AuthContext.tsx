"use client";
import React, {
  ReactNode,
  useEffect,
  useState,
  useContext,
  createContext,
  useMemo,
} from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { User, onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/config/firebase";

const auth = getAuth(firebase_app);

interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType>({ user: null });

export const useAuthContext = () => useContext(AuthContext);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = useMemo(() => ({ user }), [user]);
  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className='flex justify-center items-center min-w-screen min-h-screen bg-primary-light'>
          <CircularProgress color='secondary' />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
