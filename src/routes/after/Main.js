import "../styles.css";
import React from "react";
import ToolBar from "./ToolBar";
import { Outlet, useLoaderData } from "react-router-dom";

export default function Main() {
  let { posts, q } = useLoaderData();
  return (
    <div>
      <ToolBar q={q} />
      <Outlet />
    </div>
  );
}
