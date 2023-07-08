import React from "react";
import CustomSelect from "./CustomSelect";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function ToolBar() {
  let location = useLocation();
  let path = location.pathname;
  const user = path.split("/");
  const navigate = useNavigate();
  function switchPageP(e) {
    navigate(`/${user[1]}/popular`);
  }
  function switchPage(e) {
    navigate(`/${user[1]}/create`);
  }
  return (
    <div className="heading">
      <div id="headone">
        <div id="logo"></div>
        <CustomSelect />
        <div id="searchbar2">
          <box-icon name="search">Popular</box-icon>
          <input placeholder="Search Reddit" />
        </div>
      </div>
      <div id="headmid">
        <Link to={`/${user[1]}/popular`}>
          <button title="Popular" onClick={switchPageP} value="popular">
            <box-icon
              type="solid"
              name="right-top-arrow-circle"
              value="popular"
            ></box-icon>
          </button>
        </Link>
        <button title="Create Post" onClick={switchPage} value="create">
          <box-icon name="plus" value="create"></box-icon>
        </button>
        <a href="https://accounts.reddit.com/adsregister?dest=https%3A%2F%2Fads.reddit.com%2F&referrer=https%3A%2F%2Fads.reddit.com%2F&utm_source=d2x_consumer&utm_name=user_menu_cta">
          <button title="Advertize">
            <box-icon type="solid" name="megaphone"></box-icon>
          </button>
        </a>
      </div>
      <div id="headlast">
        <div class="dropdown">
          <button
            class="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <box-icon name="user"></box-icon>
            <span>{user[1]}</span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                <box-icon name="help-circle"></box-icon>Help Center
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <box-icon type="solid" name="megaphone"></box-icon>Advertize on
                Reddit
              </a>
            </li>
            <li>
              <Link to="/" class="dropdown-item">
                <box-icon name="log-in"></box-icon>Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
