import React, { use } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Feed = () => {
  const [feedData, setFeedData] = useState([]);
  const navigate = useNavigate();
  
  const fetchFeedData = async () => {
    try{
        await axios.get("http://localhost:3000/feed").then((res)=>{
            setFeedData(res.data.posts)
            
        })
    }
    catch(err){
        console.error("Error fetching feed data:", err);
    }
  };

  useEffect(() => {
    fetchFeedData();
  }, []);
  return (
    <div className="feed-container">
      <header>
        <h1>Feed</h1>
        <button className="create-post-button" onClick={() => navigate("/create-post")}>Create Post</button>
      </header>
      {feedData.map((post) => (
        <div key={post._id} className="post">
          <img src={post.imageUrl} alt="Post" className="post-image" />
          <p>{post.caption}</p>
          <div>
            <button className="delete-button" onClick={() => {
              axios.delete(`http://localhost:3000/delete-post/${post._id}`)
                .then(res => {
                  fetchFeedData(); // Refresh feed data after deletion
                })
                .catch(err => {
                  console.error("Error deleting post:", err);
                });
            }}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
