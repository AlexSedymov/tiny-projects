import React, {useState} from 'react';

export interface WoodSpecies {
    [englishName: string]: Record<string, string>;
}

interface Props {
    data: WoodSpecies
}

export default function WoodList({ data }: Props) {
    return <div>
        {Object.keys(data).map(
            engName => <li>{engName}: {Object.keys(data[engName]).map(
                lang => `(${lang}): ${data[engName][lang]}`
            )}</li>
        )}
    </div>
}