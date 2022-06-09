import api from '../api/api'
import React, {useEffect, useState} from "react";
import styles from './wood-api-data.module.css'

interface Props {
    url: string
}

interface WoodData {
    "name": string,
    "description": string,
    "id": number,
    "location": string,
    "slug": string,
    "lat": number,
    "long": number,
    "url": string
    // description: "This afforestation and reforestation project is located in the Orinoco River basin of Colombia. The plantation is designed to provide long-term economic sustainability for the adjacent natural reserve, dedicated to the conservation of local flora & fauna. We use natural farming techniques to do so."
    // id: 3
    // lat: 6.08824
    // location: "Colombia"
    // long: -67.723885
    // name: "La Pedregoza"
    // slug: "la-pedregoza"
    // species_price_from: 3
    // status: "active"
    // url: "https://tree-nation.com/projects/la-pedregoza"
}

export default function GetData({url}: Props) {
    useEffect(() => {
        getData();
    },[])

    const [data, setData] = useState<WoodData[]>([])

    async function getData(){
        const data = await api<WoodData[]>(url);
        setData(data)
    }

    function cutSentence(sentence: string){
        return sentence.length <= 105 ? sentence : sentence.substring(0, 105)
    }

    console.log(data)
    return <div className={styles.mainWrapper}>
            {
                data.map((WoodData) =>
                    <li className={styles.list} key={WoodData.id}>
                        <b>{WoodData.name} ({WoodData.location}):</b> {cutSentence(WoodData.description)} ...
                        <a href={WoodData.url}>read more</a>
                    </li>
                )
            }
        </div>
}