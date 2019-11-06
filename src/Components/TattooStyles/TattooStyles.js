import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import TattooStylesArr from "../DataFiles/TattooStylesData";
import MOCK_DATA from "../DataFiles/MOCK_DATA";

export default function TattooStyles() {
  useRouteMatch();
  return (
    <div>
      <h1>{MOCK_DATA.TATTOOSTYLES.header}</h1>

      <ul>
        {TattooStylesArr.map(item => (
          <div>
            <img src={item.img}></img>
            <br />
            {item.description}
            <br />
            <li>
              <Link to={`/TattooStyles/${item.id}`}>{item.title}</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
