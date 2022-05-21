import "./App.css"
// TODO: answer here
import React, { useEffect, useContext } from "react";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import { getSession } from "./api/auth";
import { SessionContext } from './context/SessionContext';

function App() {
  // TODO: answer here
  const { isLogin, setIsLogin, setIdUser } = useContext(SessionContext)
  const getAuth = async ()=> {
    try {
      const session = await getSession();
      const respons = session?.data?.user?.id;
      if (respons){
        setIsLogin(true)
        setIdUser(respons);
      }
    } catch (err) {
      console.log("error fetch data ", err);
    }
  }
  useEffect(() => {
    getAuth()
  }, [isLogin])
  
  return ( 
    <div aria-label="App">
      <Navbar/>
      {isLogin ? <PostCard/> : ''}
      
      <p aria-label="App Title">My APP</p>
    </div>
  )
}

export default App
