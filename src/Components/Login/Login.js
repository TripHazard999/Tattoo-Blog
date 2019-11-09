import React from "react";
import MOCK_DATA from "../DataFiles/MOCK_DATA";

export default function Login() {
  return (
    <div className="loginwrapper">
      <div className="diamond"></div>
      <form className="form">
        <h1 className="formitem">{MOCK_DATA.LOGIN.header}</h1>
        <div className="test">
          <i className="fa fa-user-circle">
            <input
              type="text"
              placeholder="username"
              className="formitem"
            ></input>
          </i>
        </div>
        <div className="test">
          <i className="fa fa-lock"></i>
          <input
            type="password"
            placeholder="password"
            className="formitem"
          ></input>
        </div>
        <button className="formitem button">{MOCK_DATA.LOGIN.login}</button>
      </form>
    </div>
  );
}
