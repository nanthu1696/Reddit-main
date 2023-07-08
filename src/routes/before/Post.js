import React, { useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";

const Post = (props) => {
  let { data } = props;
  return (
    <div className="singlepost">
      <div className="voteContainer">
        <div className="buttonContainer">
          <Link to={"/login"}>
            <button>
              <box-icon type="solid" size="md" name="up-arrow-alt"></box-icon>
            </button>
          </Link>
          <span>{data.votes}</span>
          <Link to={"/login"}>
            <button>
              <box-icon type="solid" size="md" name="down-arrow-alt"></box-icon>
            </button>
          </Link>
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
