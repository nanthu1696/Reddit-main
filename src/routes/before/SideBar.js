import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div id="popular">
        <div id="feeds">
          <h1>FEEDS</h1>
          <Link to={"/"}>
            <box-icon name="home-alt"></box-icon>
            <p>Home</p>
          </Link>
          <Link to={"/popular"}>
            <box-icon type="solid" name="right-top-arrow-circle"></box-icon>
            <p>Popular</p>
          </Link>
        </div>
        <div id="topics">
          <h1>TOPICS</h1>
          <div className="dropdownside">
            <Link to={"/games"}>
              <button className="dropdown-btn">
                <ion-icon name="logo-game-controller-b"></ion-icon>
                <p>Gaming</p>
              </button>
            </Link>
          </div>
          <div className="dropdownside">
            <Link to={"/sports"}>
              <button className="dropdown-btn">
                <box-icon name="baseball"></box-icon>
                <p>Sports</p>
              </button>
            </Link>
          </div>
          <div className="dropdownside">
            <Link to={"/business"}>
              <button className="dropdown-btn">
                <box-icon name="bar-chart"></box-icon>
                <p>Business,...</p>
              </button>
            </Link>
          </div>
          <div className="dropdownside">
            <Link to={"/crypto"}>
              <button className="dropdown-btn">
                <box-icon name="bitcoin"></box-icon>
                <p>Crypto</p>
              </button>
            </Link>
          </div>
          <div className="dropdownside">
            <Link to={"/tv"}>
              <button className="dropdown-btn">
                <box-icon name="tv"></box-icon>
                <p>Television</p>
              </button>
            </Link>
          </div>
          <div className="dropdownside">
            <Link to={"/celebrity"}>
              <button className="dropdown-btn">
                <box-icon name="star"></box-icon>
                <p>Celebrity</p>
              </button>
            </Link>
          </div>
          <div className="dropdownside">
            <button className="dropdown-btn">
              <box-icon name="dots-horizontal-rounded"></box-icon>
              <p>More Topics</p>
              <div className="dropdown-icon">
                <span></span>
                <span></span>
              </div>
            </button>
            <div className="dropdown-cont">
              <Link to={"/art"}>Art</Link>
              <Link to={"/fashion"}>Fashion</Link>
              <Link to={"/history"}>History</Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id="join">
        <p>
          Create an account to follow your favorite communities and start taking
          part in conversations.
        </p>
        <Link to={"/login"}>
          <button>Join Reddit</button>
        </Link>
      </div>
    </div>
  );
}
