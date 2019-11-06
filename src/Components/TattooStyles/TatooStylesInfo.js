import React from 'react';
import { useParams} from 'react-router-dom';
import TattooStylesArr from '../DataFiles/TattooStylesData';

export default function TattooStylesInfo() {
    let {styleId} = useParams();
    return (
        <div>
            <h1>{TattooStylesArr[styleId - 1].title}</h1>
            <img src={TattooStylesArr[styleId - 1].infoimg}></img>
            <img src={TattooStylesArr[styleId - 1].infoimg2}></img>
            <p>{TattooStylesArr[styleId - 1].tattooinfo}</p>
        </div>
    );
}
