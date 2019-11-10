import React from "react";
import { useParams } from "react-router-dom";
import TattooStylesArr from "../DataFiles/TattooStylesData";

export default function TattooStylesInfo() {
  let { styleId } = useParams();
  return (
    <div className="infowrapper">
      <h1>{TattooStylesArr[styleId - 1].title}</h1>
      <div className="bodywrapper">
        <div className="img">
          <img
            src={TattooStylesArr[styleId - 1].infoimg}
            alt="tattoophoto"
          ></img>
          <img
            src={TattooStylesArr[styleId - 1].infoimg2}
            alt="tattoophoto"
          ></img>
        </div>
        <p>{TattooStylesArr[styleId - 1].tattooinfo}</p>
      </div>
    </div>
  );
}
