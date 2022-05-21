import { createContext, useState } from "react"

export const SessionContext = createContext({
  // TODO: answer here
})

export const SessionProvider = ({ children }) => {
  // TODO: answer here
  const [isLogin, setIsLogin] = useState();
  const [idUser, setIdUser] = useState();
  return (
    <SessionContext.Provider value={{ isLogin, setIsLogin, idUser, setIdUser }}>
      {children}
    </SessionContext.Provider>
  );
}
