import api from '../api/api'
import React, {useEffect, useState} from "react";
import styles from './wood-api-data.module.css'
import {Link} from "react-router-dom";

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
}

export default function WoodApiData({url}: Props) {
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

    return <div className={styles.mainWrapper}>
            {
                data.map((WoodData) =>
                    <li className={styles.list} key={WoodData.id}>
                        <b>{WoodData.name} ({WoodData.location}):</b> {cutSentence(WoodData.description)} ...
                        <Link to={`/wood-api/${WoodData.id}`}> read more</Link>
                    </li>
                )
            }
        </div>
}