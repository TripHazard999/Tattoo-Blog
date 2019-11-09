import React from "react";
import MOCK_DATA from "../DataFiles/MOCK_DATA";

export default function Home() {
  return (
    <div className="homewrapper">
      <body className="body">
        <h1>{MOCK_DATA.HOME.header}</h1>
        <p>{MOCK_DATA.HOME.quote}</p>
      </body>
      <footer className="footer">
        <text>&copy; {MOCK_DATA.HOME.footer}</text>
        <div className="socialicons">
          <a href="https://www.facebook.com">
            <i className="fa fa-facebook-f"></i>
          </a>

          <a href="https://www.instagram.com">
            <i className="fa fa-instagram"></i>
          </a>

          <a href="https://telegram.org/">
            <i className="fa fa-paper-plane"></i>
          </a>

          <a href="https://mail.google.com/">
            <i className="fa fa-envelope"></i>
          </a>

          <a href="https://github.com/TripHazard999">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
