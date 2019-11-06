import React from 'react';
import MOCK_DATA from '../DataFiles/MOCK_DATA';

export default function Home() {
    return(
        <div>
            <h1>{MOCK_DATA.HOME.header}</h1>
            <span>{MOCK_DATA.HOME.quote}</span>
        </div>
    )
}