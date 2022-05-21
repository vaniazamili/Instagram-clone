// TODO: answer here
import { useEffect, useState } from "react"
import "../style/LikeDislike.css";

const Button = () => {
    const[likeCount, setLikeCount] = useState(0);
    const[dislikeCount, setDislikeCount] = useState(0);
    const[isLiked, setIsLike] = useState(false);
    const[isDisliked, setIsDislike] = useState(false);
    
    const handleLikeButton = () => {
        if(isLiked){
            setIsLike(false);
            setLikeCount(likeCount- 1);
        }else{
            setIsLike(true);
            setLikeCount(likeCount + 1);
            if(isDisliked){
                setIsDislike(false);
                setLikeCount(likeCount + 1);
                setDislikeCount(dislikeCount - 1);
            }
        }
    }
    
    const handleDislikeButton = () =>{
        if(isDisliked){
            setIsDislike(false);
            setDislikeCount(dislikeCount- 1);
        }else{
            setIsDislike(true);
            setDislikeCount(dislikeCount + 1);
            if(isLiked){
                setIsLike(false);
                setDislikeCount(dislikeCount + 1);
                setLikeCount(likeCount - 1);
            }
        }
    }
    return(
        <>
        <div className="btn-likeDislike">
            <div className="btn-like">
                <button className={[isLiked ? "button-like": null]} aria-label="Like Button" onClick={()=> {handleLikeButton()}}>
                    <span>Like {likeCount}</span>
                </button>
            </div>
            <div className="btn-dislike">
                <button className={[isDisliked ? "button-dislike": null]} aria-label="Dislike Button" onClick={()=> {handleDislikeButton()}}>
                    <span>Dislike {dislikeCount}</span>
                </button>
            </div>
        </div>
        </>
    )
}
export default function LikeDislikeButton({id, isLiked, isDisliked, likeCount, dislikeCount}) {
    // TODO: answer here
    return(
        <Button
        id={id}
        isLiked={isLiked}
        isDisliked={isDisliked}
        likeCount={likeCount}
        dislikeCount={dislikeCount}
        />
        
    )
    
}