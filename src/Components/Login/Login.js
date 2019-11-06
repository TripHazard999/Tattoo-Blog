import React from "react";
import MOCK_DATA from "../DataFiles/MOCK_DATA";

export default function Login() {
  return (
    <div>
      <h1>{MOCK_DATA.LOGIN.header}</h1>
      <form>
        <input type="text" placeholder="username"></input>
        <br />
        <input type="password" placeholder="password"></input>
        <br />
        <button>{MOCK_DATA.LOGIN.login}</button>
      </form>
    </div>
  );
}
