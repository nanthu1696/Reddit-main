import "../styles.css";
import React from "react";
import ToolBar from "./ToolBar";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <ToolBar />
      <Outlet />
    </div>
  );
}
