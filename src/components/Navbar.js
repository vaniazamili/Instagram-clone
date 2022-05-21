/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useEffect, useState, useContext } from "react"
import React from "react"
import Instagram from "../assets/insta.png";
import "../style/style.css";

import { auth } from "../api/auth"
import { SessionContext } from "../context/SessionContext";
import { getProfile } from "../api/profile";

export default function Navbar() {
  // TODO: answer here
  const { isLogin, idUser } = useContext(SessionContext)
  const[profile, setProfile] = useState();

  useEffect(()=> {
    getProfile(idUser).then(res => setProfile(res?.data?.profile))
  },[idUser]);
  console.log(isLogin)

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
              <p className="user-profile" onClick={()=> auth()} >{profile?.name}</p>
              <img src={profile?.image}  className="profile-pict"/>
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
