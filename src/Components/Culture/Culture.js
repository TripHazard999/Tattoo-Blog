import React from "react";
import MOCK_DATA from "../DataFiles/MOCK_DATA";

export default function Culture() {
  return (
    <div>
      <h1>{MOCK_DATA.CULTURE.header}</h1>
      <div>
        <img src={MOCK_DATA.CULTURE.cultureinfo.paragraph1.img}></img>
        {MOCK_DATA.CULTURE.cultureinfo.paragraph1.text}
      </div>
      <div>
        <img src={MOCK_DATA.CULTURE.cultureinfo.paragraph2.img}></img>
        {MOCK_DATA.CULTURE.cultureinfo.paragraph2.text}
      </div>
      <div>
        <img src={MOCK_DATA.CULTURE.cultureinfo.paragraph3.img}></img>
        {MOCK_DATA.CULTURE.cultureinfo.paragraph3.text}
      </div>
      <div>{MOCK_DATA.CULTURE.cultureinfo.paragraph4.text}</div>
    </div>
  );
}
