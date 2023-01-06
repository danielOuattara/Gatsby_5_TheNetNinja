import React from "react";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{props.children}</div>
      <footer>
        <p>Copyright 2023 Daniel OUATTARA</p>
      </footer>
    </div>
  );
}
