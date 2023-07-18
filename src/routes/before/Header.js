import React, { useEffect } from "react";
import { Link, Form, useSubmit } from "react-router-dom";
import "boxicons";
export default function Header({ q }) {
  const submit = useSubmit();
  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);
  return (
    <div className="heading">
      <div id="headone">
        <div id="logo"></div>
        <Link to={"/"}>
          <div id="logoShrink"></div>
        </Link>
        <Form id="searchbar" role="search">
          <box-icon name="search"></box-icon>
          <input
            id="q"
            placeholder="Search Reddit"
            name="q"
            type="search"
            defaultValue={q}
            onChange={(event) => {
              submit(event.currentTarget.form);
            }}
          />
        </Form>
      </div>
      <div id="headtwo">
        <a href="https://play.google.com/store/apps/details?id=com.reddit.frontpage">
          <button id="get">
            <box-icon name="qr-scan"></box-icon>
            <span>Get App</span>
          </button>
        </a>
        <Link to={"/login"}>
          <button id="login" onClick={() => console.log("clicked")}>
            <span>Log In</span>
            <span>
              <box-icon name="log-in"></box-icon>
            </span>
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
