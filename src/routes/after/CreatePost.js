import React from "react";
import Tab from "./Tab";

export default function CreatePost() {
  return (
    <div id="createContainer">
      <div id="uploadPost">
        <h1>Create a post</h1>
        <div id="separator"></div>
        <Tab />
        <div></div>
      </div>
      <div id="rules">
        <p>Posting to Reddit</p>
        <ol>
          <li>Remember the human</li>
          <li>Behave like you would in real life</li>
          <li>Look for the original source of content</li>
          <li>Search for duplicates before posting</li>
          <li>Read the community’s rules</li>
        </ol>
      </div>
    </div>
  );
}
