import { createContext, useState, useContext, ReactNode } from "react";

interface AuthContext {
  logged: boolean;
  singIn(gitName: string): void;
  singOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@ly-frontend:on");
    return !!isLogged;
  });

  const singIn = (gitName: string) => {
    if (gitName === "RpThiagoluiz")
      localStorage.setItem("@ly-frontend:on", "true");
    setLogged(true);
  };

  const singOut = () => {
    localStorage.removeItem("@ly-frontend:on");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContext => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
