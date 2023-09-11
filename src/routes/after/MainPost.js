import React from "react";
import MPost from "./MPost";
import Loading from "../before/Loading";
import {
  useLoaderData,
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";

export default function Posts() {
  const { posts } = useLoaderData();
  let location = useLocation();
  let path = location.pathname;
  let user = path.split("/");
  const navigate = useNavigate();
  function switchPage() {
    navigate(`/${user[1]}/create`);
  }
  return (
    <div id="postsContainer1">
      <div id="createBar">
        <box-icon name="user-circle"></box-icon>
        <input placeholder="Create Post" onChange={switchPage} />
        <box-icon name="image"></box-icon>
      </div>
      <div id="togglebar">
        <Link to={`/${user[1]}/hot`} className="hot">
          <box-icon type="solid" name="flame"></box-icon>
          <span>Hot</span>
        </Link>
        <Link to={`/${user[1]}/new`} className="hot">
          <box-icon name="loader-circle"></box-icon>
          <span>New</span>
        </Link>
        <Link to={`/${user[1]}/top`} className="hot">
          <box-icon name="bar-chart-alt-2"></box-icon>
          <span>Top</span>
        </Link>
      </div>
      <div id="afterPost">
        {posts.length ? (
          posts.map((post) => {
            return <MPost data={post} />;
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
