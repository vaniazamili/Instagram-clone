// TODO: answer here
import { useEffect, useState } from "react"
import LikeDislikeButton from "./LikeDislikeButton"
import Post from "../assets/OIP.jpg";
import Axios from "axios";
import "../style/PostCard.css";
import ProfilePicture from "../assets/miaw.jpg";

export default function PostCard({ image, caption, username, userId, date }) {
  // TODO: answer here
  const [postList, setPostList] = useState([])

  const getPost = async () => {

    const POST_LINK = `https://rg-km.riegan.my.id/api/post/list`

    try {
      const getPostLists = await Axios.get(POST_LINK)
      
      const postListResult = getPostLists.data.results;
      setPostList(postListResult);
      console.log("postList", postList);
    } catch (err) {
      console.log("error fetch data ", err);
    }
  }

  useEffect(() => {
    getPost();
  }, [])
  return(
    <div aria-label="Post Card" className="container">
      <div className="post">
        <div >
          <div className="post-card">
            <img src={Post} alt="Avatar" width="20%" aria-label="Post Image" className="image-post"/>
            <div className="post-data">
              <div className="username-data">
                <img src={ProfilePicture} className="profile-picture"/>
                <a aria-label="Post User Name" className="username">Vania</a>
              </div>
              <p aria-label="Post Date" className="post-tgl">12 Mei 2022</p>
            </div>
            <p aria-label="Post Caption" className="caption">Hai Singa</p>

          <div>
              <LikeDislikeButton/>
          </div>

          </div>
          <div className="post">
        <div >
          <div className="post-card">
            <img src={Post} alt="Avatar" width="20%" aria-label="Post Image" className="image-post"/>
            <div className="post-data">
              <div className="username-data">
                <img src={ProfilePicture} className="profile-picture"/>
                <a aria-label="Post User Name" className="username">Vania</a>
              </div>
              <p aria-label="Post Date" className="post-tgl">12 Mei 2022</p>
            </div>
            <p aria-label="Post Caption" className="caption">Hai Singa</p>

          <div>
              <LikeDislikeButton/>
          </div>

          </div>

        </div>

      </div>
      </div>

    </div>
      
    </div>
  )
}
