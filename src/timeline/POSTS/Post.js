import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, AvatarGroup } from "@mui/material";
import React,{useState} from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "./Post.css"

function Post({ user, postImage, likes, timestamp }) {
   const [isLiked, setIsLiked] = useState(false);
   const [likesCount, setLikesCount] = useState(likes);

    const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => prev + (isLiked ? -1 : 1));
  };

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202409/rohit-sharma-131403807-3x4.jpg?VersionId=uHOQBfk6MbnllU1c5OVTlYa0kAKEsDSV' alt="user profile pic" size={"sm"}/> {" "}
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="Post Image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
               {isLiked ? (
              <FavoriteIcon
                className="postIcon"
                onClick={handleLike}
                style={{ color: "red", cursor: "pointer" }}
              />
            ) : (
              <FavoriteBorderIcon
                className="postIcon"
                onClick={handleLike}
                style={{ color: "white", cursor: "pointer" }}
              />
            )}
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave" >
            <BookmarkBorderIcon  className="postIcon" />
          </div>
        </div>
        Liked by {likesCount} people.
      </div>
    </div>
  );
}

export default Post;
