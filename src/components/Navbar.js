import { useEffect, useState } from "react"
import React from "react"
import Instagram from "../assets/insta.png";
import "../style/style.css";

import { getSession, auth } from "../api/auth"
import Profile from "./Profile";
// import { useContext } from "react"
// import { SessionContext } from "../context/SessionContext"
// import { Profiler } from "react";

export default function Navbar() {
  // TODO: answer here
  const[isLogin, setIsLogin] = useState(false);
  const[profile, setProfile] = useState();
  const getProfile = async ()=> {
    try {
      const session = await getSession();
      const respons = session.data.user;
      setIsLogin(true);
      setProfile(respons);
      //console.log(respons);
    } catch (err) {
      console.log("error fetch data ", err);
    }
  }
  useEffect(()=> {
    getProfile();
  },[]);
    return(
      <div aria-label="Navbar" className="navbar">
        <div>
          <a href="/" aria-label="App Title"/>
          <img src={Instagram} aria-label="App Logo"/>
        </div>
        <div>
          <input type="text" className="nav-cari" placeholder="Search"/>
        </div>
        <div>
          {isLogin ?(
            <div className="user-login">
              <p className="user-profile" onClick={() => Profile()}>{profile.name}</p>
              <img src={profile.image}  className="profile-pict"/>
            </div>
          ):(
            <div>
              <button onClick={() => auth()}>Login</button>
              
            </div>
          )}
        </div>
        

      </div>
    )


}
