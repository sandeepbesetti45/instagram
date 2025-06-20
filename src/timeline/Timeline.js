import React, { useState } from "react";
import Suggestions from "./Suggestions";
import "./Timeline.css";
import Post from "./POSTS/Post";

function Timeline() {
  const [posts, setPosts] = useState([
     {
          postId: 1, 
          user: "op_sandeep45",
          postImage: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202409/rohit-sharma-131403807-3x4.jpg?VersionId=uHOQBfk6MbnllU1c5OVTlYa0kAKEsDSV",
          likes: 100000,
          timestamp: "2d",
        },
        {
          postId: 2, 
          user: "dileep_dil",
          postImage: "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png",
          likes: 600000,
          timestamp: "9d",
        },
        {
          postId: 3, 
          user: "the_shadow",
          postImage: "https://assets.gqindia.com/photos/66fbb7d78d6b2ee2d50899d7/4:3/w_1440,h_1080,c_limit/MS-Dhoni%20IPL%202025%20salary.jpg",
          likes: 200000,
          timestamp: "3d",
        },
        {
          postId: 4, 
          user: "bharat_143",
          postImage: "https://image.ntnews.com/wp-content/uploads/2025/01/Jasprit-Bumrah_V_jpg--442x260-4g.webp?sw=412&dsz=442x260&iw=400&p=false&r=2.625",
          likes: 400000,
          timestamp: "3d",
        },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
