import React, { useState } from "react";
import "boxicons";

const Post = (props) => {
  let { data } = props;
  let [prev, setPrev] = useState("");
  function upVote() {
    console.log(prev);
    if (prev === "") {
      data.votes = data.votes + 1;
      setPrev("up");
      return;
    }
    if (prev === "up") {
      return;
    }
    if (prev === "down") {
      if (data.votes === 0) {
        data.votes = data.votes + 1;
        setPrev("up");
        return;
      }
      data.votes = data.votes + 2;
      setPrev("up");
    }
  }
  function downVote() {
    if (prev === "") {
      if (data.votes === 0) {
        return;
      }
      data.votes = data.votes - 1;
      setPrev("down");
      return;
    }
    if (prev === "down") {
      return;
    }
    if (prev === "up") {
      if (data.votes === 1) {
        data.votes = data.votes - 1;
        setPrev("down");
        return;
      }
      data.votes = data.votes - 2;
      setPrev("down");
    }
  }
  return (
    <div className="singlepost">
      <div className="voteContainer">
        <div className="buttonContainer">
          <button onClick={upVote}>
            <box-icon type="solid" size="md" name="up-arrow-alt"></box-icon>
          </button>
          <span>{data.votes}</span>
          <button onClick={downVote}>
            <box-icon type="solid" size="md" name="down-arrow-alt"></box-icon>
          </button>
        </div>
      </div>
      <div className="postText">
        <div id="postDetails">
          <div id="profile">
            <img src={data.profile} alt="profile icon" />
          </div>
          <p>r/{data.community}</p>
          <span>
            . Posted by {data.postedBy} on {data.postedOn}
          </span>
        </div>
        <h3>{data.title}</h3>
        {data.description && <span>{data.description}</span>}
        {data.image && <img src={data.image} alt="Preview" />}
      </div>
    </div>
  );
};

export default Post;
