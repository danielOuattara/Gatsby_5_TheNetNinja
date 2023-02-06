import React from "react";
import Navbar from "./Navbar";
import "./../styles/global.css";

export default function Layout(props) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{props.children}</div>
      <footer>
        <p>
          Copyright {new Date().getFullYear()} Daniel OUATTARA - Powered by{" "}
          <a href="http://gatsby.com">Gatbsy</a>
        </p>
      </footer>
    </div>
  );
}
