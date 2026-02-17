import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log("Form data prepared for submission:", formData);
    await axios
      .post("http://localhost:3000/create-post", formData)
      .then((res) => {
        console.log("Post created successfully:", res.data);
        navigate("/feed");
      });
  };
  return (
    <div className="createpost-container">
      <form className="createpost" onSubmit={handleSubmit}>
        <h1>Create Post</h1>
        <input type="file" name="image_file" accept="image/*" />
        <textarea
          name="caption"
          placeholder="Write a caption..."
          required
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
