import React from "react";
import MOCK_DATA from "../DataFiles/MOCK_DATA";

export default function Culture() {
  return (
    <div className="wrapper">
      <h1>{MOCK_DATA.CULTURE.header}</h1>
      <div className="cultureinfo">
        <div className="tattooinfo">
          <img
            src={MOCK_DATA.CULTURE.cultureinfo.paragraph1.img}
            className="cultureimg"
            alt="tattoophoto"
          ></img>
          <p>{MOCK_DATA.CULTURE.cultureinfo.paragraph1.text}</p>
        </div>
        <div className="tattooinfo">
          <img
            src={MOCK_DATA.CULTURE.cultureinfo.paragraph2.img}
            className="cultureimg imgright"
            alt="tattoophoto"
          ></img>
          <p className="textleft">
            {MOCK_DATA.CULTURE.cultureinfo.paragraph2.text}
          </p>
        </div>
        <div className="tattooinfo">
          <img
            src={MOCK_DATA.CULTURE.cultureinfo.paragraph3.img}
            className="cultureimg"
            alt="tattoophoto"
          ></img>
          <p>{MOCK_DATA.CULTURE.cultureinfo.paragraph3.text}</p>
        </div>
        <p className="textcenter">
          {MOCK_DATA.CULTURE.cultureinfo.paragraph4.text}
        </p>
      </div>
    </div>
  );
}
