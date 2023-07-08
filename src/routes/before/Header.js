import React from "react";
import { Link } from "react-router-dom";
import "boxicons";
export default function Header() {
  return (
    <div className="heading">
      <div id="headone">
        <div id="logo"></div>
        <div id="searchbar">
          <box-icon name="search"></box-icon>
          <input placeholder="Search Reddit" />
        </div>
      </div>
      <div id="headtwo">
        <a href="https://play.google.com/store/apps/details?id=com.reddit.frontpage">
          <button id="get">
            <box-icon name="qr-scan"></box-icon>
            Get App
          </button>
        </a>
        <Link to={"/login"}>
          <button id="login" onClick={() => console.log("clicked")}>
            Log In
          </button>
        </Link>
        <div class="dropdown">
          <button
            class="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <box-icon name="user"></box-icon>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                href="https://support.reddithelp.com/hc/en-us"
              >
                <box-icon name="help-circle"></box-icon>Help Center
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://accounts.reddit.com/adsregister?dest=https%3A%2F%2Fads.reddit.com%2F&referrer=https%3A%2F%2Fads.reddit.com%2F&utm_source=d2x_consumer&utm_name=user_menu_cta"
              >
                <box-icon type="solid" name="megaphone"></box-icon>Advertize on
                Reddit
              </a>
            </li>
            <li>
              <Link to={"/login"} class="dropdown-item">
                <box-icon name="log-in"></box-icon>Log In/ Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
