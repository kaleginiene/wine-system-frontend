import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, updateToken] = useState(localStorage.getItem("token") || "");

  if (token) {
    localStorage.setItem("token", token);
  }

  return (
    <AuthContext.Provider value={{ token, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
