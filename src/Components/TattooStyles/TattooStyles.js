import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import TattooStylesArr from "../DataFiles/TattooStylesData";
import MOCK_DATA from "../DataFiles/MOCK_DATA";

export default function TattooStyles() {
  useRouteMatch();
  return (
    <div className="wrapperttoostyles">
      <h1>{MOCK_DATA.TATTOOSTYLES.header}</h1>

      <ul className="styleslist">
        {TattooStylesArr.map(item => (
          <div className="test">
            <img src={item.img} className="stylesimg" alt="tattoophoto"></img>
            <br />
            <p>{item.description}</p>
            <br />
            <li>
              <Link
                to={`/TattooStyles/${item.id}`}
                type="button"
                className="button"
              >
                {item.title}
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
