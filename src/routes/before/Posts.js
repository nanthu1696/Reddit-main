import React from "react";
import Post from "./Post";
import Loading from "./Loading";
import { useLoaderData, Link } from "react-router-dom";

export default function Posts() {
  const { posts } = useLoaderData();
  return (
    <div id="postsContainer">
      <div>
        <div id="postheading">Popular Posts</div>
        <div id="togglebar">
          <Link to={"/hot"} className="hot">
            <box-icon type="solid" name="flame"></box-icon>
            <span>Hot</span>
          </Link>
          <Link to={"/new"} className="hot">
            <box-icon name="loader-circle"></box-icon>
            <span>New</span>
          </Link>
          <Link to={"/top"} className="hot">
            <box-icon name="bar-chart-alt-2"></box-icon>
            <span>Top</span>
          </Link>
        </div>
        {posts.length ? (
          posts.map((post) => {
            return <Post data={post} />;
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
